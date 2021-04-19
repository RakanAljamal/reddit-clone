import styled,{createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  html,
  body {
    background: ${props=> props.dark ? '#030303' :'#DAE0E6'};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

`

const HomeStyled = styled.body`
  html,
  body {
    background: #030303;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }



`;

export {GlobalStyle,HomeStyled}