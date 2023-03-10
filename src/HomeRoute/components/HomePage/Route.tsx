import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";

import { HomeMainContainer,PostsLoader,
	NoSearchViewContainer,
	NoSearchViewImage,
	NoSearchViewHeading,
	NoSearchViewText, } from "./styledComponents";

import HomePage from "./index";

import { usePostsContext } from "../../hooks/UserPosts/useUserPostsHook";

import Header from "../../../Common/components/Header";
import WrapperComponent from "../../../Common/components/WrapperComponent";
import { constraints } from "../../../Common/utils/Constraints";
import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";
import {
	imageBaseUrl,
	noSearchViewImageAltText,
} from "../../../Common/constants/LocalConstants";

export const HomeAndSearch = observer((): JSX.Element => {
	const [constraint, setConstraint] = useState(constraints.initial as string);

	const postsHook = usePostsContext();

	const { t } = useTranslation();

	const {searchText, fetchUserPosts, setSearchStatus, setSearchText, searchStatus, userPostsResponse} = postsHook

	const getPostsData = async (): Promise<void> => {
		setConstraint(constraints.loading);

		
		await fetchUserPosts(searchText);

		const {userPostsResponse} = postsHook

		if (userPostsResponse.responseStatus) {
			if (
				userPostsResponse.posts.length > 0
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
		setSearchStatus()
		getPostsData()
	};

	const onChangeSearchText = (text: string): void => {
		setSearchText(text)
		
	};

	useEffect(() => {
		getPostsData()
	}, [])

	const renderSuccessView = (): JSX.Element => (
		<WrapperComponent>
				<HomePage
					getPostsData={getPostsData}
					searchStatus={searchStatus}
					userPostsData={userPostsResponse}
					constraint={constraint}
					searchText={searchText}
				/>
			</WrapperComponent>
	)

	const renderFailureView = (): JSX.Element => {
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
		<HomeMainContainer>
			<Header
				onClickState={onClickState}
				onChangeSearchText={onChangeSearchText}
				searchText={searchText}
			/>
			
			{renderOverAllViews()}
		</HomeMainContainer>
	);
});
