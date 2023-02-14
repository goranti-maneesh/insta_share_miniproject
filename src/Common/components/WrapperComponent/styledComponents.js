import styled from "styled-components";
import tw from "twin.macro";

export const WrapperMainComponent = styled.div`
	${tw`bg-Alabastersolid min-h-screen pt-1px pl-10 pr-10 pb-1px`}
	@media (max-width: 768px) {
		${tw`bg-white pl-0 pr-0`}
	}
`;

export const WrapperComponentContainer = styled.div`
	${tw`max-w-1040px mx-auto`}
`;
