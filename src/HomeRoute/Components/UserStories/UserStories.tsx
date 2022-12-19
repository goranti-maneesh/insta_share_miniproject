import { useEffect, useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import {
	USerStoriesContainer,
	UserStoriesUl,
	StoryLoader,
} from "./styledComponents";
import "./index.css";

import EachStory from "../EachStory";

import { useStoriesHook } from "../../Hooks/UserStories/useUserStoriesHook";
import { userStoriesResponseTypes } from "../../Stores/Types/UserStoriesTypes";

import { constraints } from "../../../Common/utils/Constraints";
import Loader from "../../../Common/Loader/index";
import Failure from "../../../Common/Failure/index";

export const UserStories = (): JSX.Element => {
	const [userStoriesData, setUserStoriesData] = useState(
		{} as userStoriesResponseTypes,
	);
	const [constraint, setConstraint] = useState(constraints.initial);

	const UsersStories = useStoriesHook();

	const settings = {
		// centerMode: true,
		arrows: true,
		infinite: false,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 1,
	};

	useEffect(() => {
		getStoriesData();
	}, []);

	const getStoriesData = async () => {
		setConstraint(constraints.loading);
		await UsersStories.fetchUserStories();
		setUserStoriesData(UsersStories.userStoriesResponse);
		setConstraint(constraints.success);
	};

	const renderSuccessView = () => {
		return (
			<USerStoriesContainer>
				<UserStoriesUl>
					<Slider {...settings}>
						{userStoriesData.users_stories.map((eachStory) => (
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

	const renderLoadingView = () => (
		<StoryLoader>
			<Loader width={32} height={32} />
		</StoryLoader>
	);

	const renderFailureView = () => <Failure getPostsData={getStoriesData}/>

	const renderOverAllViews = () => {
		switch (constraint) {
			case "SUCCESS":
				return renderFailureView();
				return renderSuccessView();
			case "LOADING":
				return renderLoadingView();
			case "FAILURE":
				return renderFailureView();
		}
	};

	return <div>{renderOverAllViews()}</div>;
};