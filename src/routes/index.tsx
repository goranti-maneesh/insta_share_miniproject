import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LoginForm from '../components/LoginForm'

// import ProtectedRoute from './ProtectedRoute'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={LoginForm}/>
        </Switch>
    </BrowserRouter>
)