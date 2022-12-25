import styled from "styled-components";
import tw from "twin.macro";

export const SearchedResultsContainer = styled.div``

export const SearchResultsTitle = styled.h1`
    ${tw`text-mineShaft text-24px font-medium mt-12 mb-8`}
`

export const EachPostUl = styled.ul`
    ${tw`m-0 list-none w-full bg-white mb-16 px-8 pt-8 pb-1px shadow-searchUl rounded-2xl`}
    @media (max-width: 768px){
        ${tw`p-0 pb-px rounded-none shadow-none`}
    }
`

export const PostsLoader = styled.div`
    ${tw`h-960px flex items-center justify-center`}
`

export const NoSearchViewContainer = styled.div`
    ${tw`h-80vh flex justify-center items-center flex-col`}
`

export const NoSearchViewImage = styled.img`
    ${tw`w-500px h-409px`}
`

export const NoSearchViewHeading = styled.h1`
    ${tw`font-medium text-mineShaft text-32px mb-3 mt-8`}
`

export const NoSearchViewText = styled.p`
    ${tw`font-normal text-DustyGray text-20px m-0`}
`