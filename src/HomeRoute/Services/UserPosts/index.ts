import { userFixturePostsResponseTypes } from "../../Stores/Types/UserPostsTypes"

export interface UserPostsServiceTypes{
    getUserPosts: () => Promise<userFixturePostsResponseTypes>
}
