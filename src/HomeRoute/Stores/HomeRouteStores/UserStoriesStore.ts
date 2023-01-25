import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { observable, action } from "mobx";
import { userStoriesResponseTypes } from "../Types/UserStoriesTypes";
import { UserStoryModel } from "../HomeRouteModels/UserStoriesModel/UserStoriesModel";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

export default class UserStoriesStore{
    @observable userStoriesResponse: userStoriesResponseTypes
    @observable userStoriesStatus
    @observable userStoriesApiService

    constructor(userStoriesApiService){
        this.userStoriesApiService = userStoriesApiService
        this.userStoriesStatus = API_INITIAL
        this.userStoriesResponse = {} as userStoriesResponseTypes
    }

    @action.bound getUserStoriesResponse = (response: userStoriesResponseTypes): void => {
        const userStoriesModels = response.users_stories.map((eachStory) => new UserStoryModel(eachStory))
        this.userStoriesResponse = {
            users_stories: userStoriesModels,
            responseStatus: response.responseStatus
        }
    }

    @action.bound getUserStoriesStatus = (responseStatus: APIStatus): void => {
        this.userStoriesStatus = responseStatus
    }

    fetchUserStories = (): Promise<Object> => {
        const storiesResponse = this.userStoriesApiService.getUserStories()
        return bindPromiseWithOnSuccess(storiesResponse).to(
            this.getUserStoriesStatus,
            (resonse: userStoriesResponseTypes) => {
                this.getUserStoriesResponse(resonse)
            }
        )
    }
}

