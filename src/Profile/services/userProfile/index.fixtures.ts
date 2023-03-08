import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import usersProfileDetailsFixtures from "../../fixtures/getUserProfileDetails.json";

import { UserProfileDetailsServiceTypes } from "./index";

const profileFixtureDetails = {
	profile: usersProfileDetailsFixtures,
	responseStatus: true
}

const userProfileFixtureDetails = {
	user_details: usersProfileDetailsFixtures,
	responseStatus: true
}

class ProfileDetailsService implements UserProfileDetailsServiceTypes {
	getProfileDetails = () => {
		return resolveWithTimeout(profileFixtureDetails);
	};

	getUserProfileDetails = (userId: string) => {
		return resolveWithTimeout(userProfileFixtureDetails);
	};
}

export { ProfileDetailsService };
