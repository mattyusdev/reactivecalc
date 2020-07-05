import { createGlobalStyle } from "styled-components";

export const device = {
  mobileS: `(max-width: 375px)`,
  mobileM: `(max-width: 584px)`,
  mobileL: `(max-width: 768px)`,
  minMobileL: `(min-width: 768px)`,
  tablet: `(max-width: 1024px)`,
  laptopS: `(max-width: 1280px)`,
  laptop: `(max-width: 1440px)`,
};

export const GlobalStyle = createGlobalStyle`
    html {
      @media ${device.laptop} {
            font-size: 13px;
        }
      
        @media ${device.mobileL} {
            font-size: 10px;
        }
    }`;
