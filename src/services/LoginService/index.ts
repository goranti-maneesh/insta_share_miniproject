import {AuthApiResponseObjTypes, AuthRequestObjTypes} from '../../stores/types'

interface AuthServiceType{
    onAuthLogin: (requestObject: AuthRequestObjTypes) => Promise<AuthApiResponseObjTypes>
}

export default AuthServiceType