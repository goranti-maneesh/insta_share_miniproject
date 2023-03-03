import { observer } from "mobx-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouteComponentProps } from "react-router-dom";

import { isLoggedIn } from "../../../Common/utils/AuthUtils/AuthUtils";

import { useAuthStoreHook } from "../../hooks/useAuthStore";

import LoginForm from "./index";

const Route = observer((props: RouteComponentProps) => {
	const authStore = useAuthStoreHook();

	const { t } = useTranslation();

    const { history } = props;

	const buttonTextError = t("loginErrors.loginButtonError");

	const onSuccess = (): void => {
		history.replace("/");
	};

	const loginAPI = async (): Promise<void> => {
		if (authStore.username !== "" && authStore.password !== "") {

			await authStore.onAuthLogIn();

			if (authStore.authApiResponse.responseStatus) {
				onSuccess();
			} 
		} else {
			authStore.setEmptyDetailsErrorMsg(buttonTextError)
		}
	};

    useEffect((): void => {
        if (isLoggedIn()) {
			history.replace("/");
		}
    }, [])

	return (
		<LoginForm
			loginAPI={loginAPI}
		/>
	);
});

export default Route;
