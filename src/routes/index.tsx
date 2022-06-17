import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from '../components/Home'
import LoginForm from '../components/LoginForm'

// import ProtectedRoute from './ProtectedRoute'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={LoginForm}/>
            <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
)

export default Routes