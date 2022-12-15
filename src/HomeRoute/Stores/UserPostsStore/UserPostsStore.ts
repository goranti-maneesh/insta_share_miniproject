import { observable } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";
import UserPostModal from "../userPostsModal";
import { userPostsResponseTypes } from "../Types/UserPostsTypes";

class UserPostsStores {
	@observable userPostApiService;
	@observable responseStatus = API_INITIAL;
	@observable userPostsResponse;

	constructor(userPostServiceApiInstance) {
		this.userPostApiService = userPostServiceApiInstance;
	}

	getUserPostsResponse = (response: userPostsResponseTypes) => {
		const modalData = response.posts.map((eachPost) => {
			return new UserPostModal(eachPost);
		});
		console.log(modalData, 'modalData');
		this.userPostsResponse = {
			modalData,
			responseStatus: response.responseStatus,
		};
	};

	getUserPostsStatus = (responseStatus: APIStatus) => {
		this.responseStatus = responseStatus;
	};

	fetchUserPosts = () => {
		const postsResponse = this.userPostApiService.getUserPosts();
		return bindPromiseWithOnSuccess(postsResponse).to(
			this.getUserPostsStatus,
			(response: userPostsResponseTypes) => {
				// console.log(response)
				return this.getUserPostsResponse(response);
			},
		);
	};
}

export { UserPostsStores };
