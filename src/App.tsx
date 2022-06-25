import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import stores from '../src/stores/index'
import { Provider, observer } from 'mobx-react'
import { createContext } from 'react';
import {ServiceStoreTypes} from './stores/types'

// type App = () => void;
export const ObjContext = createContext(stores)

const App = (): JSX.Element => (
  <ObjContext.Provider value={stores}>
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={LoginForm}/>
            <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
  </ObjContext.Provider>
)

export default App;
