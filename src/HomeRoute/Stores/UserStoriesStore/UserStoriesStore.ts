import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { observable, action } from "mobx";
import { userStoriesResponseTypes } from "../Types/UserStoriesTypes";
import { UserStoryModal } from "../UserStoriesModal";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

export class UserStoriesStore{
    @observable userStoriesResponse
    @observable userStoriesStatus = API_INITIAL
    @observable userStoriesApiService

    constructor(userStoriesApiService){
        this.userStoriesApiService = userStoriesApiService
    }

    @action.bound getUserStoriesResponse = (response: userStoriesResponseTypes) => {
        console.log(response, "response")
        const userStoriesModals = response.usersStories.map((eachStory) => new UserStoryModal(eachStory))
        this.userStoriesResponse = {
            userStoriesModals,
            status: response.responseStatus
        }
    }

    @action.bound getUserStoriesStatus = (responseStatus: APIStatus) => {
        this.userStoriesStatus = responseStatus
    }

    fetchUserStories = () => {
        const storiesResponse = this.userStoriesApiService.getUserStories()
        return bindPromiseWithOnSuccess(storiesResponse).to(
            this.getUserStoriesStatus,
            (resonse: userStoriesResponseTypes) => {
                this.getUserStoriesResponse(resonse)
            }
        )
    }
}

