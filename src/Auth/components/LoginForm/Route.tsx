import { observer } from "mobx-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouteComponentProps } from "react-router-dom";

import { isLoggedIn } from "../../../Common/utils/AuthUtils/AuthUtils";

import { useAuthStoreHook } from "../../hooks/useAuthStore";

import LoginForm from "./index";

const Route = observer((props: RouteComponentProps) => {
	const authStore = useAuthStoreHook();

	const {
		username,
		password,
		onAuthLogIn,
		authApiResponse,
		setEmptyDetailsErrorMsg,
	} = authStore;

	const { t } = useTranslation();

	const { history } = props;

	const buttonTextError = t("loginErrors.loginButtonError");

	const onSuccess = (): void => {
		history.replace("/");
	};

	const loginAPI = async (): Promise<void> => {
		if (username !== "" && password !== "") {
			await onAuthLogIn();

			if (authApiResponse.responseStatus) {
				onSuccess();
			}
		} else {
			setEmptyDetailsErrorMsg(buttonTextError);
		}
	};

	useEffect((): void => {
		if (isLoggedIn()) {
			history.replace("/");
		}
	}, []);

	return <LoginForm loginAPI={loginAPI} />;
});

export default Route;
