import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

import {PostLikeRequestObjTypes, PostLikeStatusResponseTypes} from '../../Types/PostLikeStatusTypes'

export class PostLikeStatusStore{

    @observable postLikeResponse
    @observable postLikeStatus = API_INITIAL
    @observable postLikeStatusAPIService

    constructor(postLikeStatusAPIService){
        this.postLikeStatusAPIService = postLikeStatusAPIService
    }

    @action.bound getPostLikeResponse = (response: PostLikeStatusResponseTypes): void => {
        this.postLikeResponse = response
    }

    @action.bound getPostLikeStatus = (responseStatus: APIStatus): void => {
        this.postLikeStatus = responseStatus
    }

    fetchPostLikeStatus = (requestObj: PostLikeRequestObjTypes): Promise<Object> => {
        const postsResponse = this.postLikeStatusAPIService.getPostLikeStatus(requestObj);
		return bindPromiseWithOnSuccess(postsResponse).to(
			this.getPostLikeStatus,
			(response: PostLikeStatusResponseTypes) => {
				return this.getPostLikeResponse(response);
			},
		);
	};

}