import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import usersProfileDetailsFixtures from "../../Fixtures/getUserProfileDetails.json";

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
