import { userFixturePostsResponseTypes } from "../../stores/Types/UserPostsTypes";

export interface UserPostsServiceTypes {
	getUserPosts: (
		searchedText: string,
	) => Promise<userFixturePostsResponseTypes>;
}
