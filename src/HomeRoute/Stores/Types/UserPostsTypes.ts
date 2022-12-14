import { RouteComponentProps } from "react-router-dom";

export interface eachPostCommentTypes {
	comment: string;
	userId: string;
	userName: string;
}

export interface eachUserPostTypes {
	comments: Array<eachPostCommentTypes>;
	createdAt: string;
	likesCount: number;
	postDetails: {
		caption: string;
		imageUrl: string;
	};
	postId: string;
	profilePic: string;
	userId: string;
	userName: string;
}

export interface userPostsResponseTypes {
	posts: Array<eachUserPostTypes>;
	responseStatus: boolean
}

export interface HeaderProps extends RouteComponentProps{
    onClickState: () => void, 
    onChangeSearchText: (string) => void
    searchText: string
}

