import { userStoriesResponseTypes } from "../../Stores/Types/UserStoriesTypes"

export interface UserStoriesServiceTypes{
    getUserStories: () => Promise<userStoriesResponseTypes>
}
