import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { createContext } from 'react';

import stores from '../src/stores/index'

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Translate from './common/Translate/index'
import ProtectedRoute from './utils/ProtectedRoute';

export const ObjContext = createContext(stores)

const App = (): JSX.Element => (
  <ObjContext.Provider value={stores}>
    <BrowserRouter>
        <Translate/>
        <Switch>
            <Route exact key="login" path="/login" component={LoginForm} />
            <ProtectedRoute exact key="/" path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
  </ObjContext.Provider>
)

export default App;
