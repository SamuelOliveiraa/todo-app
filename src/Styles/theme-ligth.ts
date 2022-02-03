import { createGlobalStyle } from "styled-components";
import BgMobile from "../images/bg-mobile-light.jpg";
import BgDesktop from "../images/bg-desktop-light.jpg";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --bright-blue: hsl(220, 98%, 61%);
    --check-background: linear-gradient( hsl(192, 100%, 67%) , hsl(280, 87%, 65%));
    --very-light-gray: hsl(0, 0%, 98%);
    --very-light-grayish-blue: hsl(236, 33%, 92%);
    --light-grayish-blue: hsl(233, 11%, 84%);
    --dark-grayish-blue: hsl(236, 9%, 61%);
    --very-Dark-grayish-blue: hsl(235, 19%, 35%);
  }

  body{
    min-height: 100vh;
    font-family: 'Josefin Sans', sans-serif;
    background-image: url(${BgMobile});
    background-repeat: no-repeat;
    background-size: 100% 40%;
    background-color: var(--very-light-gray);

    @media screen and (min-width: 650px) {
      background-size: 100% 50%;
      background-image: url(${BgDesktop});
    }
  }
`;
