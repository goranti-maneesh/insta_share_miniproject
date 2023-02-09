import config from "../../../Common/constants/EnvironmentConstants";
import { accessLoginCookie } from "../../../Common/utils/StorageUtils";
import { UserPostsServiceTypes } from "./index";

class UserPostsService implements UserPostsServiceTypes {
	getUserPosts = async () => {
		const options = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessLoginCookie()}`,
			},
		};

		const url = `${config.INSTA_SHARE_BASE_URL}/posts`;
		const response = await fetch(url, options);
		const data = await response.json();
		return {
			...data,
			responseStatus: response.ok,
		};
	};

	getSearchedPosts = async (searchedText: string) => {
		const options = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessLoginCookie()}`,
			},
		};

		const url = `${config.INSTA_SHARE_BASE_URL}/posts?search=${searchedText}`;
		const response = await fetch(url, options);
		const data = await response.json();
		return {
			...data,
			responseStatus: response.ok,
		};
	};
}

export { UserPostsService };
