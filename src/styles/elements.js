import styled, { css } from "styled-components";
import { device } from "./responsive";

export const Background = styled.div`
  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.gradientOne};
      background: linear-gradient(
        90deg,
        ${props.theme.gradientOne} 0%,
        ${props.theme.gradientTwo} 100%
      );
    `}
  ${(props) =>
    props.theme.name === "mattyus" &&
    css`
      @media ${device.minMobileL} {
        background: url("/mattyusbackground_noeffects.svg") no-repeat center
          fixed;
      }
    `}
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CalcFrame = styled.div`
  min-height: 45rem;
  width: 30rem;
  background: #fff;
  box-shadow: 1px 3px 25px 0px rgba(0, 0, 0, 0.3);

  @media ${device.mobileL} {
    min-height: 100vh;
    width: 100vw;
  }
`;

export const Bar = styled.nav`
  ${(props) =>
    props.theme &&
    css`
      background: ${props.theme.quaternary};
    `}

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobileL} {
    height: 5vh;
  }
`;

export const CalcScreen = styled.header`
  ${(props) =>
    props.theme &&
    css`
      background: ${props.theme.screen};
    `}

  min-height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  padding: 15px 20px 12px 20px;

  @media ${device.mobileL} {
    min-height: 20vh;
  }
`;

export const CalcExpression = styled.h3`
  ${(props) =>
    props.theme &&
    css`
      color: ${props.theme.primary};
    `}

  word-wrap: break-word;
  text-align: right;
  font-size: 1.5rem;
`;

export const CalcResult = styled.h1`
  font-size: 5rem;
  text-align: right;
  font-weight: 200;

  ${(props) =>
    props.theme &&
    css`
      color: ${props.theme.screenText};
    `}
`;

export const CalcButtonsFrame = styled.div`
  height: 32rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media ${device.mobileL} {
    height: 75vh;
  }
`;
