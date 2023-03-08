import AuthServiceType from "./index";

import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import getLoginResponse from "../../fixtures/getLoginResponse.json";
import {
	AuthApiResponseObjTypes,
} from "../../stores/types";

class AuthServiceApi implements AuthServiceType {
	onAuthLogin(): Promise<AuthApiResponseObjTypes> {
		return resolveWithTimeout(getLoginResponse);
	}
}

export {AuthServiceApi};
