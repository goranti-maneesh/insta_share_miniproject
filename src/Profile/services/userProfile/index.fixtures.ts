import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import usersProfileDetailsFixtures from "../../fixtures/getUserProfileDetails.json";

import { UserProfileDetailsServiceTypes } from "./index";

class ProfileDetailsService implements UserProfileDetailsServiceTypes {
	getProfileDetails = () => {
		return resolveWithTimeout(usersProfileDetailsFixtures);
	};

	getUserProfileDetails = (userId: string) => {
		return resolveWithTimeout(usersProfileDetailsFixtures);
	};
}

export { ProfileDetailsService };
