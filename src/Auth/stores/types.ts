import { RouteComponentProps } from "react-router-dom";

export interface AuthApiResponseObjTypes {
	jwt_token: string;
	responseStatus: boolean;
	error_msg?: string
}

export interface AuthApiFailureResponseObjTypes {
	error_msg: string;
	status_code: number;
	responseStatus: boolean;
	jwt_token?: string;
}

export interface AuthRequestObjTypes {
	username: string;
	password: string;
}

export interface loginUserNameAndPasswordPropTypes {
	type: string;
	labelText: string;
	id: string;
	value: string;
	onchangeMethod: (event: React.FormEvent<HTMLInputElement>) => void;
	placeholder: string;
	errMsg: string;
	regexValue: RegExp;
}

export interface contextValueTypes {
	isDesktopView: boolean;
}

export interface loginPageProps{
	loginAPI: () => void
}
