import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

export const EachStoryLi = styled.li`
	${tw`w-70px list-none text-center p-0 border-2 border-black	flex justify-center m-auto`}
`;

export const StoryLink = styled(Link)`
	${tw`text-mineShaft no-underline`}
`;

export const StoryImage = styled.img`
	${tw`w-70px h-70px rounded-35px m-auto`}
	@media (max-width: 768px){
		${tw`w-50px h-50px`}
	}
`;

export const StoryUserName = styled.p`
	${tw`text-14px m-0 mt-1 text-mineShaft font-normal`}
`;
