import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { observable, action } from "mobx";
import { userStoriesResponseTypes } from "../../Types/UserStoriesTypes";
import { UserStoryModal } from "../../HomeRouteModals/UserStoriesModal";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

export class UserStoriesStore{
    @observable userStoriesResponse: userStoriesResponseTypes
    @observable userStoriesStatus = API_INITIAL
    @observable userStoriesApiService

    constructor(userStoriesApiService){
        this.userStoriesApiService = userStoriesApiService
    }

    @action.bound getUserStoriesResponse = (response: userStoriesResponseTypes): void => {
        const userStoriesModals = response.users_stories.map((eachStory) => new UserStoryModal(eachStory))
        this.userStoriesResponse = {
            users_stories: userStoriesModals,
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

