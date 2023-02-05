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

import { profileDetailsPropTypes } from "../../Stores/Types/types";

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

	const renderProfileImageAndDetails = () => (
		<ProfileImageDetailsContainer>
			<ProfileImage src={profilePic} alt={userName} />
			<ProfileDetailsContainer>
				<UserName>{userName}</UserName>
				<UserStats>
					<MobileProfileImage src={profilePic} alt={userName} />
					<StatContainer>
						<StatCount>{posts.length}</StatCount>
						<StatName> posts</StatName>
					</StatContainer>
					<StatContainer>
						<StatCount>{followersCount}</StatCount>
						<StatName> followers</StatName>
					</StatContainer>
					<StatContainer>
						<StatCount>{followingCount}</StatCount>
						<StatName> following</StatName>
					</StatContainer>
				</UserStats>
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
							alt="story image"
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
						alt="story image"
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
			<EmptyPostsHeading>No Posts Yet</EmptyPostsHeading>
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
					src="https://res.cloudinary.com/degjdup40/image/upload/v1675091138/Vector_upvsd9.png"
					alt="vector image"
				/>
				<PostsTitle>Posts</PostsTitle>
			</PostsAndVectorImageContainer>
			{postsCount > 0 ? renderPosts() : renderEmptyPosts()}
		</div>
	);
};
