import { useEffect, useState } from "react";
import Slider from "react-slick";

import {
	UserStoriesMainContainer,
	USerStoriesContainer,
	UserStoriesUl,
	StoryLoader,
} from "./styledComponents";
import "./index.css";

import EachStory from "../EachStory";

import { useStoriesHook } from "../../hooks/UserStories/useUserStoriesHook";

import { constraints } from "../../../Common/utils/Constraints";
import Loader from "../../../Common/components/Loader/index";
import Failure from "../../../Common/components/Failure/index";

const settings = {
	arrows: true,
	infinite: false,
	speed: 500,
	slidesToShow: 7,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 1,
				infinite: false,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: false,
			},
		},
		{
			breakpoint: 567,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
	],
};

export const UserStories = (): JSX.Element => {
	const [constraint, setConstraint] = useState(constraints.initial as string);

	const UsersStories = useStoriesHook();

	useEffect(() => {
		getStoriesData();
	}, []);

	const getStoriesData = async (): Promise<void> => {
		setConstraint(constraints.loading);
		await UsersStories.fetchUserStories();
		if (UsersStories.userStoriesResponse.responseStatus) {
			setConstraint(constraints.success);
		} else {
			setConstraint(constraints.failure);
		}
	};

	const renderSuccessView = (): JSX.Element => {
		return (
			<USerStoriesContainer>
				<UserStoriesUl>
					<Slider {...settings}>
						{UsersStories.userStoriesResponse.users_stories.map((eachStory) => (
							<EachStory
								key={eachStory.userId}
								story={eachStory}
							/>
						))}
					</Slider>
				</UserStoriesUl>
			</USerStoriesContainer>
		);
	};

	const renderLoadingView = (): JSX.Element => (
		<StoryLoader>
			<Loader width={32} height={32} />
		</StoryLoader>
	);

	const renderFailureView = (): JSX.Element => (
		<Failure getPostsData={getStoriesData} />
	);

	const renderOverAllViews = (): JSX.Element => {
		switch (constraint) {
			case constraints.success:
				return renderSuccessView();
			case constraints.loading:
				return renderLoadingView();
			case constraints.failure:
				return renderFailureView();
		}
	};

	return (
		<UserStoriesMainContainer>
			{renderOverAllViews()}
		</UserStoriesMainContainer>
	);
};
