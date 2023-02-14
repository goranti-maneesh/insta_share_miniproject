import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

import UserPostModel from "../HomeRouteModels/UserPostsModel/UserPostsModel";
import { userPostsResponseTypes } from "../Types/UserPostsTypes";

export default class UserPostsStore {
	@observable userPostApiService;
	@observable userPostsStatus;
	@observable userPostsResponse;

	constructor(userPostServiceApiInstance) {
		this.userPostApiService = userPostServiceApiInstance;
		this.userPostsStatus = API_INITIAL;
		this.userPostsResponse = {} as userPostsResponseTypes;
	}

	@action.bound getuserPostsResponse = (
		response: userPostsResponseTypes,
	): void => {
		const modelData = response.posts.map((eachPost) => {
			return new UserPostModel(eachPost);
		});
		this.userPostsResponse = {
			posts: modelData,
			responseStatus: response.responseStatus,
		};
	};

	@action.bound getuserPostsStatus = (responseStatus: APIStatus): void => {
		this.userPostsStatus = responseStatus;
	};

	fetchUserPosts = (searchText): Promise<Object> => {
		const searchedPostsResponse =
			this.userPostApiService.getUserPosts(searchText);
		return bindPromiseWithOnSuccess(searchedPostsResponse).to(
			this.getuserPostsStatus,
			(response: userPostsResponseTypes) => {
				return this.getuserPostsResponse(response);
			},
		);
	};
}
