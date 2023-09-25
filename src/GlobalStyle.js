import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    background-color: ${({ theme }) => theme.bodyColor};
    transition: background 250ms ease-in-out;
    color: ${({ theme }) => theme.textColor};
}
`;

export default GlobalStyle;
