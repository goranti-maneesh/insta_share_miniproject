import {
	AuthApiResponseObjTypes,
	AuthApiFailureResponseObjTypes,
	AuthRequestObjTypes,
} from "../../stores/types";

interface AuthServiceType {
	onAuthLogin: (
		requestObject: AuthRequestObjTypes,
	) => Promise<AuthApiResponseObjTypes | AuthApiFailureResponseObjTypes>;
}

export default AuthServiceType;
