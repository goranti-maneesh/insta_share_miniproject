import { userStoriesFixturesResponseTypes } from "../../stores/Types/UserStoriesTypes";

export interface UserStoriesServiceTypes {
	getUserStories: () => Promise<userStoriesFixturesResponseTypes>;
}
