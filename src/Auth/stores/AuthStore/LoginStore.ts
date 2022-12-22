import { observable, action } from 'mobx';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { APIStatus, API_INITIAL} from '@ib/api-constants/lib/index';

import AuthServiceType from '../../services/LoginService/index.api'

import { AuthRequestObjTypes, AuthApiResponseObjTypes, AuthApiFailureResponseObjTypes } from '../types'
import { setJwtToken } from '../../../Common/utils/StorageUtils';

export class AuthStore{
    @observable authApiService: AuthServiceType
    @observable authApiStatus = API_INITIAL;
    @observable authApiResponse

    constructor(AuthServiceApiInstance: AuthServiceType){
        this.authApiService = AuthServiceApiInstance
    }

    @action.bound setAuthCookies = (response: AuthApiResponseObjTypes| AuthApiFailureResponseObjTypes): void =>{
        const {jwt_token, responseStatus} = response
        if(responseStatus){
            setJwtToken(jwt_token)
            this.authApiResponse = response
        }
    }
    
    @action.bound setAuthApiStatus = (apiResponse: APIStatus): void => {
        this.authApiStatus = apiResponse
    }

    onAuthLogIn = (userDetais: AuthRequestObjTypes): Promise<Object> => {
        const authLoginApi = this.authApiService.onAuthLogin(userDetais)
        return bindPromiseWithOnSuccess(authLoginApi).to(
            this.setAuthApiStatus, (response: AuthApiResponseObjTypes| AuthApiFailureResponseObjTypes) => {
                this.setAuthCookies(response);
            }
        )
    }
}

