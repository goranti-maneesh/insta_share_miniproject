import { profileDetailsFixturesTypes } from "../../Stores/Types/types";

export interface UserProfileDetailsServiceTypes {
	getProfileDetails: () => Promise<profileDetailsFixturesTypes>;

	getUserProfileDetails: (
		userId: string,
	) => Promise<profileDetailsFixturesTypes>;
}
