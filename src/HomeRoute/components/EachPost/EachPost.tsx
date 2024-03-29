import { useState } from "react";

import {
	postImageAltText,
	profilePicAltText,
	likesText
} from "../../../Common/constants/LocalConstants";

import { eachUserPostPropTypes } from "../../stores/Types/UserPostsTypes";
import { PostLikeRequestObjTypes } from "../../stores/Types/PostLikeStatusTypes";

import {
	EachPostli,
	UserDetails,
	ProfilePicBGContainer,
	ProfilePicContainer,
	ProfilePic,
	UserName,
	PostImageConstainer,
	PostImage,
	PostDetailsSection,
	LoveCommentShareContainer,
	IconBtton,
	LoveIconFill,
	LoveIconOutline,
	CommentIcon,
	ShareIcon,
	LikesAndCommentsSection,
	LikesCount,
	Caption,
	CommentsUl,
	CommentLi,
	CommentedUser,
	CommentedUserName,
	Comment,
	CreatedAt,
} from "./styledComponents";

export const EachPost = (props: eachUserPostPropTypes): JSX.Element => {
	const { post } = props;

	const {
		comments,
		createdAt,
		likesCount,
		postDetails,
		postId,
		profilePic,
		userName,
		userId,
	} = post;

	const [isLiked, setLikeStatus] = useState(false as boolean);

	const changeLikedStatus = async (): Promise<void> => {
		const likeStatus = !isLiked;
		setLikeStatus(likeStatus);

		const postLikeStatusRequestObj: PostLikeRequestObjTypes = {
			likeStatusObj: {
				like_status: likeStatus,
			},
			postId,
		};

		await post.fetchPostLikeStatus(postLikeStatusRequestObj);
	};

	const renderLoveCommentShareSection = () => (
		<LoveCommentShareContainer>
			<IconBtton onClick={changeLikedStatus}>
				{isLiked ? (
					<LoveIconFill fill="#F05161" />
				) : (
					<LoveIconOutline />
				)}
			</IconBtton>
			<IconBtton>
				<CommentIcon />
			</IconBtton>
			<IconBtton>
				<ShareIcon />
			</IconBtton>
		</LoveCommentShareContainer>
	);

	const renderLikeAndCommentSection = () => (
		<LikesAndCommentsSection>
			<LikesCount>
				{isLiked ? likesCount + 1 : likesCount} {likesText}
			</LikesCount>
			<Caption>{postDetails.caption}</Caption>
			<CommentsUl>
				{comments.map((eachComment) => (
					<CommentLi key={eachComment.userId}>
						<CommentedUser>
							<CommentedUserName
								to={`/users/${eachComment.userId}`}>
								{`${eachComment.userName}`}
							</CommentedUserName>
							<Comment>{` ${eachComment.comment}`}</Comment>
						</CommentedUser>
					</CommentLi>
				))}
			</CommentsUl>
			<CreatedAt>{createdAt}</CreatedAt>
		</LikesAndCommentsSection>
	);

	return (
		<EachPostli>
			<UserDetails>
				<ProfilePicBGContainer>
					<ProfilePicContainer>
						<ProfilePic src={profilePic} alt={profilePicAltText} />
					</ProfilePicContainer>
				</ProfilePicBGContainer>
				<UserName to={`users/${userId}`}>{userName}</UserName>
			</UserDetails>
			<PostImageConstainer>
				<PostImage src={postDetails.imageUrl} alt={postImageAltText} />
			</PostImageConstainer>
			<PostDetailsSection>
				{renderLoveCommentShareSection()}
				{renderLikeAndCommentSection()}
			</PostDetailsSection>
		</EachPostli>
	);
};
