import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
}

body {
    min-height: 100dvh;
    background-color: ${({ theme }) => theme.bodyColor};
    transition: background 250ms ease-in-out;
    color: ${({ theme }) => theme.textColor};
}

a {
    text-decoration: underline;
    font-weight: bold;
    text-decoration: 2px underline ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColor};

    &:visited {
        color: ${({ theme }) => theme.textColor};
    }

    &:hover {
        color: ${({ theme }) => theme.textColor};
    }

    &:visited:hover {
        color: ${({ theme }) => theme.primaryColor};
    }
};

h3 {
    color: #717171;
}

`;

export default GlobalStyle;
