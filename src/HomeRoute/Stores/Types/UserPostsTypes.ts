export interface eachPostCommentTypes {
	comment: string;
	userId: string;
	userName: string;
}

export interface PostLikeRequestObjTypes{
    likeStatusObj:{
        like_status: boolean
    },
    postId: string
}

export interface eachUserPostTypes {
    fetchPostLikeStatus(PostLikeRequestObjTypes: PostLikeRequestObjTypes): void;
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
	// fetchPostLikeStatus: 
}

export interface userPostsResponseTypes {
	posts: Array<eachUserPostTypes>;
	responseStatus: boolean
}

export interface eachFixturePostCommentTypes {
	comment: string;
	user_id: string;
	user_name: string;
}

export interface eachFixtureUserPostTypes {
	comments: Array<eachFixturePostCommentTypes>;
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

export interface userFixturePostsResponseTypes {
	posts: Array<eachFixtureUserPostTypes>;
	responseStatus: boolean
}

export interface eachUserPostPropTypes{
	post: eachUserPostTypes
}