import React, { useState, useContext, FC, useEffect } from "react";
import { RouteComponentProps, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {LoginPageContainer, InstaImageContainer, RenderInstaImage, LoginFormContainer, InstaLogoContainer,
RenderInstaLogo, InstaShareTitle, LoginButton, ButtonErrorMsgContainer, ErrorMsg} from './styledComponents'

import {ObjContext} from '../../App'
import useInputLabelContainer from "../../common/LoginInputLabelContainer";
import { AuthApiFaliureResponseObjTypes, loginUserNameAndPasswordPropTypes } from "../../stores/types";
import { isLoggedIn } from "../../utils/AuthUtils/AuthUtils";

const LoginForm: FC<RouteComponentProps> = ({history}) => {

    const {t} = useTranslation()

    const buttonTextError = t('loginErrors.loginButtonError')

    const objUseContext = useContext(ObjContext)
    
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isUserNameErrorDisplayed, setUserNameErrorDisplayStatus] = useState(false)
    const [isPasswordErrorDisplayed, setPasswordErrorDisplayStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [isErrorDisplayed, setErrorDisplayStatus] = useState(false)
    const [isLoading, setLoadingStatus] = useState(false)

    const onFocusEvent = (setFunction: { (value: React.SetStateAction<boolean>): void}) => {
        setFunction(false)
    }

    const onBlurUsername = () => {
        const regex = new RegExp('[a-zA-Z0-9]{5,}')
        const result = regex.test(userName)
        if(result){
            setUserNameErrorDisplayStatus(false)
        }else{
            setUserNameErrorDisplayStatus(true)
        }
    }

    const onBlurPassword = () => {
        const regex = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
        const result = regex.test(password)
        if(result){
            setPasswordErrorDisplayStatus(false)
        }else{
            setPasswordErrorDisplayStatus(true)
        }
    }
    
    const onSuccess = () => {
        setErrorDisplayStatus(false)
        setLoadingStatus(false)
        console.log(history)
        history.replace("/")
    }

    const onFailure = (failureResponse: AuthApiFaliureResponseObjTypes) => {
        setErrorDisplayStatus(true)
        setLoadingStatus(false)
        setErrorMsg(failureResponse.error_msg)
    }

    useEffect(() => {
        setErrorMsg(buttonTextError)
    })
    
    const loginAPI = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const userDetails = {
            username: userName,
            password: password
        }
        
        if(userName !== "" && password !== ""){
            setLoadingStatus(true)
            setErrorDisplayStatus(false)
            setErrorMsg("")

            const returnData: any = await objUseContext.authStoreInstance.onAuthLogIn(userDetails)
            
            if(Object.keys(returnData).includes('jwt_token')){
                onSuccess()
            }
            else{
                onFailure(returnData as AuthApiFaliureResponseObjTypes)
            }
        }
        else{
            setErrorDisplayStatus(true)
        }
    }


    const onChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setUserName(event.currentTarget.value)
    }

    const onChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const loginUserNameProps: loginUserNameAndPasswordPropTypes = {
        type: "text",
        labelText: "USERNAME",
        id: "username",
        value: userName,
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
        value: password,
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
                    <LoginButton type="submit">{isLoading ? "Loading" : "Login"}</LoginButton>
                    <ErrorMsg>{isErrorDisplayed ? errorMsg: null}</ErrorMsg>
                </ButtonErrorMsgContainer>
            </LoginFormContainer>
        </LoginPageContainer>
    )
}

export  {LoginForm}
