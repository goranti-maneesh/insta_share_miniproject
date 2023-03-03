import { createContext, useContext } from "react";

import { ProfileDetailsService } from "../../services/userProfile/index.api";

import { UserProfileDetailsStores } from "../../stores/ProfileDetailsStores/UserProfileDetailsStores";

const ProfileDetailsServiceInstance = new ProfileDetailsService();

const userProfileDetailsStoresInstance = new UserProfileDetailsStores(
	ProfileDetailsServiceInstance,
);

const userProfileDetailsContext = createContext(null);

export const UserProfileDetailsHook = ({ children }) => (
	<userProfileDetailsContext.Provider
		value={userProfileDetailsStoresInstance}>
		{children}
	</userProfileDetailsContext.Provider>
);

export const useUserProfileDetailsHook = () =>
	useContext(userProfileDetailsContext);
