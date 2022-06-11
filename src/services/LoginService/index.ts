import {LoginApiResponseTypes, LoginRequestObjTypes} from '../../stores/types'

interface LoginServiceType{
    onLogin: (requestObject: LoginRequestObjTypes) => Promise<LoginApiResponseTypes>
}

export default LoginServiceType