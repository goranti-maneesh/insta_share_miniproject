import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";
import UserPostModal from "../../HomeRouteModals/userPostsModal";
import { userPostsResponseTypes } from "../../Types/UserPostsTypes";

class UserPostsStores {
	@observable userPostApiService;
	@observable userPostsStatus = API_INITIAL;
	@observable userPostsResponse;

	constructor(userPostServiceApiInstance) {
		this.userPostApiService = userPostServiceApiInstance;
	}

	@action.bound getUserPostsResponse = (response: userPostsResponseTypes): void => {
		const modalData = response.posts.map((eachPost) => {
			return new UserPostModal(eachPost);
		});
		this.userPostsResponse = {
			posts: modalData,
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

export { UserPostsStores };
