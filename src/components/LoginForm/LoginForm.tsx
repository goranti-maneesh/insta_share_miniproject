import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import {LoginPageContainer, InstaImageContainer, RenderInstaImage, LoginFormContainer, InstaLogoContainer,
RenderInstaLogo, InstaShareTitle, LoginButton, InputFieldContainer,
LabelElement, InputElement} from './StyledComponents'

export const LoginForm = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState(false)
    const [isErrorDisplayed, setErrorDisplayStatus] = useState(false)

    const useInputLabelContainer = (labelText: string, id: string, value:string, onchangeMethod: void, placeholder: string) (
        <InputFieldContainer>
            <LabelElement for={id}></LabelElement>
            <InputElement value={value} id={id} onChange={onchangeMethod} placeholder={placeholder}/>
        </InputFieldContainer>
    )

    const useEffect: void(() => {
        const loginApi = async () => {
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
                useOnSuccess(data.jwt_token)
            }
            else{
                useOnFailure(data.error_msg)
            }
            
        }
    }, [])

    const useOnSuccess = (jwtToken) => {
        setErrorDisplayStatus(false)
        Cookies.set("jwt_token", jwtToken, {expires: 30})
        // const history = useHistory()
        // history.replace
    }

    const useOnFailure = (errorMsg) => {
        setErrorDisplayStatus(true)
        setErrorMsg(errorMsg)
    }

    const useOnChangeUsername = (event: React.FormEvent<HTMLInputElement>) => {
        setUserName(userName + event.currentTarget.value)
    }

    const useOnChangePassword = (event: React.FormEvent<HTMLInputElement>) => {
        setPassword(password + event.currentTarget.value)
    }

    return(
        <LoginPageContainer>
            <InstaImageContainer>
                <RenderInstaImage src=""/>
            </InstaImageContainer>
            <LoginFormContainer>
                <InstaLogoContainer>
                    <RenderInstaLogo src=""/>
                    <InstaShareTitle>Insta Share</InstaShareTitle>
                </InstaLogoContainer>
                {useInputLabelContainer("USERNAME", "username", userName, useOnChangeUsername, "Username")}
                {useInputLabelContainer("PASSWORD", "password", password, useOnChangePassword, "Password")}
                <LoginButton>Login</LoginButton>
            </LoginFormContainer>
        </LoginPageContainer>
    )
}
