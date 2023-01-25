import { createContext, useContext } from 'react';
import {UserPostsService} from '../../Services/UserPosts/index.api'

import UserSearchedPostsStore from '../../Stores/HomeRouteStores/UserSearchedPostsStore.ts'

const UserPostsServiceInstance = new UserPostsService()

const UserSearchedPostsStoreInstance = new UserSearchedPostsStore(UserPostsServiceInstance)

const SearchedPostsContext = createContext(null);

export const SearchedPostsHook = ({children}) => {
    return(
        <SearchedPostsContext.Provider value={UserSearchedPostsStoreInstance}>
            {children}
        </SearchedPostsContext.Provider>
    )
}   

export const useSearchedPostsContext = () => useContext(SearchedPostsContext)