import { useEffect, useState } from "react";

import {
	SearchedResultsContainer,
	SearchResultsTitle,
	EachPostUl,
	PostsLoader,
	NoSearchViewContainer,
	NoSearchViewImage,
	NoSearchViewHeading,
	NoSearchViewText
} from "./styledComponents";

import EachPost from "../EachPost";

import { searchResultsTypes } from "../../Stores/Types/UserSearchedPostsTypes";
import {PostLikeStatusHook} from '../../Hooks/PostLikeStatus/usePostLikeStatusHook'

import Failure from "../../../Common/Failure";
import Loader from "../../../Common/Loader";

export const SearchResults = (props: searchResultsTypes): JSX.Element => {

	const renderSuccessView = (): JSX.Element => {
		const { userSearchedPostsData } = props;
		return (
			<EachPostUl>
				{userSearchedPostsData.posts.map((eachPost) => (
					<PostLikeStatusHook>
						<EachPost key={eachPost.postId} post={eachPost} />
					</PostLikeStatusHook>
				))}
			</EachPostUl>
		);
	};

	const renderFailureView = (): JSX.Element => {
		const {onClickState} = props
		return <Failure getPostsData={onClickState} />;
	};

	const renderLoadingView = (): JSX.Element => (
		<PostsLoader>
			<Loader width={53} height={53} />
		</PostsLoader>
	);

	const renderNoResultsView = (): JSX.Element => (
		<NoSearchViewContainer>
			<NoSearchViewImage src="https://res.cloudinary.com/degjdup40/image/upload/v1671980655/Group_s5njey.png" alt="no search view"/>
			<NoSearchViewHeading>Search Not Found</NoSearchViewHeading>
			<NoSearchViewText>Try different keyword or search again</NoSearchViewText>
		</NoSearchViewContainer>
	)

	const renderOverAllViews = () => {
		const { constraint } = props;
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
			<SearchResultsTitle>Search Results</SearchResultsTitle>
			{renderOverAllViews()}
		</SearchedResultsContainer>
	);
};
