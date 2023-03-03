import config from "../../../Common/constants/EnvironmentConstants";
import { accessLoginCookie } from "../../../Common/utils/StorageUtils";
import { UserProfileDetailsServiceTypes } from "./index";

class ProfileDetailsService implements UserProfileDetailsServiceTypes {
	getProfileDetails = async () => {
		const options = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessLoginCookie()}`,
			},
		};

		const url = `${config.INSTA_SHARE_BASE_URL}/my-profile`;
		const response = await fetch(url, options);
		const data = await response.json();
		return {
			...data,
			responseStatus: response.ok,
		};
	};

	getUserProfileDetails = async (userId: string) => {
		const options = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessLoginCookie()}`,
			},
		};

		const url = `${config.INSTA_SHARE_BASE_URL}/users/${userId}`;
		const response = await fetch(url, options);
		const data = await response.json();
		return {
			...data,
			responseStatus: response.ok,
		};
	};
}

export { ProfileDetailsService };
