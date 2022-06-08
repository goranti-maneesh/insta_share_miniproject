import React, { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import {LoginPageContainer, InstaImageContainer, RenderInstaImage, LoginFormContainer, InstaLogoContainer,
RenderInstaLogo, InstaShareTitle, LoginButton, InputFieldContainer,
LabelElement, InputElement, ErrorMsg} from './StyledComponents'
// import useOnSuccess from "./OnSuccess";

export const LoginForm = () => {
    const history = useHistory()
    
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [isErrorDisplayed, setErrorDisplayStatus] = useState(false)

    const useInputLabelContainer = (type:string, labelText: string, id: string, value:string, onchangeMethod: (event: React.FormEvent<HTMLInputElement>) => void, placeholder: string) => (
        <InputFieldContainer>
            <LabelElement htmlFor={id}>{labelText}</LabelElement>
            <br/>
            <InputElement type={type} value={value} id={id} onChange={onchangeMethod} placeholder={placeholder}/>
        </InputFieldContainer>
    )
    
    const onSuccess = (jwtToken: string) => {
        setErrorDisplayStatus(false)
        Cookies.set("jwt_token", jwtToken, {expires: 30})
        console.log(1234567890)
        history.replace("/")
    }

    const onFailure = (errorMsg: string) => {
        setErrorDisplayStatus(true)
        setErrorMsg(errorMsg)
    }
    

    
    const useLoginApi = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        const userDetails = {
            username: userName,
            password: password
        }
        
        const url = "https://apis.ccbp.in/login"

        const options = {
            method: "POST",
            body: JSON.stringify(userDetails)
        }

        const response = await fetch(url, options)
        const data = await response.json()

        if(response.ok){
            onSuccess(data.jwt_token)
        }
        else{
            onFailure(data.error_msg)
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
                {useInputLabelContainer("text", "USERNAME", "username", userName, useOnChangeUsername, "Username")}
                {useInputLabelContainer("password", "PASSWORD", "password", password, useOnChangePassword, "Password")}
                {isErrorDisplayed ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
                <LoginButton type="submit">Login</LoginButton>
            </LoginFormContainer>
        </LoginPageContainer>
    )
}
