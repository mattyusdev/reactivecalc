import React from "react";
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
import CountUp from "react-countup";
import { FaGithub } from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import { calcThemes } from "./styles/theme";
import { GlobalStyle } from "./styles/responsive";

import NumberFormat from "react-number-format";
import { getDecimals } from "./functions/getDecimals";
import { buttonsDispatchLogic, setThemeLogic } from "./redux/calcMiddlewares";
import { themeFinder } from "./functions/themeFinder";

function App() {
  const { currentNumber, currentExpression, isResult, theme } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const decimals = getDecimals(currentNumber);
  const currentTheme = themeFinder(calcThemes, theme);

  const clickHandler = (data) => {
    dispatch(buttonsDispatchLogic(data));
  };

  console.log(currentNumber);

  return (
    <ThemeProvider theme={currentTheme}>
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
              onClick={() => {
                dispatch(setThemeLogic());
              }}
            >
              <currentTheme.Icon />
            </NavButton>
          </Bar>

          <CalcScreen>
            <CalcExpression>{currentExpression}</CalcExpression>
            <CalcResult>
              {!isResult ? (
                <NumberFormat
                  value={currentNumber}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={
                    currentNumber.toString().slice(currentNumber.length - 1) ===
                      "." && "."
                  }
                />
              ) : (
                <CountUp
                  end={currentNumber}
                  duration={0.5}
                  decimals={decimals < 5 ? decimals : 5}
                  separator={","}
                  suffix={decimals > 5 ? "..." : null}
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
