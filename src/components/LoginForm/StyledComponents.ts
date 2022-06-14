import styled from 'styled-components'
import tw from "twin.macro"

export const LoginPageContainer = styled.div`
    ${tw`flex justify-evenly items-center h-screen`}
`

export const InstaImageContainer = styled.div`
    @media (max-width: 768px){
        ${tw`hidden`}
    }
`

export const RenderInstaImage = styled.img`
    ${tw`w-582px h-373px`}
`

export const LoginFormContainer = styled.form`
    ${tw`w-456px p-12 flex flex-col justify-center box-border`}
    ${tw`shadow-3xl`}

    @media (max-width: 768px){
        ${tw`shadow-none items-center p-7 m-auto`}
    }
`

export const InstaLogoContainer = styled.div`
    ${tw`text-center`}
`

export const RenderInstaLogo = styled.img`
    ${tw`w-82px h-42px mt-3`}
`

export const InstaShareTitle = styled.h1`
    ${tw`text-24px font-medium m-0 mt-3 mb-6`}

    @media (max-width: 768px){
        ${tw`mb-3`}
    }
`

export const InputFieldContainer = styled.div`
    ${tw`mt-6 w-360px`}

    @media (max-width: 768px){
        ${tw`w-312px`}
    }
`

export const LabelElement = styled.label`
    ${tw`text-12px`}
`

export const InputElement = styled.input`
    ${tw`w-360px h-40px pl-4 pt-2 pb-2 box-border outline-none`}
    ${tw`border-0 rounded-none bg-light-shade-gray mt-2`}

    @media (max-width: 768px){
        ${tw`w-312px`}
    }
`

export const ButtonErrorMsgContainer = styled.div`
    ${tw`w-360px`}

    @media (max-width: 768px){
        ${tw`m-auto w-312px`}
    }
`

export const ErrorMsg = styled.p`
    ${tw`text-14px mt-2 mb-2 text-flamingo`}
`

export const LoginButton = styled.button`
    ${tw`bg-picton-blue w-360px h-40px rounded-lg text-white border-none cursor-pointer outline-none mt-6`}

    @media (max-width: 768px){
        ${tw`w-312px`}
    }
`