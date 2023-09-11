import { styled } from "styled-components";

export const CardWrapper = styled.li`
    background: ${prop => prop.theme.colors.secondary};
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    @media screen and (min-width: ${prop => prop.theme.breakpoints.sm}) {
        width: 300px;
    }
`;

export const ImageWrapper = styled.div`
    border: 2px solid ${prop => prop.theme.colors.tertiary};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;

    @media screen and (min-width: ${prop => prop.theme.breakpoints.sm}) {
        height: 240px;
    }
`;

export const ImageInventory = styled.img`
    width: 100%;
    height: 100%;
`;

export const TitleWrapper = styled.h2`
    color: ${prop => prop.theme.colors.tertiary};
    font-size: ${prop => prop.theme.fontSize.tertiary};
`;

export const PriceWrapper = styled.h3`
    color: ${prop => prop.theme.colors.quaternary};
    font-size: ${prop => prop.theme.fontSize.secondary};
`;

export const Button = styled.button`
    color: ${prop => prop.theme.colors.tertiary};
    font-size: ${prop => prop.theme.fontSize.primary};
    background: ${prop => prop.theme.colors.secondary};
    border: 2px solid ${prop => prop.theme.colors.tertiary};
    border-radius: 0.2rem;
    font-weight: 700;
    padding: 0.1rem 0.5rem;

    &:active {
        color: ${prop => prop.theme.colors.secondary};
        background: ${prop => prop.theme.colors.tertiary};
    }
`;


