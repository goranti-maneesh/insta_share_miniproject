import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

import UserPostModel from "../HomeRouteModels/UserPostsModel/UserPostsModel";
import { userPostsResponseTypes } from "../Types/UserPostsTypes";

export default class UserSearchedPostsStore {
	@observable userSearchedPostApiService;
	@observable userSearchedPostsStatus;
	@observable userSearchedPostsResponse;

	constructor(userSearchedPostServiceApiInstance) {
		this.userSearchedPostApiService = userSearchedPostServiceApiInstance;
		this.userSearchedPostsStatus = API_INITIAL;
		this.userSearchedPostsResponse = {} as userPostsResponseTypes;
	}

	@action.bound getUserSearchedPostsResponse = (
		response: userPostsResponseTypes,
	): void => {
		const modelData = response.posts.map((eachPost) => {
			return new UserPostModel(eachPost);
		});
		this.userSearchedPostsResponse = {
			posts: modelData,
			responseStatus: response.responseStatus,
		};
	};

	@action.bound getUserSearchedPostsStatus = (
		responseStatus: APIStatus,
	): void => {
		this.userSearchedPostsStatus = responseStatus;
	};

	fetchUserSearchedPosts = (searchText): Promise<Object> => {
		const searchedPostsResponse =
			this.userSearchedPostApiService.getSearchedPosts(searchText);
		return bindPromiseWithOnSuccess(searchedPostsResponse).to(
			this.getUserSearchedPostsStatus,
			(response: userPostsResponseTypes) => {
				return this.getUserSearchedPostsResponse(response);
			},
		);
	};
}
