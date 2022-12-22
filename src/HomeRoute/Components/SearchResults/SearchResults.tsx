import { useEffect, useState } from "react";

import {
	SearchedResultsContainer,
	SearchResultsTitle,
	EachPostUl,
	PostsLoader,
} from "./styledComponents";

import EachPost from "../EachPost";

import { searchResultsTypes } from "../../Stores/Types/UserSearchedPostsTypes";
import {PostLikeStatusHook} from '../../Hooks/PostLikeStatus/usePostLikeStatusHook'

import Failure from "../../../Common/Failure";
import Loader from "../../../Common/Loader";

export const SearchResults = (props: searchResultsTypes): JSX.Element => {

	const renderSuccessView = (): JSX.Element => {
		const { userSearchedPostsData } = props;
		console.log(userSearchedPostsData, "userSearchedPostsData");
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

	const renderOverAllViews = () => {
		const { constraint } = props;
		switch (constraint) {
			case "SUCCESS":
				return renderSuccessView();
			case "LOADING":
				return renderLoadingView();
			case "FAILURE":
				return renderFailureView();
		}
	};

	return (
		<SearchedResultsContainer>
			<SearchResultsTitle>Search Results</SearchResultsTitle>
			{renderOverAllViews()}
		</SearchedResultsContainer>
	);
};
