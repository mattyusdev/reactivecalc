import styled from "styled-components";
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
  min-height: 45rem;
  width: 30rem;
  min-width: 200px;
  background: #fff;
  box-shadow: 1px 3px 25px 0px rgba(0, 0, 0, 0.3);
`;

export const CalcScreen = styled.header`
  min-height: 13rem;
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px 12px 20px;
  word-wrap: break-word;
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
  height: 32rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
