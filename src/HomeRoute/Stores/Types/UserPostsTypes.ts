import { RouteComponentProps } from "react-router-dom";

export interface eachPostCommentTypes {
	comment: string;
	user_id: string;
	user_name: string;
}

export interface eachUserPostTypes {
	comments: Array<eachPostCommentTypes>;
	created_at: string;
	likes_count: number;
	post_details: {
		caption: string;
		image_url: string;
	};
	post_id: string;
	profile_pic: string;
	user_id: string;
	user_name: string;
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

