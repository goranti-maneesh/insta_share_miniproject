import styled from "styled-components";
import tw from "twin.macro";

export const SearchedResultsContainer = styled.div``

export const SearchResultsTitle = styled.h1`
    ${tw`text-mineShaft text-24px font-medium mt-12 mb-8`}
`

export const EachPostUl = styled.ul`
    ${tw`m-0 list-none w-1040px bg-white mb-16 px-8 pt-8 pb-1px shadow-searchUl rounded-2xl`}
`

export const PostsLoader = styled.div`
    ${tw`h-960px flex items-center justify-center`}
`