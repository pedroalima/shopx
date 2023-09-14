import styled from "styled-components";


export const Span = styled.span`
    font-size: 10px;

    @media screen and (min-width: ${prop=>prop.theme.breakpoints.sm}) {
        font-size: 16px;
    }
`;