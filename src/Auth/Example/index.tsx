import { useState } from 'react';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { APIStatus, API_INITIAL} from '@ib/api-constants/lib/index';

import AuthServiceType from '../services/LoginService/index'

import AuthServiceApiInstance from '../stores/index'
import { AuthRequestObjTypes, AuthApiResponseObjTypes, AuthApiFailureResponseObjTypes } from '../stores/types'
import { setJwtToken } from '../utils/StorageUtils';

const useAuthStore = () => {

    const [authApiResponse, setAuthApiResponse] = useState({})
    const [authApiFetchStatus, setAuthApiFetchStatus] = useState(API_INITIAL)

    const setAuthCookies = (response: AuthApiResponseObjTypes| AuthApiFailureResponseObjTypes) =>{
        const {jwt_token} = response
        // console.log(response, "response timeee")
        if(Object.keys(response).includes('jwt_token')){
            setJwtToken(jwt_token)
            return response
        }
        return response
    }
    
    const changeAuthApiResponse = (apiResponse: APIStatus) => {
        setAuthApiResponse(apiResponse)
    }

    const onAuthLogIn = (userDetais: AuthRequestObjTypes) => {

        const authLoginApi = AuthServiceApiInstance.authServiceApiInstance.onAuthLogin(userDetais)
        console.log(authLoginApi, "authApi")
        return bindPromiseWithOnSuccess(authLoginApi).to(
            changeAuthApiResponse, (response) => {
                setAuthCookies(response);
            }
        )
    }

    return onAuthLogIn
}

export default useAuthStore