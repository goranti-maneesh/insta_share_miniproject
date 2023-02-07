import styled from "styled-components";
import tw from "twin.macro"
import { Link } from "react-router-dom";

import {FiSearch} from 'react-icons/fi'
import {BiMenu} from 'react-icons/bi'
import {MdCancel} from 'react-icons/md'

import {HeaderLinkStylePropsType} from '../Stores/types'

export const MainHeaderContainer = styled.div`
    ${tw`border-Alto border-solid border-0 border-b`}
    @media (max-width: 768px){
        ${tw`border-0`}
    }
`

export const HeaderDesktopContainer = styled.div`
   ${tw`h-16 ml-24px mr-24px flex flex-col justify-center `}
`

export const HeaderContainer = styled.div`
    ${tw`m-auto max-w-1040px w-full flex justify-between items-center`}
`

export const LogoContainer = styled.div`
    ${tw`flex justify-center items-center`}
`

export const InstaLogo = styled.img`
    ${tw`w-59px h-30px`}
`

export const InstaShareTitle = styled.h1`
    ${tw`text-20px m-0 ml-5 leading-6 text-navbar-insta-title-color font-medium font-sans not-italic`}
`

export const RoutesContainer = styled.div`
    ${tw`flex items-center`}
`

export const SearchInputContainer = styled.div`
    ${tw`w-214px mr-6 h-7 border-navbar-search-border-search-icon-bg border border-solid rounded-3px flex`}
    @media (max-width: 768px){
        ${tw`w-280px`}
    }
`

export const SearchInput = styled.input`
    ${tw`w-180px outline-none border-0 bg-navbar-search-input-bg py-1.5 pl-3 text-navbar-search-input-text text-14px`}
    @media (max-width: 768px){
        ${tw`w-245px`}
    }
`

export const SearchIconContainer = styled.div`
    ${tw`bg-navbar-search-border-search-icon-bg w-34px flex justify-center items-center`}
`

export const SearchButton = styled.button`
    ${tw`bg-transparent outline-none cursor-pointer border-0`}
`

export const SearchIcon = styled(FiSearch)`
    ${tw`w-2.5 h-2.5`}
`

export const HeaderLink = styled(Link)<HeaderLinkStylePropsType>`
    ${tw`no-underline ml-2 mr-2 text-14px leading-18px text-mineShaft font-medium`}
    ${(props) => props.$appliedpath === true ? tw`text-picton-blue` : tw`text-mineShaft`}
    
    @media (max-width: 768px){
        ${(props) => props.$appliedtext === 'home' ? tw`ml-0` : null}
    }
`

export const LogoutButton = styled.button`
    ${tw`w-86px outline-none border-0 h-32px bg-picton-blue rounded ml-6 text-white text-12px cursor-pointer`}
    @media (max-width: 768px){
        ${tw`ml-2`}
    }
`

export const HeaderMobileContainer = styled.div`
    ${tw`m-24px transition`}
`

export const LogoAndMenuContainer = styled.div`
    ${tw`flex justify-between items-center`}
`

export const MenuButton = styled.button`
    ${tw`outline-none border-0 bg-transparent cursor-pointer`}
`

export const MenuIcon = styled(BiMenu)`
    ${tw`w-24px h-24px`}
`

export const RoutesAndSearchContainer = styled.div`
    ${tw`mt-28px`}
`

export const RoutesAndCancelContainer = styled.div`
    ${tw`flex justify-between items-center`}
`

export const MobileSearchBtn = styled.button`
    ${tw`ml-2 mr-2 text-14px leading-18px text-mineShaft font-medium outline-none border-0 bg-transparent cursor-pointer p-0`}
`

export const CancelButton = styled.button`
    ${tw`outline-none border-0 bg-transparent cursor-pointer`}
`

export const CancelIcon = styled(MdCancel)`
    ${tw`w-20px h-20px`}
`