import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
    background: ${prop => prop.theme.colors.tertiary};
    color: ${prop => prop.theme.colors.secondary};
    padding: 1.5rem 3rem;
`;