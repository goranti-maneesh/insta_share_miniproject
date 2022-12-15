import { APIStatus } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { observable } from "mobx";
import { UserStoryModal } from "../UserStoriesModal";

export class UserStoriesStore{
    @observable userStoriesResponse
    @observable userStoriesStatus
    @observable userStoriesApiService

    constructor(userStoriesApiService){
        this.userStoriesApiService = userStoriesApiService
    }

    getUserStoriesResponse = (response) => {
        const userStoriesModals = response.userStories.map((eachStory) => new UserStoryModal(eachStory))
        this.userStoriesResponse = {
            userStoriesModals,
            status: response.responseStatus
        }
    }

    getUserStoriesStatus = (responseStatus: APIStatus) => {
        this.userStoriesStatus = responseStatus
    }

    fetchUserStories = () => {
        const storiesResponse = this.userStoriesApiService.getUserStories()
        return bindPromiseWithOnSuccess(storiesResponse).to(
            this.getUserStoriesStatus,
            (resonse) => {
                this.getUserStoriesResponse(resonse)
            }
        )
    }
}

