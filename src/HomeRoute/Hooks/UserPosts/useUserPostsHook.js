import React, { createContext, useContext } from "react";

import { UserPostsService } from "../../Services/UserPosts/index.api";
import UserPostsStores from "../../Stores/HomeRouteStores/UserPostsStore/index";

const UserPostsServiceInstance = new UserPostsService();

const UserPostsStoresInstance = new UserPostsStores(UserPostsServiceInstance);

const PostsContext = createContext(null);

export const PostsHook = ({ children }) => {
	return (
		<PostsContext.Provider value={UserPostsStoresInstance}>
			{children}
		</PostsContext.Provider>
	);
};

export const usePostsHook = () => useContext(PostsContext);
