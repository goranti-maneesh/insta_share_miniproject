import { createContext, useContext } from "react"

import PostLikeStatusStore from '../../Stores/HomeRouteStores/PostLikeStatusStore'

import {PostLikeStatusService} from '../../Services/PostLikeStatus/index.api'

const PostLikeStatusServiceInstance = new PostLikeStatusService()

const PostLikeStatusStoreInstance = new PostLikeStatusStore(PostLikeStatusServiceInstance)

const PostLikeStatusContext = createContext(null)

export const PostLikeStatusHook = ({children}) => {
    return(
        <PostLikeStatusContext.Provider value={PostLikeStatusStoreInstance}>
            {children}
        </PostLikeStatusContext.Provider>
    )
}

export const usePostLikeStatus = () => useContext(PostLikeStatusContext)