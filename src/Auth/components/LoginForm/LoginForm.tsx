import React, { useState, useContext, useRef, useEffect } from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {LoginPageContainer, InstaImageContainer, RenderInstaImage, LoginFormContainer, InstaLogoContainer,
RenderInstaLogo, InstaShareTitle, LoginButton, ButtonErrorMsgContainer, ErrorMsg} from './StyledComponents'

import {ObjContext} from '../../../context/context'
import useInputLabelContainer from "../LoginInputLabelContainer";
import { AuthApiFailureResponseObjTypes, AuthApiResponseObjTypes, loginUserNameAndPasswordPropTypes } from "../../stores/types";
import { isLoggedIn } from "../../utils/AuthUtils/AuthUtils";

import useExample from '../../Example'

const LoginForm = (props: RouteComponentProps) => {

    const {t} = useTranslation()

    const buttonTextError = t('loginErrors.loginButtonError')

    const useEffectInitialRender = useRef(true);

    const objUseContext = useContext(ObjContext)

    const {authApiStatus} = objUseContext.authStoreInstance
    
    const [userDetails, setUserDetails] = useState({username: "", password: ""})
    const [isUserNameErrorDisplayed, setUserNameErrorDisplayStatus] = useState(false)
    const [isPasswordErrorDisplayed, setPasswordErrorDisplayStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const onAuthLogIn = useExample()

    const onFocusEvent = (setFunction: { (value: React.SetStateAction<boolean>): void}) => {
        setFunction(false)
    }

    const onBlurUsername = () => {
        const regex = new RegExp('[a-zA-Z0-9]{5,}')
        const result = regex.test(userDetails.username)
        if(result){
            setUserNameErrorDisplayStatus(false)
        }else{
            setUserNameErrorDisplayStatus(true)
        }
    }

    const onBlurPassword = () => {
        const regex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        const result = regex.test(userDetails.password)
        if(result){
            setPasswordErrorDisplayStatus(false)
        }else{
            setPasswordErrorDisplayStatus(true)
        }
    }
    
    const onSuccess = () => {
        const {history} = props
        history.push("/")
    }

    const onFailure = (failureResponse: AuthApiFailureResponseObjTypes) => {
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
    
    const loginAPI = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        if(userDetails.username !== "" && userDetails.password !== ""){
            setErrorMsg("")

            
            const returnData: AuthApiFailureResponseObjTypes | AuthApiResponseObjTypes = await onAuthLogIn(userDetails)
            
            if(returnData.responseStatus){
                onSuccess()
            }
            else{
                onFailure(returnData as unknown as AuthApiFailureResponseObjTypes)
            }
        }
        else{
            setErrorMsg(buttonTextError)
        }
    }

    const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setUserDetails({username: event.currentTarget.value, password: userDetails.password})
        // setUserName(event.currentTarget.value)
    }

    const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
        setUserDetails({username: userDetails.username, password: event.currentTarget.value})
        // setPassword(event.currentTarget.value)
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
                    <LoginButton type="submit">{authApiStatus === 100 ? "Loading" : t<string>('loginPageText.loginText')}</LoginButton>
                    <ErrorMsg>{errorMsg === "" ? null : errorMsg}</ErrorMsg>
                </ButtonErrorMsgContainer>
            </LoginFormContainer>
        </LoginPageContainer>
    )
}

export  {LoginForm}
