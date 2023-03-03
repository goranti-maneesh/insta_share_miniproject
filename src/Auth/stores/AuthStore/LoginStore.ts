import { observable, action, makeAutoObservable } from "mobx";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { APIStatus, API_INITIAL } from "@ib/api-constants";

import { setJwtToken } from "../../../Common/utils/StorageUtils";

import AuthServiceType from "../../services/LoginService/index";

import {
	AuthRequestObjTypes,
	AuthApiResponseObjTypes,
	AuthApiFailureResponseObjTypes,
} from "../types";

class AuthStore {
	authApiService: AuthServiceType;
	authApiStatus = API_INITIAL as number;
	authApiResponse = {} as AuthApiResponseObjTypes | AuthApiFailureResponseObjTypes;
	authApiResponseStatus = false as boolean;
	authApiErrorResponse = "" as string;
	username = "" as string;
	password = "" as string;

	constructor(AuthServiceApi: AuthServiceType) {
		makeAutoObservable(this)
		this.authApiService = AuthServiceApi;
	}

	setAuthCookies = (
		response: AuthApiResponseObjTypes | AuthApiFailureResponseObjTypes,
	): void => {
		const { responseStatus } = response;
		console.log(response)

		if (responseStatus) {
			const {jwt_token} = response

			this.authApiResponse = response;
			this.authApiResponseStatus = responseStatus

			setJwtToken(jwt_token);
		} else {
			const {error_msg} = response
			console.log(error_msg, 'error_msg')
			this.authApiErrorResponse = error_msg;
		}
	};

	setUsername = (username: any) => {
		// console.log(username, 'username')
		this.username = username
	}

	@action.bound
	setPassword = (password: any) => {
		// console.log(password, 'password')
		this.password = password
	}

	@action.bound
	setAuthApiStatus = (apiResponse: APIStatus): void => {
		this.authApiStatus = apiResponse;
	};

	@action.bound
	setEmptyDetailsErrorMsg = (errorText: string): void => {
		this.authApiErrorResponse = errorText
	}

	onAuthLogIn = (): Promise<Object> => {
		const authLoginApi = this.authApiService.onAuthLogin({username: this.username, password: this.password});
		return bindPromiseWithOnSuccess(authLoginApi).to(
			this.setAuthApiStatus,
			(
				response:
					| AuthApiResponseObjTypes
					| AuthApiFailureResponseObjTypes,
			) => {
				this.setAuthCookies(response);
			},
		);
	};
}

export default AuthStore;
