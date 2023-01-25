import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";
import UserPostModel from "../HomeRouteModels/UserPostsModel/UserPostsModel";
import { userPostsResponseTypes } from "../Types/UserPostsTypes";

class UserPostsStores {
	@observable userPostApiService;
	@observable userPostsStatus;
	@observable userPostsResponse;

	constructor(userPostServiceApiInstance) {
		this.userPostApiService = userPostServiceApiInstance;
		this.userPostsStatus = API_INITIAL;
		this.userPostsResponse = {} as userPostsResponseTypes
	}

	@action.bound getUserPostsResponse = (response: userPostsResponseTypes): void => {
		const modelData = response.posts.map((eachPost) => {
			return new UserPostModel(eachPost);
		});
		this.userPostsResponse = {
			posts: modelData,
			responseStatus: response.responseStatus,
		};
	};

	@action.bound getUserPostsStatus = (responseStatus: APIStatus): void => {
		this.userPostsStatus = responseStatus;
	};

	fetchUserPosts = (): Promise<Object> => {
		const postsResponse = this.userPostApiService.getUserPosts();
		return bindPromiseWithOnSuccess(postsResponse).to(
			this.getUserPostsStatus,
			(response: userPostsResponseTypes) => {
				return this.getUserPostsResponse(response);
			},
		);
	};
}

export default UserPostsStores;
