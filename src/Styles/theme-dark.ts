import { createGlobalStyle } from "styled-components";
import BgMobile from "../images/bg-mobile-dark.jpg";
import BgDesktop from "../images/bg-desktop-dark.jpg";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input, input:focus{
    background: transparent;
    border: 0;
    outline: none;
  }
  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  :root{
    --white: hsl(235, 24%, 19%);
    --text-white: hsl(0, 0%, 100%);
    --text-gray: hsl(252, 3%, 64%);
    --very-dark-grayish-blue: hsl(0, 0%, 98%);

    --bright-blue: hsl(220, 98%, 61%);
    --check-background: linear-gradient( hsl(192, 100%, 67%) , hsl(280, 87%, 65%));
    --very-light-gray:  hsl(235, 21%, 11%);
    --very-light-grayish-blue: hsl(235, 24%, 19%);
    --light-grayish-blue: hsl(234, 39%, 85%);
    --dark-grayish-blue: hsl(236, 33%, 92%);
  }
  body{
    min-height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
    background-image: url(${BgMobile});
    background-repeat: no-repeat;
    background-size: 100% 40%;
    background-color: var(--very-light-gray);
    padding: 0 1rem;
    padding-top: 100px;

    @media screen and (min-width: 650px) {
      background-image: url(${BgDesktop});
    }
  }
`;
