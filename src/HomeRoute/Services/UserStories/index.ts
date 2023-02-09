import { userStoriesFixturesResponseTypes } from "../../Stores/Types/UserStoriesTypes";

export interface UserStoriesServiceTypes {
	getUserStories: () => Promise<userStoriesFixturesResponseTypes>;
}
