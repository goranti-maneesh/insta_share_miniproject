import { observer } from "mobx-react";
import React from "react";
import { useTranslation } from "react-i18next";

import Translate from "../../../Common/components/Translate/index";
import {
	imageBaseUrl,
	instaLogoAltText,
	instaLoginPageImageAltText,
	userNameInputEleId,
	passwordInputEleId,
	loginPageInstaShareText,
} from "../../../Common/constants/LocalConstants";

import {
	loginUserNameAndPasswordPropTypes,
	loginPageProps,
} from "../../stores/types";
import {
	userNameRegexExpression,
	passWordRegexExpression,
} from "../../utils/regexExpressions";
import { useAuthStoreHook } from "../../hooks/useAuthStore";

import useInputLabelContainer from "../LoginInputLabelContainer";

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
} from "./styledComponents.js";

export const LoginForm = observer((props: loginPageProps) => {
	const { t } = useTranslation();

	const authStore = useAuthStoreHook();

	const {
		setUsername,
		setPassword,
		username,
		password,
		authApiErrorResponse,
		authApiStatus,
	} = authStore;

	const { loginAPI } = props;

	const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		loginAPI();
	};

	const onChangeUsername = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		setUsername(event.currentTarget.value);
	};

	const onChangePassword = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		setPassword(event.currentTarget.value);
	};

	const loginUserNameProps: loginUserNameAndPasswordPropTypes = {
		type: "text",

		labelText: t("loginPageText.usernameLabelText"),
		placeholder: t("loginPageText.usernamePhaceholderText"),
		errMsg: t("loginErrors.loginUsernameError"),

		id: userNameInputEleId,
		value: username,
		onchangeMethod: onChangeUsername,
		regexValue: userNameRegexExpression,
	};

	const loginPasswordProps: loginUserNameAndPasswordPropTypes = {
		type: "password",

		labelText: t("loginPageText.passwordLabelText"),
		placeholder: t("loginPageText.passwordPhaceholderText"),
		errMsg: t("loginErrors.loginPasswordError"),

		id: passwordInputEleId,
		value: password,
		onchangeMethod: onChangePassword,
		regexValue: passWordRegexExpression,
	};
	console.log(authApiErrorResponse);

	return (
		<LoginAndTranslateContainer>
			<Translate />
			<LoginPageContainer>
				<InstaImageContainer>
					<RenderInstaImage
						src={`${imageBaseUrl}/v1654572231/Layer_2_sz97wf.png`}
						alt={instaLoginPageImageAltText}
					/>
				</InstaImageContainer>

				<LoginFormContainer onSubmit={onSubmitForm}>
					<InstaLogoContainer>
						<RenderInstaLogo
							src={`${imageBaseUrl}/v1654572262/Standard_Collection_8_m8rwqb.png`}
							alt={instaLogoAltText}
						/>
						<InstaShareTitle>
							{loginPageInstaShareText}
						</InstaShareTitle>
					</InstaLogoContainer>
					{useInputLabelContainer(loginUserNameProps)}
					{useInputLabelContainer(loginPasswordProps)}
					<ButtonErrorMsgContainer>
						<LoginButton type="submit">
							{authApiStatus === 100
								? t<string>("loginPageText.loadingText")
								: t<string>("loginPageText.loginText")}
						</LoginButton>
						{authApiErrorResponse ? (
							<ErrorMsg>{authApiErrorResponse}</ErrorMsg>
						) : null}
					</ButtonErrorMsgContainer>
				</LoginFormContainer>
			</LoginPageContainer>
		</LoginAndTranslateContainer>
	);
});
