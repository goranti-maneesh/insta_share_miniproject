import { UserPostsService } from "../../Services/UserPosts/index.api"
import { UserPostsStores } from "../../Stores/UserPosts/stores"

const UserPostsServiceInstance = new UserPostsService()

const UserPostsStoresInstance = new UserPostsStores(UserPostsServiceInstance)
// console.log(UserPostsServiceInstance)

const useUserPostsHook = () => {
    return UserPostsStoresInstance
}

export {useUserPostsHook}