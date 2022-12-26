import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css'
import LoginForm from './Auth/components/LoginForm';
import Translate from './Common/Translate/index'
import ProtectedRoute from './Common/utils/ProtectedRoute';
import { ObjContext } from './Common/context';
import { contextValueTypes } from './Auth/stores/types';
import  HomeSearchRoute  from './HomeRoute/Components/HomeSearchRoute/index'
import { AuthStoreHook } from './Auth/Hooks/useAuthStore';
import UserProfile from './Profile/UserProfile';

const mediaQuery = window.matchMedia("(min-width: 768px)")

const App = (): JSX.Element => {

  const [screenSize, setScreenSize] = useState(mediaQuery.matches as boolean)

  const changeScreenSize = (event) => {
    setScreenSize(event.matches)
  }

  useEffect(() =>{
    mediaQuery.onchange = (event) => changeScreenSize(event)
  })

  const contextValues: contextValueTypes = {
    isDesktopView: screenSize 
  }

  const AuthStoreHookLoginForm = (): JSX.Element => {
    return(
      <AuthStoreHook>
        <LoginForm history={undefined} location={undefined} match={undefined} />
      </AuthStoreHook>
    )
  }

  return (<ObjContext.Provider value={contextValues}>
    <BrowserRouter>
        <Translate/>
        <Switch>
            <Route exact path="/login" component={AuthStoreHookLoginForm} />
            <ProtectedRoute exact path="/" component={HomeSearchRoute}/>
            <ProtectedRoute exact path='/profile' component={UserProfile}/>
        </Switch>
    </BrowserRouter>
  </ObjContext.Provider>)
}

export default App;
