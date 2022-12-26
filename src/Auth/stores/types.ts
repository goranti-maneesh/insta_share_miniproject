import { Dispatch, SetStateAction } from "react"
import AuthServiceApi from "../services/LoginService/index.api"
import AuthStore from "./AuthStore"

export interface AuthApiResponseObjTypes{
    jwt_token: string,
    responseStatus: boolean
}

export interface AuthApiFailureResponseObjTypes{
    error_msg: string,
    status_code: number,
    responseStatus: boolean,
    jwt_token?: string
}

export interface AuthRequestObjTypes{
    username: string,
    password: string,
}

interface ApiNetworkCallType{
    api: Object,
    networkCallWithApisauce: Function
}

export interface ServiceStoreTypes{
    AuthServiceApiInstance: ApiNetworkCallType,
    AuthStoreInstance: {
        loginApiService: ApiNetworkCallType
        onAuthLogIn: Function,
        setCookies: Function
    }
}

export interface loginUserNameAndPasswordPropTypes {
    type: string;
    labelText: string;
    id: string;
    value: string;
    onchangeMethod: (event: React.FormEvent<HTMLInputElement>) => void;
    placeholder: string;
    isErrorDisplayed: boolean;
    setFunction: React.Dispatch<React.SetStateAction<boolean>>;
    errMsg: string;
    onblurFunc: () => void;
    OnFocusEvent: (setFunction: (value: React.SetStateAction<boolean>) => void) => void;
}

export interface contextValueTypes {
    isDesktopView: boolean;
}