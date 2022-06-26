import {LoginApiResponseTypes, LoginApiFaliureResponseObjTypes, LoginRequestObjTypes} from '../../stores/types'

interface LoginServiceType{
    onLogin: (requestObject: LoginRequestObjTypes) => Promise<LoginApiResponseTypes | LoginApiFaliureResponseObjTypes>
}

export default LoginServiceType