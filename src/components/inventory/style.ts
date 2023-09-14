import { styled } from "styled-components";

export const InventoryWrapper = styled.section`
    padding: 0 1.5rem;
    margin: 2rem 0 7rem 0;

    @media screen and (min-width: ${prop => prop.theme.breakpoints.sm}) {
        margin: 3rem 0 7rem;
    };
`;

export const InventoryList = styled.ul`
    list-style: none;
    padding: 0 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: stretch;
`;