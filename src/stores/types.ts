export interface LoginApiResponseTypes{
    jwt_token: string
}

export interface LoginApiFaliureResponseObjTypes{
    error_msg: string,
    status_code: number
}

export interface LoginRequestObjTypes{
    username: string,
    password: string
}

interface ApiNetworkCallType{
    api: Object,
    networkCallWithApisauce: Function
}

export interface ServiceStoreTypes{
    LoginServiceApiInstance: ApiNetworkCallType,
    LoginStoreInstance: {
        loginApiService: ApiNetworkCallType
        onLogIn: Function,
        setCookies: Function
    }
}