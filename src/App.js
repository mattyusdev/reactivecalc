import React from "react";
import "./App.css";
import {
  Background,
  CalcFrame,
  CalcScreen,
  CalcExpression,
  CalcResult,
  CalcButtonsFrame,
} from "./styles/elements";
import { buttonsData } from "./data/buttonsData";
import { CalcButton } from "./styles/buttonElements";
import { useSelector, useDispatch } from "react-redux";
import {
  addNumber,
  reset,
  chooseOperator,
  result,
  addDecimal,
  deleteEntry,
} from "./redux/calcActions";
import CountUp from "react-countup";

function App() {
  const { number, expression, isResult } = useSelector((state) => state);
  const dispatch = useDispatch();

  //CLICK

  const clickHandler = (data) => {
    if (isResult) {
      dispatch(reset());
    }

    switch (data.role) {
      case "number":
        return dispatch(addNumber(data.value));
      case "operator":
        //for negative number in the beginning
        if (data.value === "-" && number === 0) {
          return dispatch(addNumber("-"));
        } else {
          return dispatch(chooseOperator(data.value));
        }
      case "decimal":
        return dispatch(addDecimal());
      case "delete":
        return dispatch(deleteEntry());
      case "result":
        if (number != "-") {
          return dispatch(result());
        }
      case "reset":
        return dispatch(reset());
      default:
        break;
    }
  };

  //DECIMALS

  let longerNumber = false;

  const getDecimal = (num) => {
    if (Math.floor(num) === num) return 0;
    let decimals = num.toString().split(".")[1].length;
    if (decimals < 6) {
      longerNumber = false;
      return decimals;
    } else {
      longerNumber = true;
      return 5;
    }
  };

  return (
    <Background>
      <CalcFrame>
        <CalcScreen>
          <CalcExpression>{expression}</CalcExpression>
          <CalcResult>
            {!isResult ? (
              number
            ) : (
              <CountUp
                end={number}
                duration={0.5}
                decimals={getDecimal(number)}
                separator={","}
                suffix={longerNumber ? "..." : null}
              />
            )}
          </CalcResult>
        </CalcScreen>
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
