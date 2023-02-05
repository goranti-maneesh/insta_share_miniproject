import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

import { UserProfileDetailsAndResponseStatusTypes } from "../Types/types"
import { profileDetailsModel } from "../ProfileDetailsModels/ProfileDetailsModels";

class UserProfileDetailsStores{
    @observable userProfileDetailsApiService;
	@observable userProfileDetailsStatus;
	@observable userProfileDetailsResponse;

    constructor(UserProfileDetailsServiceApiInstance) {
		this.userProfileDetailsApiService = UserProfileDetailsServiceApiInstance;
		this.userProfileDetailsStatus = API_INITIAL;
		this.userProfileDetailsResponse = {} as UserProfileDetailsAndResponseStatusTypes
	}

    @action.bound getUserProfileDetailsResponse = (response: UserProfileDetailsAndResponseStatusTypes): void => {
        const modelData = new profileDetailsModel(response.user_details)
		this.userProfileDetailsResponse = {
			profileDetails: modelData,
			responseStatus: response.responseStatus,
		};
    }

    @action.bound getUserProfileDetailsStatus = (responseStatus: APIStatus): void => {
		this.userProfileDetailsStatus = responseStatus;
    }

    fetchUserProfileDetails = (userId) => {
        const profileDetails = this.userProfileDetailsApiService.getUserProfileDetails(userId);
		return bindPromiseWithOnSuccess(profileDetails).to(
			this.getUserProfileDetailsStatus,
			(response: UserProfileDetailsAndResponseStatusTypes) => {
				return this.getUserProfileDetailsResponse(response);
			},
		);
    }
}

export {UserProfileDetailsStores}