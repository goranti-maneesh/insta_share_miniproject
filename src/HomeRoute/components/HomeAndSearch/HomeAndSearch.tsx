import { useEffect, useState } from "react";
import { observer } from "mobx-react";

import { HomeMainContainer } from "./styledComponents";

import HomePage from "../HomePage/index";

import { usePostsContext } from "../../hooks/UserPosts/useUserPostsHook";

import Header from "../../../Common/components/Header";
import WrapperComponent from "../../../Common/components/WrapperComponent";
import { constraints } from "../../../Common/utils/Constraints";

export const HomeAndSearch = observer((): JSX.Element => {
	const [constraint, setConstraint] = useState(constraints.initial as string);

	const postsHook = usePostsContext();

	const getPostsData = async (): Promise<void> => {
		setConstraint(constraints.loading);

		await postsHook.fetchUserPosts(postsHook.searchText);

		if (postsHook.userPostsResponse.responseStatus) {
			if (
				postsHook.userPostsResponse.posts.length > 0
			) {
				setConstraint(constraints.success);
			} else {
				setConstraint(constraints.noResults);
			}
		} else {
			setConstraint(constraints.failure);
		}
	}

	const onClickState = (): void => {
		postsHook.setSearchStatus()
		getPostsData()
	};

	const onChangeSearchText = (text: string): void => {
		postsHook.setSearchText(text)
		
	};

	useEffect(() => {
		getPostsData()
	}, [])

	return (
		<HomeMainContainer>
			<Header
				onClickState={onClickState}
				onChangeSearchText={onChangeSearchText}
				searchText={postsHook.searchText}
			/>
			<WrapperComponent>
				<HomePage
					getPostsData={getPostsData}
					searchStatus={postsHook.searchStatus}
					userPostsData={postsHook.userPostsResponse}
					constraint={constraint}
					searchText={postsHook.searchText}
				/>
			</WrapperComponent>
		</HomeMainContainer>
	);
});
