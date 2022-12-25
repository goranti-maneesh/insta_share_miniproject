import styled from "styled-components";
import tw from "twin.macro"

export const EachPostUl = styled.ul`
    ${tw`p-0 m-0 max-w-1040px mb-16`}
    @media (max-width: 768px){
		${tw`border-Alto border-solid border-DEFAULT`}
	}
`

export const PostsLoader = styled.div`
    ${tw`h-960px flex items-center justify-center`}
`
