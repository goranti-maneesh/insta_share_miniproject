import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import usersStoriesFixtures from "../../fixtures/getUserStoriesResponse.json";

import { UserStoriesServiceTypes } from "./index";

class UserStoriesService implements UserStoriesServiceTypes {
	getUserStories = () => {
		return resolveWithTimeout(usersStoriesFixtures);
	};
}

export { UserStoriesService };
