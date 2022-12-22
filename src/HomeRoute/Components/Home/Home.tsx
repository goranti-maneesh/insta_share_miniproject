import { useState, useEffect, ReactNode } from "react";

import { EachPostUl, PostsLoader } from "./styledComponents";

import UserStories from "../UserStories/index";
import EachPost from "../EachPost";

import { usePostsHook } from "../../Hooks/UserPosts/useUserPostsHook";
import { StoriesHook } from "../../Hooks/UserStories/useUserStoriesHook";
import { userPostsResponseTypes } from "../../Stores/Types/UserPostsTypes";
import { PostLikeStatusHook } from "../../Hooks/PostLikeStatus/usePostLikeStatusHook";

import { constraints } from "../../../Common/utils/Constraints";
import Loader from "../../../Common/Loader/index";
import Failure from "../../../Common/Failure/index";

export const Home = (): JSX.Element => {
	const [userPostsData, setUserPostsData] = useState(
		{} as userPostsResponseTypes,
	);
	const [constraint, setConstraint] = useState(constraints.initial as string);

	const UserPosts = usePostsHook();

	useEffect(() => {
		getPostsData();
	}, []);

	const getPostsData = async (): Promise<void> => {
		setConstraint(constraints.loading);
		await UserPosts.fetchUserPosts();
		if (UserPosts.userPostsResponse.responseStatus) {
			setUserPostsData(UserPosts.userPostsResponse);
			setConstraint(constraints.success);
		} else {
			setConstraint(constraints.failure);
		}
	};

	const renderSuccessView = (): JSX.Element => {
		// console.log(
		// 	PostLikeStatusHook,
		// 	"--------------------------",
		// 	StoriesHook,
		// );
		return (
			<div>
				<EachPostUl>
					{userPostsData.posts.map((eachPost) => (
						<PostLikeStatusHook key={eachPost.postId}>
							<EachPost key={eachPost.postId} post={eachPost} />
						</PostLikeStatusHook>
					))}
				</EachPostUl>
			</div>
		);
	};

	const renderFailureView = (): JSX.Element => (
		<Failure getPostsData={getPostsData} />
	);

	const renderLoadingView = (): JSX.Element => (
		<PostsLoader>
			<Loader width={53} height={53} />
		</PostsLoader>
	);

	const renderOverAllViews = (): ReactNode => {
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
		<div>
			<StoriesHook>
				<UserStories />
			</StoriesHook>
			{renderOverAllViews()}
		</div>
	);
};
