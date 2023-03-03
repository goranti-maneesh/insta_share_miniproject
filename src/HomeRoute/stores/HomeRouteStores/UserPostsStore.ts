import {makeAutoObservable } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants/lib/index";

import { UserPostsServiceTypes } from "../../services/UserPosts/index";

import UserPostModel from "../HomeRouteModels/UserPostsModel/UserPostsModel";
import { userFixturePostsResponseTypes, userPostsResponseTypes } from "../Types/UserPostsTypes";

export default class UserPostsStore {
	userPostApiService: UserPostsServiceTypes;
	userPostsStatus = API_INITIAL as number;
	userPostsResponse = {} as userPostsResponseTypes;
	searchText = "" as string
	searchStatus = false as boolean

	constructor(userPostServiceApi: UserPostsServiceTypes) {
		makeAutoObservable(this)
		this.userPostApiService = userPostServiceApi;
	}

	getuserPostsResponse = (
		response: userFixturePostsResponseTypes,
	): void => {
		const modelData = response.posts.map((eachPost) => {
			return new UserPostModel(eachPost);
		});
		this.userPostsResponse = {
			posts: modelData,
			responseStatus: response.responseStatus,
		};
	};

	getuserPostsStatus = (responseStatus: APIStatus): void => {
		this.userPostsStatus = responseStatus;
	};

	setSearchStatus = () => {
		this.searchStatus = true
	}

	setSearchText = (text) => {
		this.searchText = text
	}

	fetchUserPosts = (searchText): Promise<Object> => {
		const searchedPostsResponse =
			this.userPostApiService.getUserPosts(searchText);
		return bindPromiseWithOnSuccess(searchedPostsResponse).to(
			this.getuserPostsStatus,
			(response: userFixturePostsResponseTypes): void => {
				return this.getuserPostsResponse(response);
			},
		);
	};
}
