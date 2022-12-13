import { observable } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { APIStatus, API_INITIAL} from '@ib/api-constants/lib/index';

import AuthServiceType from '../../services/LoginService/index'

import AuthServiceApiInstance from '../index'
import { AuthRequestObjTypes, AuthApiResponseObjTypes, AuthApiFailureResponseObjTypes } from '../types'
import { setJwtToken } from '../../../Common/utils/StorageUtils';

export class AuthStore{
    @observable authApiService: AuthServiceType
    @observable authApiStatus = API_INITIAL;

    constructor(AuthServiceApiInstance: AuthServiceType){
        this.authApiService = AuthServiceApiInstance
    }

    setAuthCookies = (response: AuthApiResponseObjTypes| AuthApiFailureResponseObjTypes) =>{
        const {jwt_token, responseStatus} = response
        if(responseStatus){
            setJwtToken(jwt_token)
        }
    }
    
    setAuthApiStatus = (apiResponse: APIStatus) => {
        this.authApiStatus = apiResponse
    }

    onAuthLogIn = (userDetais: AuthRequestObjTypes) => {
        const authLoginApi = this.authApiService.onAuthLogin(userDetais)
        return bindPromiseWithOnSuccess(authLoginApi).to(
            this.setAuthApiStatus, (response) => {
                this.setAuthCookies(response);
            }
        )
    }
}

