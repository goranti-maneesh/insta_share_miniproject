import { userPostsResponseTypes } from "./UserPostsTypes";

export interface searchResultsTypes {
	getPostsData: () => void;
	userSearchedPostsData: userPostsResponseTypes;
	constraint: string;
	searchText: string;
	searchClickStatus: boolean
}
