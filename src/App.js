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
import { useSelector, useDispatch } from "react-redux";
import { addNumber, reset } from "./redux/calcActions";

function App() {
  const { number } = useSelector((state) => state);
  const dispatch = useDispatch();

  const clickHandler = (data) => {
    switch (data.role) {
      case "number":
        return dispatch(addNumber(data.value));
      case "reset":
        return dispatch(reset());
      default:
        break;
    }
  };

  return (
    <Background>
      <CalcFrame>
        <CalcHeader>
          <CalcExpression></CalcExpression>
          <CalcResult>{number}</CalcResult>
        </CalcHeader>
        <CalcButtonsFrame>
          {buttonsData.map((b) => (
            <CalcButton
              backgroundColor={b.backgroundColor}
              bold={b.bold}
              span={b.span}
              onClick={() => clickHandler(b)}
            >
              {b.value}
            </CalcButton>
          ))}
        </CalcButtonsFrame>
      </CalcFrame>
    </Background>
  );
}

export default App;
