import styled from "styled-components";
import tw from "twin.macro";

export const FailureContainer = styled.div`
	${tw`h-866px flex items-center justify-center flex-col`}
`;

export const FailureImage = styled.img`
	${tw`w-44px h-38px`}
`;

export const FailureText = styled.h1`
	${tw`font-normal text-mineShaft text-16px mt-22px mb-16px`}
`;

export const TryAgainButton = styled.button`
	${tw`w-102px h-32px bg-picton-blue rounded-xl text-white text-12px px-6 py-2 border-0 cursor-pointer`}
`;
