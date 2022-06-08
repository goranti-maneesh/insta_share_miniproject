import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'

export const ProtectedRoute = (props: RouteComponentProps) => {
    const jwtToken = Cookies.get("jwt_token")
    if(jwtToken === undefined){
        return<Redirect to="/login"/>
    }
    
    return <Route {...props}/>
}