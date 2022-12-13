import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

import stores from './Auth/stores/index'

import './App.css'

import LoginForm from './Auth/components/LoginForm';
import Translate from './Common/Translate/index'
import ProtectedRoute from './Common/utils/ProtectedRoute';
import { ObjContext } from './Common/context/context';
import { contextValueTypes } from './Auth/stores/types';
import { HomeAndSearch } from './HomeRoute/Components/HomeAndSearch/HomeAndSearch'

const isLargeView = window.matchMedia("(min-width: 768px)")

const App = (): JSX.Element => {

  const [searchtText, setSearchText] = useState("")
  const [screenSize, setScreenSize] = useState(isLargeView)

  const changeScreenSize = (mediaQueryObject) => {
    setScreenSize(mediaQueryObject.matches)
  }

  isLargeView.addEventListener("change", changeScreenSize)

  useEffect(() =>{
    setScreenSize(isLargeView)
  })

  const contextValues: contextValueTypes = {
    ...stores,
    searchValues: [searchtText, setSearchText],
    screenSizeView: screenSize 
  }

  return (<ObjContext.Provider value={contextValues}>
    <BrowserRouter>
        <Translate/>
        <Switch>
            <Route exact key="login" path="/login" component={LoginForm} />
            <ProtectedRoute exact key="/" path="/" component={HomeAndSearch}/>
        </Switch>
    </BrowserRouter>
  </ObjContext.Provider>)
}

export default App;
