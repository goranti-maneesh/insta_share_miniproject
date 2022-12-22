import HomeAndSearch from '../HomeAndSearch/index'

import {SearchedPostsHook} from '../../Hooks/UserSearchedPosts/useUserSearchedPostsHook'

export const HomeSearchRoute = (): JSX.Element => {
    return(<SearchedPostsHook><HomeAndSearch /></SearchedPostsHook>)
}