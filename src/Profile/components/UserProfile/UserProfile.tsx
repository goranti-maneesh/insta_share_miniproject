import { useEffect, useState } from "react";

import Profile from "../ProfileDetails";

import { useUserProfileDetailsHook } from "../../hooks/UserProfileDetails/useUserProfileDetailsHooks";
import { profileDetailsResponseStatusTypes } from "../../stores/Types/types";

import Header from "../../../Common/components/Header";
import { constraints } from "../../../Common/utils/Constraints";
import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";
import WrapperComponent from "../../../Common/components/WrapperComponent";

export const UserProfile = (props) => {
	const userProfileDetails = useUserProfileDetailsHook();

	const [constraint, setConstraint] = useState(constraints.initial as string);
	const [data, setData] = useState({} as profileDetailsResponseStatusTypes);

	const getUserProfileDetailsData = async () => {
		const { match } = props;
		const { params } = match;
		const { userId } = params;

		setConstraint(constraints.loading);

		await userProfileDetails.fetchUserProfileDetails(userId);

		if (userProfileDetails.userProfileDetailsResponse.responseStatus) {
			setData(userProfileDetails.userProfileDetailsResponse);
			setConstraint(constraints.success);
		} else {
			setConstraint(constraints.failure);
		}
	};

	useEffect(() => {
		getUserProfileDetailsData();
	}, []);

	const overAllViews = (): JSX.Element => {
		switch (constraint) {
			case constraints.success:
				return renderUserProfileDetails();
			case constraints.loading:
				return renderLoader();
			case constraints.failure:
				return renderErrorView();
		}
	};

	const renderLoader = (): JSX.Element => <Loader width={53} height={53} />;

	const renderErrorView = (): JSX.Element => (
		<Failure getPostsData={getUserProfileDetailsData} />
	);

	const renderUserProfileDetails = (): JSX.Element => (
		<Profile profileDetails={data.profileDetails} />
	);

	return (
		<div>
			<Header />
			<WrapperComponent>{overAllViews()}</WrapperComponent>
		</div>
	);
};
