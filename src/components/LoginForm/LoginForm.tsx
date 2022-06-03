import { useState } from "react";
import Cookies from "js-cookie";
import { render } from "@testing-library/react";
import {LoginPageContainer, InstaImageContainer, RenderInstaImage, LoginFormContainer, InstaLogoContainer,
RenderInstaLogo, InstaShareTitle, LoginButton, InputFieldContainer,
LabelElement, InputElement} from './StyledComponents'

export const LoginForm = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [isErrorDisplayed, setErrorDisplayStatus] = useState("")

    const useInputLabelContainer = () (
        <InputFieldContainer>
            <LabelElement for={id}></LabelElement>
            <InputElement value={value} id={id} onChange={onchangeMethod}/>
        </InputFieldContainer>
    )

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
                {useInputLabelContainer()}
                {useInputLabelContainer()}
                <LoginButton>Login</LoginButton>
            </LoginFormContainer>
        </LoginPageContainer>
    )
}
