import AuthServiceType from "./index";

import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import getLoginResponse from "../../fixtures/getLoginResponse.json";
import {
	AuthApiFailureResponseObjTypes,
	AuthApiResponseObjTypes,
} from "../../stores/types";

class AuthServiceApi implements AuthServiceType {
	onAuthLogin(): Promise<
		AuthApiResponseObjTypes | AuthApiFailureResponseObjTypes
	> {
		return resolveWithTimeout(getLoginResponse);
	}
}

export default AuthServiceApi;
