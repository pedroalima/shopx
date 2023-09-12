import styled from "styled-components";

export const CartWrapper = styled.section`
    padding: 1rem 2rem;
    background: ${prop => prop.theme.colors.tertiary};
    color: ${prop => prop.theme.colors.secondary};
    position: fixed;
    bottom: 0;
    width: 100%;
    min-height: 10%;
`;

export const CartItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CartItemsQuantityWrapper = styled.div`
    display: flex;
    justify-content: start;
    gap: 0.5rem;
    min-width: 130px;
`;

export const TotalPrice = styled.h2`
    font-size: ${prop => prop.theme.fontSize.tertiary};
    display: flex;
    justify-content: space-between;
`;

