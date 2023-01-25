import { useContext, createContext } from 'react'

import UserStoriesStore from '../../Stores/HomeRouteStores/UserStoriesStore.ts'

import {UserStoriesService} from '../../Services/UserStories/index.api'

const userStoriesServiceInstance = new UserStoriesService()

const userStoriesStoreInstance = new UserStoriesStore(userStoriesServiceInstance)

const StoriesContext = createContext(null)

export const StoriesHook = ({children}) => {
    return(
        <StoriesContext.Provider value={userStoriesStoreInstance}>{children}</StoriesContext.Provider>
    )
}

export const useStoriesHook = () => useContext(StoriesContext)