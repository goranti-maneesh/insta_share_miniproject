import styled from "styled-components";
import tw from "twin.macro";

export const FailureContainer = styled.div`
    ${tw`h-960px flex items-center justify-center flex-col`}
`

export const FailureImage = styled.img`
    ${tw`w-560px h-274px`}
`

export const FailureText = styled.h1`
    ${tw`font-normal text-mineShaft text-32px leading-48px mt-12 mb-8`}
`

export const TryAgainButton = styled.button`
    ${tw`w-127px h-48px bg-picton-blue rounded-xl text-white text-14px px-8 py-3 border-0 cursor-pointer`}
`