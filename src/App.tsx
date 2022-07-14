import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';

import stores from '../src/stores/index'

import Home from './components/Home';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './utils/ProtectedRoute';

export const ObjContext = createContext(stores)

const App = (): JSX.Element => (
  <ObjContext.Provider value={stores}>
    <BrowserRouter>
        <Switch>
            <Route key="login" path="/login" component={LoginForm}/>
            <ProtectedRoute key="/" path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
  </ObjContext.Provider>
)

export default App;
