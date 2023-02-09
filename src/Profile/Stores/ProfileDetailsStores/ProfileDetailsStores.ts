import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

import { profileAndResponseStatusTypes } from "../../Stores/Types/types";
import { profileDetailsModel } from "../ProfileDetailsModels/ProfileDetailsModels";

class ProfileDetailsStores {
	@observable profileDetailsApiService;
	@observable profileDetailsStatus;
	@observable profileDetailsResponse;

	constructor(profileDetailsServiceApiInstance) {
		this.profileDetailsApiService = profileDetailsServiceApiInstance;
		this.profileDetailsStatus = API_INITIAL;
		this.profileDetailsResponse = {} as profileAndResponseStatusTypes;
	}

	@action.bound getProfileDetailsResponse = (
		response: profileAndResponseStatusTypes,
	): void => {
		const modelData = new profileDetailsModel(response.profile);
		this.profileDetailsResponse = {
			profileDetails: modelData,
			responseStatus: response.responseStatus,
		};
	};

	@action.bound getProfileDetailsStatus = (
		responseStatus: APIStatus,
	): void => {
		this.profileDetailsStatus = responseStatus;
	};

	fetchProfileDetails = () => {
		const profileDetails =
			this.profileDetailsApiService.getProfileDetails();
		return bindPromiseWithOnSuccess(profileDetails).to(
			this.getProfileDetailsStatus,
			(response: profileAndResponseStatusTypes) => {
				return this.getProfileDetailsResponse(response);
			},
		);
	};
}

export { ProfileDetailsStores };
