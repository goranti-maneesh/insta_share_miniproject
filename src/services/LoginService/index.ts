import {LoginApiResponseObjTypes, LoginRequestObjTypes} from '../../stores/types'

interface LoginServiceType{
    onLogin: (requestObject: LoginRequestObjTypes) => Promise<LoginApiResponseObjTypes>
}

export default LoginServiceType