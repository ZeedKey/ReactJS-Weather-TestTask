import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url("./Inter-Regular.ttf");
  }
  @font-face {
    font-family: "Inter-Bold";
    src: url("./Inter-ExtraBold.ttf");
  }
  
  body {
    margin: 0;
    font-family: "Inter", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .font-bold{
    font-family: 'Inter-Bold';
  }
`;

export default GlobalStyle;