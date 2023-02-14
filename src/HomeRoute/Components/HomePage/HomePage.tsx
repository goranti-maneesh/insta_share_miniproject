import {
	HomePageContainer,
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
import { homePagePropsTypes } from "../../Stores/Types/UserPostsTypes";

import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";
import {constraints} from "../../../Common/utils/Constraints"

export const HomePage = (props: homePagePropsTypes): JSX.Element => {
	const { searchStatus } = props;

	const renderSuccessView = (): JSX.Element => {
		const { userPostsData, searchStatus } = props;
		console.log(userPostsData);
		return (
			<EachPostUl searchStatus={searchStatus}>
				{userPostsData.posts.map((eachPost) => (
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
			case constraints.success:
				return renderSuccessView();
			case constraints.loading:
				return renderLoadingView();
			case constraints.failure:
				return renderFailureView();
			case constraints.noResults:
				return renderNoResultsView();
		}
	};

	return (
		<HomePageContainer>
			{searchStatus ? (
				<SearchResultsTitle>Search Results</SearchResultsTitle>
			) : (
				<StoriesHook>
					<UserStories />
				</StoriesHook>
			)}
			{renderOverAllViews()}
		</HomePageContainer>
	);
};
