import { UserPostsService } from "../../Services/UserPosts/index.fixtures";
import UserPostsStores from "../../Stores/UserPostsStore/index";

const UserPostsServiceInstance = new UserPostsService();

const UserPostsStoresInstance = new UserPostsStores(UserPostsServiceInstance);

const useUserPostsHook = () => {
	return UserPostsStoresInstance;
};

export { useUserPostsHook };
