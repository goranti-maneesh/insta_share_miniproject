import { createContext, useContext } from "react";
import { UserPostsService } from "../../../Common/stores/index";

import UserPostsStore from "../../stores/HomeRouteStores/UserPostsStore.ts";

const UserPostsServiceInstance = new UserPostsService();

const UserPostsStoreInstance = new UserPostsStore(UserPostsServiceInstance);

const PostsContext = createContext(null);

export const SearchedPostsHook = ({ children }) => {
	return (
		<PostsContext.Provider value={UserPostsStoreInstance}>
			{children}
		</PostsContext.Provider>
	);
};

export const usePostsContext = () => useContext(PostsContext);
