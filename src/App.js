import React, { useState } from "react";
import "./App.css";
import {
  Background,
  CalcFrame,
  CalcScreen,
  CalcExpression,
  CalcResult,
  CalcButtonsFrame,
  Bar,
} from "./styles/elements";
import { buttonsData } from "./data/buttonsData";
import { CalcButton, NavButton } from "./styles/buttonElements";
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
import { FaGithub } from "react-icons/fa";
import { MdBrightnessLow, MdBrightness4 } from "react-icons/md";
import { TiAdjustBrightness } from "react-icons/ti";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/theme";
import { GlobalStyle } from "./styles/responsive";

function App() {
  const [theme, setTheme] = useState("dark");
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
        if (data.value === "-" && number === "0") {
          return dispatch(addNumber("-"));
        } else {
          return dispatch(chooseOperator(data.value));
        }
      case "decimal":
        return dispatch(addDecimal());
      case "delete":
        return dispatch(deleteEntry());
      case "result":
        if (number !== "-") {
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
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Background>
        <CalcFrame>
          <Bar>
            <NavButton
              component="a"
              href="https://github.com/mattyusdev/reactivecalc"
              target="_blank"
            >
              <FaGithub />
            </NavButton>
            <NavButton
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "dark" ? <MdBrightness4 /> : <TiAdjustBrightness />}
            </NavButton>
          </Bar>

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
                textColor={b.textColor}
                bold={b.bold}
                span={b.span}
                onClick={() => clickHandler(b)}
                key={b.value}
              >
                {b.value}
              </CalcButton>
            ))}
          </CalcButtonsFrame>
        </CalcFrame>
      </Background>
    </ThemeProvider>
  );
}

export default App;
