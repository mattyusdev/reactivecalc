import React from "react";
import "./App.css";
import {
  Background,
  CalcFrame,
  CalcHeader,
  CalcExpression,
  CalcResult,
  CalcButtonsFrame,
} from "./styles/elements";
import { buttonsData } from "./data/buttonsData";
import { CalcButton } from "./styles/buttonElements";

function App() {
  return (
    <Background>
      <CalcFrame>
        <CalcHeader>
          <CalcExpression>15 x 4 333333333333333333333333</CalcExpression>
          <CalcResult>102</CalcResult>
        </CalcHeader>
        <CalcButtonsFrame>
          {buttonsData.map((b) => (
            <CalcButton
              backgroundColor={b.backgroundColor}
              bold={b.bold}
              span={b.span}
            >
              {b.text}
            </CalcButton>
          ))}
        </CalcButtonsFrame>
      </CalcFrame>
    </Background>
  );
}

export default App;
