import { observable } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import LoginServiceApiInstance from '../index'
import { LoginRequestObjTypes } from '../types'
import Cookies from 'js-cookie'
import LoginServiceType from '../../services/LoginService/index'

// const LoginApi = new LoginServiceApi()
export class LoginStore{
    @observable loginApiService!: LoginServiceType
    // @observable 

    constructor(LoginServiceApiInstance: LoginServiceType){
        this.loginApiService = LoginServiceApiInstance
    }

    setCookies = (jwt_token: string) =>{
        Cookies.set('jwtToken', jwt_token, {expires:30})
    }

    onLogIn = (userDetais: LoginRequestObjTypes, onSuccess = () => {}, onFailure = (error: any) => {}) => {
        
        const loginApi = this.loginApiService.onLogin(userDetais)
        console.log(123)
        return bindPromiseWithOnSuccess(loginApi)
        .to(
            this.setCookies, response => {
                console.log(response)
            }
        )
    }
}

