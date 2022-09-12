import Cookies from 'js-cookie'

import { observable } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { APIStatus, API_INITIAL} from '@ib/api-constants/lib/index';

import AuthServiceType from '../../services/LoginService/index'

import AuthServiceApiInstance from '../index'
import { AuthRequestObjTypes, AuthApiResponseObjTypes, AuthApiFaliureResponseObjTypes } from '../types'

export class AuthStore{
    @observable authApiService!: AuthServiceType
    @observable authApiStatus = API_INITIAL;

    constructor(AuthServiceApiInstance: AuthServiceType){
        this.authApiService = AuthServiceApiInstance
    }

    setAuthCookies = (response: any) =>{
        console.log(response, 'response')
        if(Object.keys(response).includes('jwt_token')){
            Cookies.set('jwtToken', response.jwt_token, {expires:30})
        }
    }

    setAuthApiStatus = (apiResponse: APIStatus) => {
        this.authApiStatus = apiResponse
    }

    onAuthLogIn = (userDetais: AuthRequestObjTypes, onSuccess = () => {}, onFailure = (error: any) => {}) => {
        // console.log(123)
        const authLoginApi = this.authApiService.onAuthLogin(userDetais)
        console.log(authLoginApi)
        // authLoginApi.then(data=>{
        //     console.log(data, "data")
        // })
        // .then((data)=>{
        //     conso
        // })
        return bindPromiseWithOnSuccess(authLoginApi)
        .to(
            this.setAuthApiStatus, (response) => {
                this.setAuthCookies(response);
                onSuccess()
            }
        )
    }
}

