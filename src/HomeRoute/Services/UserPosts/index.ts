import { userFixturePostsResponseTypes } from "../../Stores/Types/UserPostsTypes";

export interface UserPostsServiceTypes {
	getUserPosts: (
		searchedText: string,
	) => Promise<userFixturePostsResponseTypes>;
}
