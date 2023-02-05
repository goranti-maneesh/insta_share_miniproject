import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

import { eachPostCommentTypes, eachUserPostTypes, PostLikeRequestObjTypes } from "../../Types/UserPostsTypes"
import { PostLikeStatusResponseTypes } from "../../Types/PostLikeStatusTypes"

import {PostLikeStatusService} from '../../../Services/PostLikeStatus/index.api'

const postLikeStatusServiceInstance = new PostLikeStatusService()

class UserPostModel implements eachUserPostTypes{
    comments: Array<eachPostCommentTypes>
    createdAt: string
    likesCount: number
    postDetails: {
		caption: string;
		imageUrl: string;
	}
    postId: string
    profilePic: string
    userId: string
    userName: string

    @observable postLikeResponse
    @observable postLikeStatus
    
    constructor(data){
        this.comments = data.comments.map((eachComment) => ({
            comment: eachComment.comment,
            userId: eachComment.user_id,
            userName: eachComment.user_name
        }))
        this.createdAt = data.created_at
        this.likesCount = data.likes_count
        this.postDetails = {
            caption: data.post_details.caption,
            imageUrl: data.post_details.image_url
        }
        this.postId = data.post_id
        this.profilePic = data.profile_pic
        this.userId = data.user_id
        this.userName = data.user_name

        this.postLikeResponse = {} as PostLikeStatusResponseTypes
        this.postLikeStatus = API_INITIAL
    }

    @action.bound getPostLikeResponse = (response: PostLikeStatusResponseTypes): void => {
        this.postLikeResponse = response
    }

    @action.bound getPostLikeStatus = (responseStatus: APIStatus): void => {
        this.postLikeStatus = responseStatus
    }

    fetchPostLikeStatus = (requestObj: PostLikeRequestObjTypes): Promise<Object> => {
        const postsResponse = postLikeStatusServiceInstance.getPostLikeStatus(requestObj);
		return bindPromiseWithOnSuccess(postsResponse).to(
			this.getPostLikeStatus,
			(response: PostLikeStatusResponseTypes) => {
				return this.getPostLikeResponse(response);
			},
		);
	};
    

}

export default UserPostModel