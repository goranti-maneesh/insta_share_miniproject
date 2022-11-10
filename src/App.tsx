import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

import stores from './stores/index'

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Translate from './common/Translate/index'
import ProtectedRoute from './utils/ProtectedRoute';
import { ObjContext } from './context/context';
import { contextValueTypes } from './stores/types';

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
            <ProtectedRoute exact key="/" path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
  </ObjContext.Provider>)
}

export default App;
