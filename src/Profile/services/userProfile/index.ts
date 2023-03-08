import { profileAndResponseStatusTypes, UserProfileDetailsAndResponseStatusTypes } from "../../stores/Types/types";

export interface UserProfileDetailsServiceTypes {
	getProfileDetails: () => Promise<profileAndResponseStatusTypes>;

	getUserProfileDetails: (
		userId: string,
	) => Promise<UserProfileDetailsAndResponseStatusTypes>;
}
