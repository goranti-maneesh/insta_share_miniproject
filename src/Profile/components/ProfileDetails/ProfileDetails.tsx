import {
	ProfileImageAndStoriesContainer,
	ProfileImageDetailsContainer,
	ProfileImage,
	ProfileDetailsContainer,
	UserName,
	UserStats,
	MobileProfileImage,
	StatContainer,
	StatCount,
	StatName,
	UserDescriptionContainer,
	UserId,
	Description,
	StoriesUlElement,
	EachStoryLiElement,
	EachStoryImageContainer,
	EachStoryImgElement,
	HorizontalLine,
	PostsAndVectorImageContainer,
	VectorImage,
	PostsTitle,
	PostsUlElement,
	EachPostLiElement,
	EachPostImgElement,
	EmptyPostsContainer,
	EmtptyPostsImageContainer,
	EmptyPostsImage,
	EmptyPostsHeading,
} from "./styledComponents";

import { profileDetailsPropTypes } from "../../stores/Types/types";

import {
	imageBaseUrl,
	vectorImageAltText,
	profilePicAltText,
	storyImageAltText,
	postImageAltText,
	postsText,
	followersText,
	followingText,
	NoPostsText,
	postsTitle
} from "../../../Common/constants/LocalConstants";

export const Profile = (props: profileDetailsPropTypes) => {
	const { profileDetails } = props;
	const {
		postsCount,
		profilePic,
		userName,
		posts,
		followersCount,
		followingCount,
		userId,
		userBio,
		stories,
	} = profileDetails;

	const renderUserStats = () => (
		<UserStats>
			<MobileProfileImage src={profilePic} alt={profilePicAltText} />
			<StatContainer>
				<StatCount>{posts.length}</StatCount>
				<StatName> {postsText}</StatName>
			</StatContainer>
			<StatContainer>
				<StatCount>{followersCount}</StatCount>
				<StatName> {followersText}</StatName>
			</StatContainer>
			<StatContainer>
				<StatCount>{followingCount}</StatCount>
				<StatName> {followingText}</StatName>
			</StatContainer>
		</UserStats>
	);

	const renderProfileImageAndDetails = () => (
		<ProfileImageDetailsContainer>
			<ProfileImage src={profilePic} alt={profilePicAltText} />
			<ProfileDetailsContainer>
				<UserName>{userName}</UserName>
				{renderUserStats()}
				<UserDescriptionContainer>
					<UserId>{userId}</UserId>
					<Description>{userBio}</Description>
				</UserDescriptionContainer>
			</ProfileDetailsContainer>
		</ProfileImageDetailsContainer>
	);

	const renderStories = () => (
		<StoriesUlElement>
			{stories.map((eachStory) => (
				<EachStoryLiElement key={eachStory.id}>
					<EachStoryImageContainer>
						<EachStoryImgElement
							src={eachStory.image}
							alt={storyImageAltText}
						/>
					</EachStoryImageContainer>
				</EachStoryLiElement>
			))}
		</StoriesUlElement>
	);

	const renderPosts = () => (
		<PostsUlElement>
			{posts.map((eachPost) => (
				<EachPostLiElement key={eachPost.id}>
					<EachPostImgElement
						src={eachPost.image}
						alt={postImageAltText}
					/>
				</EachPostLiElement>
			))}
		</PostsUlElement>
	);

	const renderEmptyPosts = () => (
		<EmptyPostsContainer>
			<EmtptyPostsImageContainer>
				<EmptyPostsImage />
			</EmtptyPostsImageContainer>
			<EmptyPostsHeading>{NoPostsText}</EmptyPostsHeading>
		</EmptyPostsContainer>
	);

	return (
		<div>
			<ProfileImageAndStoriesContainer>
				{renderProfileImageAndDetails()}
				{renderStories()}
			</ProfileImageAndStoriesContainer>
			<HorizontalLine />
			<PostsAndVectorImageContainer>
				<VectorImage
					src={`${imageBaseUrl}/v1675091138/Vector_upvsd9.png`}
					alt={vectorImageAltText}
				/>
				<PostsTitle>{postsTitle}</PostsTitle>
			</PostsAndVectorImageContainer>
			{postsCount > 0 ? renderPosts() : renderEmptyPosts()}
		</div>
	);
};
