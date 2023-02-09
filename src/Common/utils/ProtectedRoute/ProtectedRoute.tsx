import { Redirect, Route, RouteProps } from "react-router-dom";
import { isLoggedIn } from "../AuthUtils/AuthUtils";

export const ProtectedRoute = (props: RouteProps) => {
	if (isLoggedIn()) {
		return <Route key={document.location.pathname} {...props} />;
	}
	return <Redirect to="/login" />;
};
