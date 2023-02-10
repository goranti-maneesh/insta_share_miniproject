import {
	SearchedResultsContainer,
	SearchResultsTitle,
	EachPostUl,
	PostsLoader,
	NoSearchViewContainer,
	NoSearchViewImage,
	NoSearchViewHeading,
	NoSearchViewText,
} from "./styledComponents";

import EachPost from "../EachPost";
import UserStories from "../UserStories/index";

import { StoriesHook } from "../../Hooks/UserStories/useUserStoriesHook";
import { searchResultsTypes } from "../../Stores/Types/UserSearchedPostsTypes";

import Failure from "../../../Common/Failure";
import Loader from "../../../Common/Loader";

export const SearchResults = (props: searchResultsTypes): JSX.Element => {
	const { searchClickStatus } = props;

	const renderSuccessView = (): JSX.Element => {
		const { userSearchedPostsData, searchClickStatus } = props;
		console.log(userSearchedPostsData);
		return (
			<EachPostUl searchClickStatus={searchClickStatus}>
				{userSearchedPostsData.posts.map((eachPost) => (
					<EachPost key={eachPost.postId} post={eachPost} />
				))}
			</EachPostUl>
		);
	};

	const renderFailureView = (): JSX.Element => {
		const { getPostsData } = props;
		return <Failure getPostsData={getPostsData} />;
	};

	const renderLoadingView = (): JSX.Element => (
		<PostsLoader>
			<Loader width={53} height={53} />
		</PostsLoader>
	);

	const renderNoResultsView = (): JSX.Element => (
		<NoSearchViewContainer>
			<NoSearchViewImage
				src="https://res.cloudinary.com/degjdup40/image/upload/v1671980655/Group_s5njey.png"
				alt="no search view"
			/>
			<NoSearchViewHeading>Search Not Found</NoSearchViewHeading>
			<NoSearchViewText>
				Try different keyword or search again
			</NoSearchViewText>
		</NoSearchViewContainer>
	);

	const renderOverAllViews = () => {
		const { constraint } = props;
		console.log(constraint);
		switch (constraint) {
			case "SUCCESS":
				return renderSuccessView();
			case "LOADING":
				return renderLoadingView();
			case "FAILURE":
				return renderFailureView();
			case "NORESULTS":
				return renderNoResultsView();
		}
	};

	return (
		<SearchedResultsContainer>
			{searchClickStatus ? (
				<SearchResultsTitle>Search Results</SearchResultsTitle>
			) : (
				<StoriesHook>
					<UserStories />
				</StoriesHook>
			)}
			{renderOverAllViews()}
		</SearchedResultsContainer>
	);
};
