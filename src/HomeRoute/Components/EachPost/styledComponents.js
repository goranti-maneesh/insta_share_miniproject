import styled from "styled-components";
import tw from "twin.macro";
import {AiOutlineHeart} from 'react-icons/ai'
import { BsFillHeartFill, BsFillShareFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import {Link} from 'react-router-dom'

export const EachPostli = styled.li`
	${tw`bg-white list-none w-full p-0 mb-8`}
	@media (max-width: 768px){
		${tw`mb-0`}
	}
`;

export const UserDetails = styled.div`
	${tw`h-60px px-6 flex items-center border-Alto border-solid border-DEFAULT`}
	@media (max-width: 768px){
		${tw`border-none h-56px`}
	}
`;

export const ProfilePicBGContainer = styled.div`
	${tw`bg-gradient-to-t from-purple-600 via-pink-600 to-blue-600 w-8 h-8 flex justify-center items-center rounded-32px`}
`

export const ProfilePicContainer = styled.div`
	${tw`w-30px h-30px rounded-30px flex justify-center items-center bg-white`}
`

export const ProfilePic = styled.img`
	${tw`w-7 h-7 bg-white rounded-28px`}
`;

export const UserName = styled(Link)`
	${tw`text-14px text-mineShaft ml-4 no-underline`}
`;

export const PostImageConstainer = styled.div`
	${tw`h-614px`}
	@media (max-width: 768px){
		${tw`h-375px`}
	}
`;

export const PostImage = styled.img`
	${tw`w-full h-614px`}
	@media (max-width: 768px){
		${tw`h-375px`}
	}
`;

export const PostDetailsSection = styled.div`
	${tw`border-Alto border-solid border-DEFAULT pl-6 pt-18px pb-4`}
	@media (max-width: 768px){
		${tw`border-none pb-3`}
	}
`;

export const LoveCommentShareContainer = styled.div`
	${tw`w-104px flex justify-between`}
`;

export const IconBtton = styled.button`
	${tw`bg-white border-0 cursor-pointer w-6 h-6 p-0`}
`;

export const LoveIconFill = styled(BsFillHeartFill)`
	${tw`w-6 h-6`}
`;

export const LoveIconOutline = styled(AiOutlineHeart)`
	${tw`text-Fiord w-6 h-6`}
`

export const CommentIcon = styled(FaRegComment)`
	${tw`text-Fiord w-6 h-6`}
`;

export const ShareIcon = styled(BsFillShareFill)`
	${tw`text-Fiord w-6 h-6`}
`;

export const LikesAndCommentsSection = styled.div`
	${tw``}
`;

export const LikesCount = styled.p`
	${tw`font-medium text-mineShaft text-14px m-0 mt-16px leading-18px`}
	@media (max-width: 768px){
		${tw`mt-12px text-12px leading-4`}
	}
`;

export const Caption = styled.p`
	${tw`font-normal text-mineShaft text-14px m-0 mt-2 leading-18px`}
	@media (max-width: 768px){
		${tw`mt-1 text-12px leading-4`}
	}
`;

export const CommentsUl = styled.ul`
	${tw`p-0 list-none`}
`;

export const CommentLi = styled.li`
	${tw`mt-2 flex leading-18px`}
	@media (max-width: 768px){
		${tw`mt-1 text-12px leading-4`}
	}
`;

export const CommentedUser = styled.p`
	${tw`font-medium text-mineShaft text-14px m-0 leading-18px`}
	@media (max-width: 768px){
		${tw`text-12px leading-4`}
	}
`;

export const CommentedUserName = styled(Link)`
	${tw`font-medium text-mineShaft text-14px no-underline leading-18px`}
	@media (max-width: 768px){
		${tw`text-12px leading-4`}
	}
`

export const Comment = styled.span`
	${tw`font-normal text-mineShaft text-14px m-0`}
	@media (max-width: 768px){
		${tw`text-12px leading-4`}
	}
`;

export const CreatedAt = styled.p`
	${tw`font-normal text-DustyGray text-14px mt-2 mb-0`}
	@media (max-width: 768px){
		${tw`text-10px mt-1 leading-4`}
	}
`;
