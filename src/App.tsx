import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

import LoginForm from "./Auth/components/LoginForm";
import Translate from "./Common/Translate/index";
import ProtectedRoute from "./Common/utils/ProtectedRoute";
import HomeAndSearch from "./HomeRoute/Components/HomeAndSearch/index";
import UserProfile from "./Profile/Components/UserProfile";

import { ObjContext } from "./Common/context";

import { contextValueTypes } from "./Auth/stores/types";

import { AuthStoreHook } from "./Auth/Hooks/useAuthStore";
import { SearchedPostsHook } from "./HomeRoute/Hooks/UserSearchedPosts/useUserSearchedPostsHook";
import { ProfileDetailsHook } from "./Profile/Hooks/ProfileDetails/useProfileDetailsHook";

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
				<Translate />
				<AuthStoreHook>
					<SearchedPostsHook>
						<ProfileDetailsHook>
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
									path="/profile"
									component={UserProfile}
								/>
							</Switch>
						</ProfileDetailsHook>
					</SearchedPostsHook>
				</AuthStoreHook>
			</BrowserRouter>
		</ObjContext.Provider>
	);
};

export default App;
