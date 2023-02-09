import { useState } from "react";

import { HomeAndSearchMainContainer } from "./styledComponents";

import { Home } from "../HomePage/HomePage";
import { SearchResults } from "../SearchResults/SearchResults";

import { PostsHook } from "../../Hooks/UserPosts/useUserPostsHook";
import { userPostsResponseTypes } from "../../Stores/Types/UserPostsTypes";
import { useSearchedPostsContext } from "../../Hooks/UserSearchedPosts/useUserSearchedPostsHook";

import Header from "../../../Common/Header";
import WrapperComponent from "../../../Common/WrapperComponent";
import { constraints } from "../../../Common/utils/Constraints";

export const HomeAndSearch = (): JSX.Element => {
	const [searchText, setSearchText] = useState("" as string);
	const [searchClickStatus, setSearchClickStatus] = useState(
		false as boolean,
	);
	const [userSearchedPostsData, setUserSearchedPostsData] = useState(
		{} as userPostsResponseTypes,
	);
	const [constraint, setConstraint] = useState(constraints.initial as string);

	const useSearchedPostsHook = useSearchedPostsContext();

	const onClickState = async (): Promise<void> => {
		setSearchClickStatus(true);
		setConstraint(constraints.loading);

		await useSearchedPostsHook.fetchUserSearchedPosts(searchText);

		if (useSearchedPostsHook.userSearchedPostsResponse.responseStatus) {
			if (
				useSearchedPostsHook.userSearchedPostsResponse.posts.length >
					0 &&
				searchText !== ""
			) {
				setUserSearchedPostsData(
					useSearchedPostsHook.userSearchedPostsResponse,
				);
				setConstraint(constraints.success);
			} else {
				setConstraint(constraints.noResults);
			}
		} else {
			setConstraint(constraints.failure);
		}
	};

	const onChangeSearchText = (text: string): void => {
		setSearchText(text);
	};

	return (
		<HomeAndSearchMainContainer>
			<Header
				onClickState={onClickState}
				onChangeSearchText={onChangeSearchText}
				searchText={searchText}
			/>
			<WrapperComponent>
				{searchClickStatus ? (
					<SearchResults
						onClickState={onClickState}
						userSearchedPostsData={userSearchedPostsData}
						constraint={constraint}
						searchText={searchText}
					/>
				) : (
					<PostsHook>
						<Home />
					</PostsHook>
				)}
			</WrapperComponent>
		</HomeAndSearchMainContainer>
	);
};
