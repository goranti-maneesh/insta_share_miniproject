import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

import LoginForm from "./Auth/components/LoginForm";
import ProtectedRoute from "./Common/utils/ProtectedRoute";
import HomeAndSearch from "./HomeRoute/Components/HomeAndSearch/index";
import MyProfile from "./Profile/Components/MyProfile";
import UserProfile from './Profile/Components/UserProfile'

import { ObjContext } from "./Common/context";

import { contextValueTypes } from "./Auth/stores/types";

import { AuthStoreHook } from "./Auth/Hooks/useAuthStore";
import { SearchedPostsHook } from "./HomeRoute/Hooks/UserSearchedPosts/useUserSearchedPostsHook";
import { ProfileDetailsHook } from "./Profile/Hooks/ProfileDetails/useProfileDetailsHook";
import { UserProfileDetailsHook } from "./Profile/Hooks/UserProfileDetails/useUserProfileDetailsHooks";

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
									<ProtectedRoute exact path="/users/:userId" component={UserProfile}/>
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
