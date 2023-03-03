import { PostLikeStatusResponseTypes } from "../../stores/Types/PostLikeStatusTypes";

export interface PostLikeStatusServiceTypes {
	getPostLikeStatus: (postId) => Promise<PostLikeStatusResponseTypes>;
}
