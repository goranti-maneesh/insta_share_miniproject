import styled from "styled-components";

export const NoneHeading = styled.h1`
    display: none;
    @media (max-width: 768px){
        display: flex;
    }
`

export const FlexHeading = styled.h1`
    display: flex;
    @media (min-width: 768px){
        display: none;
    }
`