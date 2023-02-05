import { createContext, useContext } from 'react'

import {ProfileDetailsService} from '../../Services/userProfile/index.api'

import {UserProfileDetailsStores} from '../../Stores/ProfileDetailsStores/UserProfileDetailsStores'

const ProfileDetailsServiceInstance = new ProfileDetailsService()

const userProfileDetailsStoresInstance = new UserProfileDetailsStores(ProfileDetailsServiceInstance)

const userProfileDetailsContext = createContext(null)

export const UserProfileDetailsHook = ({children}) => (
    <userProfileDetailsContext.Provider value={userProfileDetailsStoresInstance}>
        {children}
    </userProfileDetailsContext.Provider>
)

export const useUserProfileDetailsHook = () => useContext(userProfileDetailsContext)