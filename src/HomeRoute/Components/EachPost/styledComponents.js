import styled from "styled-components";
import tw from "twin.macro";
import {AiOutlineHeart} from 'react-icons/ai'
import { BsFillHeartFill, BsFillShareFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

export const EachPostli = styled.li`
	${tw`bg-white list-none w-1040px p-0 mb-8`}
`;

export const UserDetails = styled.div`
	${tw`h-60px px-6 flex items-center border-Alto border-solid border-DEFAULT`}
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

export const UserName = styled.p`
	${tw`text-14px text-mineShaft ml-4`}
`;

export const PostImageConstainer = styled.div`
	${tw`h-614px`}
`;

export const PostImage = styled.img`
	${tw`w-1040px h-614px`}
`;

export const PostDetailsSection = styled.div`
	${tw`border-Alto border-solid border-DEFAULT pl-6 pt-18px pb-4`}
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
	${tw`font-medium text-mineShaft text-14px m-0 mt-18px`}
`;

export const Caption = styled.p`
	${tw`font-normal text-mineShaft text-14px m-0 mt-2`}
`;

export const CommentsUl = styled.ul`
	${tw`p-0 list-none`}
`;

export const CommentLi = styled.li`
	${tw`mt-2 flex`}
`;

export const CommentedUser = styled.p`
	${tw`font-medium text-mineShaft text-14px m-0`}
`;

export const Comment = styled.p`
	${tw`font-normal text-mineShaft text-14px m-0`}
`;

export const CreatedAt = styled.p`
	${tw`font-normal text-DustyGray text-14px mt-2`}
`;
