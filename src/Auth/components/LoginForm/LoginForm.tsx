import React, { useState, useRef, useEffect } from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {LoginPageContainer, InstaImageContainer, RenderInstaImage, LoginFormContainer, InstaLogoContainer,
RenderInstaLogo, InstaShareTitle, LoginButton, ButtonErrorMsgContainer, ErrorMsg} from './StyledComponents'

import useInputLabelContainer from "../LoginInputLabelContainer";
import { AuthApiFailureResponseObjTypes, AuthApiResponseObjTypes, AuthRequestObjTypes, loginUserNameAndPasswordPropTypes } from "../../stores/types";
import { isLoggedIn } from "../../../Common/utils/AuthUtils/AuthUtils";

import {useAuthStoreHook} from '../../Hooks/useAuthStore'


export const LoginForm = (props: RouteComponentProps) => {
    
    const {t} = useTranslation()
    
    const authStoreInstance = useAuthStoreHook()

    const buttonTextError = t('loginErrors.loginButtonError')

    const useEffectInitialRender = useRef(true);
    
    const [userDetails, setUserDetails] = useState({username: "", password: ""} as AuthRequestObjTypes)
    const [isUserNameErrorDisplayed, setUserNameErrorDisplayStatus] = useState(false as boolean)
    const [isPasswordErrorDisplayed, setPasswordErrorDisplayStatus] = useState(false as boolean)
    const [errorMsg, setErrorMsg] = useState("" as string)
    const [response, setResponse] = useState({} as AuthApiFailureResponseObjTypes | AuthApiResponseObjTypes)


    const onFocusEvent = (setFunction: { (value: React.SetStateAction<boolean>)}): void => {
        setFunction(false)
    }

    const onBlurUsername = (): void => {
        const regex = new RegExp('[a-zA-Z0-9]{5,}')
        const result = regex.test(userDetails.username)
        if(result){
            setUserNameErrorDisplayStatus(false)
        }else{
            setUserNameErrorDisplayStatus(true)
        }
    }

    const onBlurPassword = (): void => {
        const regex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        const result = regex.test(userDetails.password)
        if(result){
            setPasswordErrorDisplayStatus(false)
        }else{
            setPasswordErrorDisplayStatus(true)
        }
    }
    
    const onSuccess = (): void => {
        const {history} = props
        history.replace("/")
    }

    const onFailure = (failureResponse: AuthApiFailureResponseObjTypes): void => {
        setErrorMsg(failureResponse.error_msg)
    }

    useEffect(() => {
        if(useEffectInitialRender.current){
            useEffectInitialRender.current = false
        }
        else{
            setErrorMsg(buttonTextError)
        }
    }, [buttonTextError])
    
    const loginAPI = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        
        if(userDetails.username !== "" && userDetails.password !== ""){
            setErrorMsg("")

            await authStoreInstance.onAuthLogIn(userDetails)
            setResponse(authStoreInstance.authApiResponse)
            
            if(response.responseStatus){
                onSuccess()
            }
            else{
                onFailure(response as unknown as AuthApiFailureResponseObjTypes)
            }
        }
        else{
            setErrorMsg(buttonTextError)
        }
    }

    const onChangeUsername = (event: React.FormEvent<HTMLInputElement>): void => {
        setUserDetails({username: event.currentTarget.value, password: userDetails.password})
    }

    const onChangePassword = (event: React.FormEvent<HTMLInputElement>): void => {
        setUserDetails({username: userDetails.username, password: event.currentTarget.value})
    }

    const loginUserNameProps: loginUserNameAndPasswordPropTypes = {
        type: "text",
        labelText: "USERNAME",
        id: "username",
        value: userDetails.username,
        onchangeMethod: onChangeUsername,
        placeholder: "Username",
        isErrorDisplayed: isUserNameErrorDisplayed,
        setFunction: setUserNameErrorDisplayStatus,
        errMsg: t('loginErrors.loginUsernameError'),
        onblurFunc: onBlurUsername,
        OnFocusEvent: onFocusEvent
    }
    
    const loginPasswordProps:loginUserNameAndPasswordPropTypes = {
        type: "password",
        labelText: "PASSWORD",
        id: "password",
        value: userDetails.password,
        onchangeMethod: onChangePassword,
        placeholder: "Password",
        isErrorDisplayed: isPasswordErrorDisplayed,
        setFunction: setPasswordErrorDisplayStatus,
        errMsg: t('loginErrors.loginPasswordError'),
        onblurFunc: onBlurPassword,
        OnFocusEvent: onFocusEvent
    }

    return(
        <LoginPageContainer>
            {isLoggedIn()? <Redirect to="/"/> : null}
            <InstaImageContainer>
                <RenderInstaImage src="https://res.cloudinary.com/degjdup40/image/upload/v1654572231/Layer_2_sz97wf.png"/>
            </InstaImageContainer>

            <LoginFormContainer onSubmit={loginAPI}>
                <InstaLogoContainer>
                    <RenderInstaLogo src="https://res.cloudinary.com/degjdup40/image/upload/v1654572262/Standard_Collection_8_m8rwqb.png"/>
                    <InstaShareTitle>Insta Share</InstaShareTitle>
                </InstaLogoContainer>
                {useInputLabelContainer(loginUserNameProps)}
                {useInputLabelContainer(loginPasswordProps)}
                <ButtonErrorMsgContainer>
                    <LoginButton type="submit">{authStoreInstance.authApiStatus === 100 ? "Loading" : t<string>('loginPageText.loginText')}</LoginButton>
                    <ErrorMsg>{errorMsg === "" ? null : errorMsg}</ErrorMsg>
                </ButtonErrorMsgContainer>
            </LoginFormContainer>
        </LoginPageContainer>
    )
}

