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
	loginPageInstaShareText
} from "../../../Common/constants/LocalConstants";

import {
	loginUserNameAndPasswordPropTypes,
	loginPageProps
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

	const {loginAPI} = props


	const onSubmitForm = (
		event: React.FormEvent<HTMLFormElement>,
	): void => {
		event.preventDefault();
		loginAPI()
	};

	const onChangeUsername = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		authStore.setUsername(event.currentTarget.value)
	};

	const onChangePassword = (
		event: React.FormEvent<HTMLInputElement>,
	): void => {
		authStore.setPassword(event.currentTarget.value)
	};

	const loginUserNameProps: loginUserNameAndPasswordPropTypes = {
		type: "text",

		labelText: t("loginPageText.usernameLabelText"),
		placeholder: t("loginPageText.usernamePhaceholderText"),
		errMsg: t("loginErrors.loginUsernameError"),

		id: userNameInputEleId,
		value: authStore.username,
		onchangeMethod: onChangeUsername,
		regexValue: userNameRegexExpression,
	};

	const loginPasswordProps: loginUserNameAndPasswordPropTypes = {
		type: "password",

		labelText: t("loginPageText.passwordLabelText"),
		placeholder: t("loginPageText.passwordPhaceholderText"),
		errMsg: t("loginErrors.loginPasswordError"),

		id: passwordInputEleId,
		value: authStore.password,
		onchangeMethod: onChangePassword,
		regexValue: passWordRegexExpression,
	};
	console.log(authStore.authApiErrorResponse)

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
							{authStore.authApiStatus === 100
								? t<string>("loginPageText.loadingText")
								: t<string>("loginPageText.loginText")}
						</LoginButton>
						{authStore.authApiErrorResponse ? <ErrorMsg>{authStore.authApiErrorResponse}</ErrorMsg> : null}
					</ButtonErrorMsgContainer>
				</LoginFormContainer>
			</LoginPageContainer>
		</LoginAndTranslateContainer>
	);
});
