import {
	AuthApiFailureResponseObjTypes,
	AuthApiResponseObjTypes,
	AuthRequestObjTypes,
} from "../../stores/types";
import config from "../../../Common/constants/EnvironmentConstants";

import AuthServiceType from "./index";

class AuthServiceApi implements AuthServiceType {
  
	onAuthLogin = async (
		requestObj: AuthRequestObjTypes,
	): Promise<AuthApiResponseObjTypes | AuthApiFailureResponseObjTypes> => {
		const options = {
			method: "POST",
			body: JSON.stringify(requestObj),
		};

		const url = `${config.LOGIN_BASE_URL}/login`;

		const response = await fetch(url, options);
		const data = await response.json();
		return {
			...data,
			responseStatus: response.ok,
		};
	};
}

export {AuthServiceApi};
