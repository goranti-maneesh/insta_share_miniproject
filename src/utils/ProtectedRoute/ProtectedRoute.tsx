import Cookies from 'js-cookie'
import {Redirect, Route, RouteProps} from 'react-router-dom'

export const ProtectedRoute = (props: RouteProps) => {
    const jwtToken = Cookies.get("jwt_token")
    console.log(document.location.pathname)
    if(jwtToken === undefined){
        return<Redirect to="/login"/>
    }
    
    return <Route key={document.location.pathname} {...props}/>
}