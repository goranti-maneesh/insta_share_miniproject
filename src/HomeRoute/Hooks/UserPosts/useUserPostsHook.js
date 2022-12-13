import { UserPostsService } from "../../Services/UserPosts/index.api"
import { UserPostsStores } from "../../Stores/UserPosts/stores"

const UserPostsServiceInstance = new UserPostsService()

const UserPostsStoresInstance = new UserPostsStores(UserPostsServiceInstance)

const useUserPostsHook = () => {
    return UserPostsStoresInstance
}

export {useUserPostsHook}