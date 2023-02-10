import styled from "styled-components";
import tw from "twin.macro";

interface UlElementPropTypes {
	searchClickStatus: Boolean
}

export const SearchedResultsContainer = styled.div``;

export const SearchResultsTitle = styled.h1`
	${tw`text-mineShaft text-24px font-medium mt-12 mb-8`}
`;

export const EachPostUl = styled.ul<UlElementPropTypes>`
	${(props) => props.searchClickStatus === true ? tw`mb-16 m-0 list-none w-full bg-white px-8 pt-8 pb-1px shadow-searchUl rounded-2xl`: tw`mb-16 p-0 m-0 max-w-1040px`}
	@media (max-width: 768px) {
		${tw`p-0 pb-px rounded-none shadow-none`}
	}
`;

export const PostsLoader = styled.div`
	${tw`h-960px flex items-center justify-center`}
`;

export const NoSearchViewContainer = styled.div`
	${tw`h-80vh flex justify-center items-center flex-col`}
`;

export const NoSearchViewImage = styled.img`
	${tw`w-50`}
`;

export const NoSearchViewHeading = styled.h1`
	${tw`font-medium text-mineShaft text-32px mb-3 mt-8`}
`;

export const NoSearchViewText = styled.p`
	${tw`font-normal text-DustyGray text-20px m-0`}
`;
