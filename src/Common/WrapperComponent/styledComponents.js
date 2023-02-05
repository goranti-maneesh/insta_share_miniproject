import styled from "styled-components";
import tw from "twin.macro";

export const WrapperMainComponent = styled.div`
	${tw`bg-Alabastersolid pt-1px`}
	@media (max-width: 768px){
		${tw`bg-white`}
	}
`;

export const WrapperComponentContainer = styled.div`
	${tw`max-w-1040px mx-auto`}
`;
