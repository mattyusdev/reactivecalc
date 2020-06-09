import styled, { css } from "styled-components";
import { colors } from "./palette";

export const Background = styled.div`
  background: linear-gradient(
    90deg,
    ${colors.gradientOne} 0%,
    ${colors.gradientTwo} 100%
  );
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalcFrame = styled.div`
  height: 75vh;
  width: 50vh;
  min-width: 200px;
  background: #fff;
  box-shadow: 1px 3px 25px 0px rgba(0, 0, 0, 0.3);
`;

export const CalcHeader = styled.header`
  height: 25%;
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px 12px 20px;
  overflow: auto;
`;

export const CalcExpression = styled.h3`
  word-wrap: break-word;
  text-align: right;
  font-size: 1.5rem;

  color: ${colors.primary};
`;

export const CalcResult = styled.h1`
  font-size: 5rem;
  text-align: right;
  font-weight: normal;

  color: #fff;
`;

export const CalcButtonsFrame = styled.div`
  height: 75%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
