import { userFixturePostsResponseTypes } from "../../Stores/Types/UserPostsTypes"

export interface UserPostsServiceTypes{
    getUserPosts: () => Promise<userFixturePostsResponseTypes>
    
    getSearchedPosts: (searchedText: string) => Promise<userFixturePostsResponseTypes>
}

export interface UserSearchedPostsServiceTypes{
}