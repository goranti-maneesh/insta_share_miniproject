import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import usersPostsFixtures from "../../Fixtures/getUserPostsResponse.json";

import { UserPostsServiceTypes } from "./index";

class UserPostsService implements UserPostsServiceTypes {
	getUserPosts = (searchedText: string) => {
		return resolveWithTimeout(usersPostsFixtures);
	};
}

export { UserPostsService };
