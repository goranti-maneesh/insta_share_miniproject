import { useEffect, useState } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import { useStoriesHook } from "../../Hooks/UserStories/useUserStoriesHook";

import { constraints } from "../../../Common/utils/Constraints";

export const UserStories = (): JSX.Element => {
	const [userStoriesData, setUserStoriesData] = useState({});
	const [constraint, setConstraint] = useState(constraints.initial);

	const UsersStories = useStoriesHook();

	const settings = {
		dots: true,
		infinite: true,
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
		return(
            <div>
                <Slider {...settings}>
                    {console.log(userStoriesData.users_stories, "userStoriesData")}
                </Slider>
            </div>
        );
	};

	const renderLoadingView = () => {
		return <h1>Loading View</h1>;
	};

	const renderFailureView = () => {
		return <h1>Story Failure</h1>;
	};

	const renderOverAllViews = () => {
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
			<h1>UserStories</h1>
			{renderOverAllViews()}
		</div>
	);
};
