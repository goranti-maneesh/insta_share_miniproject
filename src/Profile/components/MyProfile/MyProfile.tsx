import { useEffect, useState } from "react";

import Header from "../../../Common/components/Header";
import { constraints } from "../../../Common/utils/Constraints";
import Failure from "../../../Common/components/Failure";
import Loader from "../../../Common/components/Loader";
import WrapperComponent from "../../../Common/components/WrapperComponent";

import { useProfileDetailsHook } from "../../hooks/ProfileDetails/useProfileDetailsHook";

import Profile from "../ProfileDetails";

export const MyProfile = () => {
	const profileDetails = useProfileDetailsHook();

	const [constraint, setConstraint] = useState(constraints.initial as string);

	const getProfileDetailsData = async () => {
		setConstraint(constraints.loading);

		await profileDetails.fetchProfileDetails();

		if (profileDetails.profileDetailsResponse.responseStatus) {
			setConstraint(constraints.success);
		} else {
			setConstraint(constraints.failure);
		}
	};

	useEffect(() => {
		getProfileDetailsData();
	}, []);

	const renderOverAllViews = (): JSX.Element => {
		switch (constraint) {
			case constraints.success:
				return renderProfileDetails();
			case constraints.loading:
				return renderLoader();
			case constraints.failure:
				return renderErrorView();
		}
	};

	const renderLoader = (): JSX.Element => <Loader width={53} height={53} />;

	const renderErrorView = (): JSX.Element => (
		<Failure getPostsData={getProfileDetailsData} />
	);

	const renderProfileDetails = (): JSX.Element => (
		<Profile profileDetails={profileDetails.profileDetailsResponse.profileDetails} />
	);

	return (
		<div>
			<Header />
			<WrapperComponent>{renderOverAllViews()}</WrapperComponent>
		</div>
	);
};
