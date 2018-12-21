import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.background};
        font-family: ${props => props.theme.fonts.sans};
    }
`;

export default GlobalStyles;
