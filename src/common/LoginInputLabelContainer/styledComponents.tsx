import styled from 'styled-components'
import tw from "twin.macro"

export const InputFieldContainer = styled.div`
    ${tw`mt-3 w-360px`}

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

export const ErrorMsg = styled.p`
    ${tw`text-14px h-6 m-0 text-flamingo`}
`