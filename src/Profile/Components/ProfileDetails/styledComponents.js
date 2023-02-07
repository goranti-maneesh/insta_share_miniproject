import {FaCamera} from 'react-icons/fa'

import styled from "styled-components";
import tw from "twin.macro"

export const ProfileImageAndStoriesContainer = styled.div`
    ${tw`ml-24px mr-24px`}
`

export const ProfileImageDetailsContainer = styled.div`
    ${tw`flex font-sans mt-33px `}
    @media (max-width: 768px){
        ${tw`mt-0`}
    }
`

export const ProfileImage = styled.img`
    ${tw`w-180px h-180px rounded-90px mr-64px mb-64px`}
    @media (max-width: 768px){
        ${tw`hidden`}
    }
`

export const ProfileDetailsContainer = styled.div``

export const UserName = styled.h1`
    ${tw`text-mineShaft leading-8 font-light text-32px mb-24px mt-0`}
`

export const UserStats = styled.div`
    ${tw`flex`}
    @media (max-width: 768px){
        ${tw`justify-center items-center`}
    }
`

export const MobileProfileImage = styled.img`
    ${tw`hidden`}
    @media (max-width: 768px){
        ${tw`flex w-96px h-96px rounded-90px mr-24px`}
    }
`

export const StatContainer = styled.div`
    ${tw`mr-48px leading-6 mb-16px text-16px`}
    @media (max-width: 768px){
        ${tw`flex flex-col text-center mr-24px`}
    }
`

export const StatCount = styled.span`
    ${tw`font-medium`}
`

export const StatName = styled.span`
    ${tw`mt-0 mb-0 text-mineShaft`}
`

export const UserDescriptionContainer = styled.div`
    @media (max-width: 768px){
        ${tw`mt-12px mb-24px`}
    }
`

export const UserId = styled.p`
    ${tw`mt-0 mb-8px text-16px font-medium text-mineShaft leading-6`}
    @media (max-width: 768px){
        ${tw`mb-1`}
    }
`

export const Description = styled.p`
    ${tw`text-mineShaft text-16px font-normal leading-6 m-0`}
    @media (max-width: 768px){
        ${tw`text-14px`}
    }
`

export const StoriesUlElement = styled.ul`
    ${tw`mt-0 p-0 list-none flex`}
`

export const EachStoryLiElement = styled.li``

export const EachStoryImageContainer = styled.div`
    ${tw`w-86px h-86px p-3px rounded-90px border border-Alto border-solid mr-32px`}
    @media (max-height: 768px){
        ${tw`w-64px h-64px`}
    }
`

export const EachStoryImgElement = styled.img`
    ${tw`w-78px h-78px rounded-90px`}
    @media (max-height: 768px){
        ${tw`w-56px h-56px`}
    }
`

export const HorizontalLine = styled.hr`    
    ${tw`border-FrenchGray border-solid opacity-30 mt-32px mb-32px`}
    @media (max-width: 768px){
        ${tw`mt-24px mb-24px`}
    }
`

export const PostsAndVectorImageContainer = styled.div`
    ${tw`flex items-center mb-24px ml-24px`}
    @media (max-width: 768px){
        ${tw`mb-12px`}
    }
`

export const VectorImage = styled.img`
    ${tw`w-17px h-17px mr-16px`}
`

export const PostsTitle = styled.h1`
    ${tw`m-0 text-24px font-medium leading-8 text-mineShaft`}
    @media (max-width: 768px){
        ${tw`leading-6 `}
    }
`

export const PostsUlElement = styled.ul`
    ${tw`mt-0 p-0 list-none flex w-full justify-between flex-wrap`}
`

export const EachPostLiElement = styled.li`
    ${tw`w-31`}
    @media (max-width: 768px){
        // ${tw`w-118px`}
    }
`

export const EachPostImgElement = styled.img`
    ${tw`w-full`}
`

export const EmptyPostsContainer = styled.div`
    ${tw`h-500px flex flex-col justify-center items-center`}
`

export const EmtptyPostsImageContainer = styled.div`
    ${tw`w-86px h-86px rounded-90px border border-solid border-mineShaft flex justify-center items-center`}
`

export const EmptyPostsImage = styled(FaCamera)`
    ${tw`w-48px h-45px`}
`

export const EmptyPostsHeading = styled.h1`
    ${tw`m-0 mt-16px text-mineShaft font-light text-32px`}
`