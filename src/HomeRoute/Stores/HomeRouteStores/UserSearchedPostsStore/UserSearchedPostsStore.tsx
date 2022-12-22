import { observable, action } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

import UserPostModal from "../../HomeRouteModals/userPostsModal";
import { userPostsResponseTypes } from "../../Types/UserPostsTypes";

export class UserSearchedPostsStore{
    @observable userSearchedPostApiService;
	@observable userSearchedPostsStatus = API_INITIAL;
	@observable userSearchedPostsResponse;

    constructor(userSearchedPostServiceApiInstance) {
		this.userSearchedPostApiService = userSearchedPostServiceApiInstance;
	}

	@action.bound getUserSearchedPostsResponse = (response: userPostsResponseTypes): void => {
		const modalData = response.posts.map((eachPost) => {
			return new UserPostModal(eachPost);
		});
		this.userSearchedPostsResponse = {
			posts: modalData,
			responseStatus: response.responseStatus,
		};
	};

	@action.bound getUserSearchedPostsStatus = (responseStatus: APIStatus): void => {
		this.userSearchedPostsStatus = responseStatus;
	};

	fetchUserSearchedPosts = (searchText): Promise<Object> => {
		const searchedPostsResponse = this.userSearchedPostApiService.getSearchedPosts(searchText);
		return bindPromiseWithOnSuccess(searchedPostsResponse).to(
			this.getUserSearchedPostsStatus,
			(response: userPostsResponseTypes) => {
				return this.getUserSearchedPostsResponse(response);
			},
		);
	};
}