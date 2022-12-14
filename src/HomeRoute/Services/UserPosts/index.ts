import { userPostsResponseTypes } from "../../Stores/Types/UserPostsTypes"

export interface UserPostsServiceTypes{
    getUserPosts: () => Promise<userPostsResponseTypes>
}
