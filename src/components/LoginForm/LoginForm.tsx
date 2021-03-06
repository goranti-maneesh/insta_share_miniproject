import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import {ObjContext} from '../../App'
import useInputLabelContainer from "../../common/LoginInputLabelContainer";
import { LoginApiFaliureResponseObjTypes } from "../../stores/types";            

import {LoginPageContainer, InstaImageContainer, RenderInstaImage, LoginFormContainer, InstaLogoContainer,
RenderInstaLogo, InstaShareTitle, LoginButton, ButtonErrorMsgContainer, ErrorMsg} from './StyledComponents'

const userNameErrMsg = "User name must contain 5 letters"
const passwordErrMsg = "Password must contain letters, special character and number with range of 6 to 16"


export const LoginForm = () => {
    const history = useHistory()

    const objUseContext = useContext(ObjContext)
    
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isUserNameErrorDisplayed, setUserNameErrorDisplayStatus] = useState(false)
    const [isPasswordErrorDisplayed, setPasswordErrorDisplayStatus] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [isErrorDisplayed, setErrorDisplayStatus] = useState(false)

    const OnFocusEvent = (setFunction: { (value: React.SetStateAction<boolean>): void}) => {
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

    // const useInputLabelContainer = (type:string, labelText: string, id: string, value:string, onchangeMethod: (event: React.FormEvent<HTMLInputElement>) => void, placeholder: string, isErrorDisplayed: boolean, setFunction: { (value: React.SetStateAction<boolean>): void}, errMsg: string, onblurFunc: React.FocusEventHandler<HTMLInputElement>) => (
    //     <InputFieldContainer>
    //         <LabelElement htmlFor={id}>{labelText}</LabelElement>
    //         <br/>
    //         <InputElement type={type} value={value} id={id} onChange={onchangeMethod} placeholder={placeholder} onFocus={() => OnFocusEvent(setFunction)} onBlur={onblurFunc}/>
    //         {/* {isErrorDisplayed ? <ErrorMsg>{errMsg}</ErrorMsg> : null} */}
    //         <ErrorMsg>{isErrorDisplayed ? errMsg: null}</ErrorMsg>
    //     </InputFieldContainer>
    // )
    
    const onSuccess = () => {
        setErrorDisplayStatus(false)
        history.replace("/")
    }

    const onFailure = (failureResponse: LoginApiFaliureResponseObjTypes) => {
        setErrorDisplayStatus(true)
        setErrorMsg(failureResponse.error_msg)
    }
    

    
    const useLoginApi = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const userDetails = {
            username: userName,
            password: password
        }

        if(userName !== "" && password !== ""){
            setErrorDisplayStatus(false)
            setErrorMsg("")

            const returnData = await objUseContext.LoginStoreInstance.onLogIn(userDetails)
            
            if(Object.keys(returnData).includes('jwt_token')){
                onSuccess()
            }
            else{
                onFailure(returnData as LoginApiFaliureResponseObjTypes)
            }
        }
        else{
            setErrorDisplayStatus(true)
            setErrorMsg("Enter valid Username and Password")
        }
    }


    const useOnChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setUserName(event.currentTarget.value)
    }

    const useOnChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    return(
        <LoginPageContainer>
            <InstaImageContainer>
                <RenderInstaImage src="https://res.cloudinary.com/degjdup40/image/upload/v1654572231/Layer_2_sz97wf.png"/>
            </InstaImageContainer>
            <LoginFormContainer onSubmit={useLoginApi}>
                <InstaLogoContainer>
                    <RenderInstaLogo src="https://res.cloudinary.com/degjdup40/image/upload/v1654572262/Standard_Collection_8_m8rwqb.png"/>
                    <InstaShareTitle>Insta Share</InstaShareTitle>
                </InstaLogoContainer>
                {useInputLabelContainer("text", "USERNAME", "username", userName, useOnChangeUsername, "Username", isUserNameErrorDisplayed, setUserNameErrorDisplayStatus, userNameErrMsg, onBlurUsername, OnFocusEvent)}
                {useInputLabelContainer("text", "PASSWORD", "password", password, useOnChangePassword, "Password", isPasswordErrorDisplayed, setPasswordErrorDisplayStatus, passwordErrMsg, onBlurPassword, OnFocusEvent)}
                <ButtonErrorMsgContainer>
                    <LoginButton type="submit">Login</LoginButton>
                    <ErrorMsg>{isErrorDisplayed ? errorMsg: null}</ErrorMsg>
                </ButtonErrorMsgContainer>
            </LoginFormContainer>
        </LoginPageContainer>
    )
}
