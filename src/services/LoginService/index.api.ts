import {create, ApisauceInstance} from 'apisauce'
import LoginServiceType from './index'
const loginApi = 'https://apis.ccbp.in/'

class LoginServiceApi implements LoginServiceType{
    networkCallWithApisauce
    constructor(networkCallWithApisauce: Function){
        this.networkCallWithApisauce = networkCallWithApisauce
    }
    onLogin(requestObj){
        return this.networkCallWithApisauce(
            loginApi,
            'login',
            requestObj,
            'POST'
        )
    }
}

export default LoginServiceApi
