import { useTranslation } from "react-i18next";

import { StoriesHook } from "../../hooks/UserStories/useUserStoriesHook";
import { homePagePropsTypes } from "../../stores/Types/UserPostsTypes";

import EachPost from "../EachPost";
import UserStories from "../UserStories/index";

import {
	HomePageContainer,
	SearchResultsTitle,
	EachPostUl,
} from "./styledComponents";

export const HomePage = (props: homePagePropsTypes): JSX.Element => {
	const { searchStatus } = props;

	const { t } = useTranslation();

	const renderSuccessView = (): JSX.Element => {
		const { userPostsData, searchStatus } = props;
		console.log(userPostsData, 'userPostsData')
		return (
			<EachPostUl searchStatus={searchStatus}>
				{userPostsData.posts.map((eachPost) => (
					<EachPost key={eachPost.postId} post={eachPost} />
				))}
			</EachPostUl>
		);
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
			{renderSuccessView()}
		</HomePageContainer>
	);
};
