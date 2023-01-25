import { createContext, useContext } from 'react'

import {ProfileDetailsService} from '../../Services/userProfile/index.api'

import {ProfileDetailsStores} from '../../Stores/ProfileDetailsStores/ProfileDetailsStores'

const ProfileDetailsServiceInstance = new ProfileDetailsService()

const profileDetailsStoresInstance = new ProfileDetailsStores(ProfileDetailsServiceInstance)

const profileDetailsContext = createContext(null)

export const ProfileDetailsHook = ({children}) => (
    <profileDetailsContext.Provider value={profileDetailsStoresInstance}>
        {children}
    </profileDetailsContext.Provider>
)

export const useProfileDetailsHook = () => useContext(profileDetailsContext)