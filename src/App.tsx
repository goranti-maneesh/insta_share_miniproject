import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css'
import LoginForm from './Auth/components/LoginForm';
import Translate from './Common/Translate/index'
import ProtectedRoute from './Common/utils/ProtectedRoute';
import { ObjContext } from './Common/context/context';
import { contextValueTypes } from './Auth/stores/types';
import  HomeSearchRoute  from './HomeRoute/Components/HomeSearchRoute/index'
import { AuthStoreHook } from './Auth/Hooks/useAuthStore';

const isLargeView = window.matchMedia("(min-width: 768px)")

const App = (): JSX.Element => {

  const [screenSize, setScreenSize] = useState(isLargeView)

  const changeScreenSize = (mediaQueryObject) => {
    setScreenSize(mediaQueryObject.matches)
  }

  isLargeView.addEventListener("change", changeScreenSize)

  useEffect(() =>{
    setScreenSize(isLargeView)
  },[])

  const contextValues: contextValueTypes = {
    screenSizeView: screenSize 
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
        </Switch>
    </BrowserRouter>
  </ObjContext.Provider>)
}

export default App;
