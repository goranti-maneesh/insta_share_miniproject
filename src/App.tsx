import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

import LoginForm from "./Auth/components/LoginForm/Route";
import ProtectedRoute from "./Common/utils/ProtectedRoute";
import HomeAndSearch from "./HomeRoute/components/HomeAndSearch/index";
import MyProfile from "./Profile/components/MyProfile";
import UserProfile from "./Profile/components/UserProfile";

import { ObjContext } from "./Common/context";

import { contextValueTypes } from "./Auth/stores/types";

import { AuthStoreHook } from "./Auth/hooks/useAuthStore";
import { SearchedPostsHook } from "./HomeRoute/hooks/UserPosts/useUserPostsHook";
import { ProfileDetailsHook } from "./Profile/hooks/ProfileDetails/useProfileDetailsHook";
import { UserProfileDetailsHook } from "./Profile/hooks/UserProfileDetails/useUserProfileDetailsHooks";

const mediaQuery = window.matchMedia("(min-width: 768px)");

const App = (): JSX.Element => {
	const [screenSize, setScreenSize] = useState(mediaQuery.matches as boolean);

	const changeScreenSize = (event) => {
		setScreenSize(event.matches);
	};

	useEffect(() => {
		mediaQuery.onchange = (event) => changeScreenSize(event);
	});

	const contextValues: contextValueTypes = {
		isDesktopView: screenSize,
	};

	return (
		<ObjContext.Provider value={contextValues}>
			<BrowserRouter>
				<AuthStoreHook>
					<SearchedPostsHook>
						<ProfileDetailsHook>
							<UserProfileDetailsHook>
								<Switch>
									<Route
										exact
										path="/login"
										component={LoginForm}
									/>
									<ProtectedRoute
										exact
										path="/"
										component={HomeAndSearch}
									/>
									<ProtectedRoute
										exact
										path="/my-profile"
										component={MyProfile}
									/>
									<ProtectedRoute
										exact
										path="/users/:userId"
										component={UserProfile}
									/>
								</Switch>
							</UserProfileDetailsHook>
						</ProfileDetailsHook>
					</SearchedPostsHook>
				</AuthStoreHook>
			</BrowserRouter>
		</ObjContext.Provider>
	);
};

export default App;
