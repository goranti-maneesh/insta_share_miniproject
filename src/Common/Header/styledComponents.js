import styled from "styled-components";
import tw from "twin.macro"
import { Link } from "react-router-dom";

import {FiSearch} from 'react-icons/fi'


export const HeaderMainContainer = styled.div`
   ${tw`h-16 flex flex-col justify-center`}
`

export const HeaderContainer = styled.div`
    ${tw`m-auto w-1040px flex justify-between items-center`}
`

export const LogoContainer = styled.div`
    ${tw`flex`}
`

export const InstaLogo = styled.img`
    ${tw`w-59px h-30px`}
`

export const InstaShareTitle = styled.h1`
    ${tw`text-20px ml-5 leading-6 text-navbar-insta-title-color font-medium`}
`

export const RoutesContainer = styled.div`
    ${tw`flex`}
`

export const SearchInputContainer = styled.div`
    ${`w-214px mr-8 h-7 border-navbar-search-border-search-icon-bg border-solid rounded-3px`}
`

export const SearchInput = styled.input`
    ${tw`outline-none border-0 bg-navbar-search-input-bg py-1.5 pl-3 text-navbar-search-input-text text-14px`}
`

export const SearchIconContainer = styled.div`
    ${tw`bg-navbar-search-border-search-icon-bg pt-3 pr-2 pb-3 pl-3 `}
`

export const SearchIcon = styled(FiSearch)`
    ${tw`w-2.5 h-2.5`}
`

export const HeaderLink = styled(Link)`
    ${tw`text-14px leading-18px text-navbar-link-color font-medium`}
`

export const LogoutButton = styled.button`
    ${tw`w-86px outline-none border-0 h-32px bg-picton-blue rounded ml-8 text-white text-12px`}
`

export const MainHeaderContainer = styled.div``

// export const HeadingContainer = styled.div``

// export const HeadingContainer = styled.div``

// export const HeadingContainer = styled.div``

// export const HeadingContainer = styled.div``

// export const HeadingContainer = styled.div``
