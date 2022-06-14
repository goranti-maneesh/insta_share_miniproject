import {create, ApisauceInstance} from 'apisauce'
import LoginServiceType from './index'
import {LoginRequestObjTypes} from '../../stores/types'

const loginApi = 'https://apis.ccbp.in/'

class LoginServiceApi implements LoginServiceType{
    networkCallWithApisauce
    constructor(networkCallWithApisauce: Function){ 
        this.networkCallWithApisauce = networkCallWithApisauce
    }
    onLogin = (requestObj: LoginRequestObjTypes) => {
        console.log(requestObj)
        return this.networkCallWithApisauce(
            loginApi,
            'login',
            requestObj,
            'POST'
        )
    }
}

export default LoginServiceApi
