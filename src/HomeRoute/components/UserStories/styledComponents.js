import styled from "styled-components";
import tw from "twin.macro";

export const UserStoriesMainContainer = styled.div``;

export const USerStoriesContainer = styled.div`
	${tw`pb-0 mt-12 mb-12`}
	@media (max-width: 768px) {
		${tw`mt-0 mb-6`}
	}
`;

export const UserStoriesUl = styled.ul`
	${tw`w-full p-0 max-w-980px mt-0 mb-0 ml-auto mr-auto`}
`;

export const StoryLoader = styled.div`
	${tw`h-194px flex items-center justify-center`}
`;
