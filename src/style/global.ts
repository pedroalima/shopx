import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${prop => prop.theme.fonts.primary};
    }

    body {
        width: 100%;
        height: 100%;
        background: ${prop => prop.theme.colors.primary};
    }
`;