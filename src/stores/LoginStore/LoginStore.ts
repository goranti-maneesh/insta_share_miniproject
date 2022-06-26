import { observable } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import LoginServiceApiInstance from '../index'
import { LoginRequestObjTypes, LoginApiResponseTypes } from '../types'
import Cookies from 'js-cookie'
import LoginServiceType from '../../services/LoginService/index'
import { APIStatus, API_INITIAL} from '@ib/api-constants/lib/index';

// const LoginApi = new LoginServiceApi()
export class LoginStore{
    @observable loginApiService!: LoginServiceType
    @observable loginApiStatus = API_INITIAL;
    // @observable 

    constructor(LoginServiceApiInstance: LoginServiceType){
        this.loginApiService = LoginServiceApiInstance
    }

    setCookies = (response: LoginApiResponseTypes) =>{
        if(Object.keys(response)[0] === 'jwt_token'){
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
                // if(Object.keys(response)[0] === 'jwt_token'){
                    this.setCookies(response as LoginApiResponseTypes);
                    onSuccess()
                // }
            }
        )
    }
}

