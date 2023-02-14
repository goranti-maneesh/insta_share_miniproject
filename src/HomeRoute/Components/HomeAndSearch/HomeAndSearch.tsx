import { useEffect, useState } from "react";

import { HomeMainContainer } from "./styledComponents";

import HomePage from "../HomePage/index";

import { userPostsResponseTypes } from "../../Stores/Types/UserPostsTypes";
import { usePostsContext } from "../../Hooks/UserPosts/useUserPostsHook";

import Header from "../../../Common/components/Header";
import WrapperComponent from "../../../Common/components/WrapperComponent";
import { constraints } from "../../../Common/utils/Constraints";

export const HomeAndSearch = (): JSX.Element => {
	const [searchText, setSearchText] = useState("" as string);
	const [searchStatus, setsearchStatus] = useState(
		false as boolean,
	);
	const [userPostsData, setuserPostsData] = useState(
		{} as userPostsResponseTypes,
	);
	const [constraint, setConstraint] = useState(constraints.initial as string);

	const usePostsHook = usePostsContext();

	const getPostsData = async (): Promise<void> => {
		setConstraint(constraints.loading);

		await usePostsHook.fetchUserPosts(searchText);

		if (usePostsHook.userPostsResponse.responseStatus) {
			if (
				usePostsHook.userPostsResponse.posts.length > 0
			) {
				setuserPostsData(
					usePostsHook.userPostsResponse,
				);
				setConstraint(constraints.success);
			} else {
				setConstraint(constraints.noResults);
			}
		} else {
			setConstraint(constraints.failure);
		}
	}

	const onClickState = (): void => {
		setsearchStatus(true);
		getPostsData()
	};

	const onChangeSearchText = (text: string): void => {
		setSearchText(text);
	};

	useEffect(() => {
		getPostsData()
	}, [])

	console.log(userPostsData, 'userPostsData')

	return (
		<HomeMainContainer>
			<Header
				onClickState={onClickState}
				onChangeSearchText={onChangeSearchText}
				searchText={searchText}
			/>
			<WrapperComponent>
				<HomePage
					getPostsData={getPostsData}
					searchStatus={searchStatus}
					userPostsData={userPostsData}
					constraint={constraint}
					searchText={searchText}
				/>
			</WrapperComponent>
		</HomeMainContainer>
	);
};
