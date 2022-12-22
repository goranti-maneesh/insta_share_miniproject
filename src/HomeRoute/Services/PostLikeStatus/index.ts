import { PostLikeStatusResponseTypes } from "../../Stores/Types/PostLikeStatusTypes"

export interface PostLikeStatusServiceTypes{
    getPostLikeStatus: (postId) => Promise<PostLikeStatusResponseTypes>
}