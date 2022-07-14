import Cookies from 'js-cookie'

import { observable } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { APIStatus, API_INITIAL} from '@ib/api-constants/lib/index';

import LoginServiceType from '../../services/LoginService/index.api'

import LoginServiceApiInstance from '../index'
import { LoginRequestObjTypes, LoginApiResponseObjTypes, LoginApiFaliureResponseObjTypes } from '../types'

// const LoginApi = new LoginServiceApi()
export class LoginStore{
    @observable loginApiService!: LoginServiceType
    @observable loginApiStatus = API_INITIAL;
    // @observable 

    constructor(LoginServiceApiInstance: LoginServiceType){
        this.loginApiService = LoginServiceApiInstance
    }

    setCookies = (response: LoginApiResponseObjTypes) =>{
        if(Object.keys(response).includes('jwt_token')){
            Cookies.set('jwtToken', response.jwt_token, {expires:30})
        }
    }

    setApiStatus = (apiResponse: APIStatus) => {
        this.loginApiStatus = apiResponse
    }

    onLogIn = (userDetais: LoginRequestObjTypes, onSuccess = () => {}, onFailure = (error: any) => {}) => {
        
        const loginApi = this.loginApiService.onLogin(userDetais)
        return bindPromiseWithOnSuccess(loginApi)
        .to(
            this.setApiStatus, (response) => {
                console.log(response, 'response')
                this.setCookies(response);
                onSuccess()
            }
        )
    }
}

