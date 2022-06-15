import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`  
* {
  font-family: Lato, sans-serif;
  color: inherit;
  box-sizing: border-box;
}

html {scroll-behavior: smooth}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white}
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 0;
  padding: 0;
}
`;
