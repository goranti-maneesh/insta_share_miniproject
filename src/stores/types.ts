export interface LoginApiResponseTypes{
    jwt_token: string
}

export interface LogniResObjTypes{
    objKeys: string,
    data: object
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