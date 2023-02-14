import React, { useState } from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
	LoginAndTranslateContainer,
	LoginPageContainer,
	InstaImageContainer,
	RenderInstaImage,
	LoginFormContainer,
	InstaLogoContainer,
	RenderInstaLogo,
	InstaShareTitle,
	LoginButton,
	ButtonErrorMsgContainer,
	ErrorMsg,
} from './styledComponents.js';

import useInputLabelContainer from "../LoginInputLabelContainer";

import {
	AuthApiFailureResponseObjTypes,
	AuthApiResponseObjTypes,
	AuthRequestObjTypes,
	loginUserNameAndPasswordPropTypes,
} from "../../stores/types";
import {
	userNameRegexValidation,
	passWordRegexValidation,
} from "../../utils/CredsValidation";
import { useAuthStoreHook } from "../../hooks/useAuthStore";

import { isLoggedIn } from "../../../Common/utils/AuthUtils/AuthUtils";
import Translate from "../../../Common/components/Translate/index";

export const LoginForm = (props?: RouteComponentProps) => {
	const { t } = useTranslation();

	const authStoreInstance = useAuthStoreHook();

	const buttonTextError = t("loginErrors.loginButtonError");

	const [userDetails, setUserDetails] = useState({
		username: "",
		password: "",
	} as AuthRequestObjTypes);
	const [errorMsg, setErrorMsg] = useState("" as string);
	const [response, setResponse] = useState(
		{} as AuthApiFailureResponseObjTypes | AuthApiResponseObjTypes,
	);

	const onSuccess = (): void => {
		const { history } = props;
		history.replace("/");
	};

	const onFailure = (
		failureResponse: AuthApiFailureResponseObjTypes,
	): void => {
		setErrorMsg(failureResponse.error_msg);
		console.log(failureResponse, "error");
	};

	const loginAPI = async (
		event: React.FormEvent<HTMLFormElement>,
	): Promise<void> => {
		event.preventDefault();

		if (userDetails.username !== "" && userDetails.password !== "") {
			setErrorMsg("");

			await authStoreInstance.onAuthLogIn(userDetails);
			setResponse(authStoreInstance.authApiResponse);
			
			if (authStoreInstance.authApiResponse.responseStatus) {
				onSuccess();
			} else {
				console.log(
					authStoreInstance.authApiResponse,
					response,
					"login",
				);
				onFailure(
					authStoreInstance.authApiResponse as unknown as AuthApiFailureResponseObjTypes,
				);
			}
		} else {
			setErrorMsg(buttonTextError);
		}
	};

	const onChangeUsername = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		setUserDetails({
			username: event.currentTarget.value,
			password: userDetails.password,
		});
	};

	const onChangePassword = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		setUserDetails({
			username: userDetails.username,
			password: event.currentTarget.value,
		});
	};

	const loginUserNameProps: loginUserNameAndPasswordPropTypes = {
		type: "text",
		labelText: "USERNAME",
		id: "username",
		value: userDetails.username,
		onchangeMethod: onChangeUsername,
		placeholder: "Username",
		errMsg: t("loginErrors.loginUsernameError"),
		regexValue: userNameRegexValidation,
	};

	const loginPasswordProps: loginUserNameAndPasswordPropTypes = {
		type: "password",
		labelText: "PASSWORD",
		id: "password",
		value: userDetails.password,
		onchangeMethod: onChangePassword,
		placeholder: "Password",
		errMsg: t("loginErrors.loginPasswordError"),
		regexValue: passWordRegexValidation,
	};

	return (
		<LoginAndTranslateContainer>
			<Translate />
			<LoginPageContainer>
				{isLoggedIn() ? <Redirect to="/" /> : null}
				<InstaImageContainer>
					<RenderInstaImage src="https://res.cloudinary.com/degjdup40/image/upload/v1654572231/Layer_2_sz97wf.png" />
				</InstaImageContainer>

				<LoginFormContainer onSubmit={loginAPI}>
					<InstaLogoContainer>
						<RenderInstaLogo src="https://res.cloudinary.com/degjdup40/image/upload/v1654572262/Standard_Collection_8_m8rwqb.png" />
						<InstaShareTitle>Insta Share</InstaShareTitle>
					</InstaLogoContainer>
					{useInputLabelContainer(loginUserNameProps)}
					{useInputLabelContainer(loginPasswordProps)}
					<ButtonErrorMsgContainer>
						<LoginButton type="submit">
							{authStoreInstance.authApiStatus === 100
								? "Loading"
								: t<string>("loginPageText.loginText")}
						</LoginButton>
						<ErrorMsg>{errorMsg === "" ? null : errorMsg}</ErrorMsg>
					</ButtonErrorMsgContainer>
				</LoginFormContainer>
			</LoginPageContainer>
		</LoginAndTranslateContainer>
	);
};
