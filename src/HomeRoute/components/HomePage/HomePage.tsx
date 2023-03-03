import { useTranslation } from "react-i18next";

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

import { StoriesHook } from "../../hooks/UserStories/useUserStoriesHook";
import { homePagePropsTypes } from "../../stores/Types/UserPostsTypes";

import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";
import { constraints } from "../../../Common/utils/Constraints";
import {
	imageBaseUrl,
	noSearchViewImageAltText,
} from "../../../Common/constants/LocalConstants";

export const HomePage = (props: homePagePropsTypes): JSX.Element => {
	const { searchStatus } = props;

	const { t } = useTranslation();

	const renderSuccessView = (): JSX.Element => {
		const { userPostsData, searchStatus } = props;
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
				src={`${imageBaseUrl}/v1671980655/Group_s5njey.png`}
				alt={noSearchViewImageAltText}
			/>
			<NoSearchViewHeading>{t<string>("searchResults.searchNotFoundText")}</NoSearchViewHeading>
			<NoSearchViewText>
			{t<string>("searchResults.tryDifferentKeywordText")}
			</NoSearchViewText>
		</NoSearchViewContainer>
	);

	const renderOverAllViews = () => {
		const { constraint } = props;
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
				<SearchResultsTitle>{t<string>("searchResults.searchResultsText")}</SearchResultsTitle>
			) : (
				<StoriesHook>
					<UserStories />
				</StoriesHook>
			)}
			{renderOverAllViews()}
		</HomePageContainer>
	);
};
