import { userPostsResponseTypes } from "./UserPostsTypes";

export interface searchResultsTypes {
	onClickState: () => void;
	userSearchedPostsData: userPostsResponseTypes;
	constraint: string;
	searchText: string;
}
