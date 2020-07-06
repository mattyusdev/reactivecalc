import {
  continueAfterResult,
  addNumber,
  chooseOperator,
  addDecimal,
  deleteEntry,
  result,
  reset,
  setTheme,
} from "./calcActions";
import { calcThemes } from "../styles/theme";

export const buttonsDispatchLogic = (data) => {
  return (dispatch, getState) => {
    const { currentNumber, isOperatorSelected, isResult } = getState();

    //continue after pressing result
    if (isResult && data.role === "operator") {
      dispatch(continueAfterResult());
    }

    //reset after result and choosing number
    if (isResult && data.role !== "operator") {
      dispatch(reset());
    }

    switch (data.role) {
      case "number":
        dispatch(addNumber(data.value));
        break;
      case "operator":
        //for negative number in the beginning
        if (data.value === "-" && currentNumber === "0") {
          dispatch(addNumber("-"));
        } else {
          if (currentNumber !== "-") {
            dispatch(chooseOperator(data.value));
          }
        }
        break;
      case "decimal":
        //add decimal without pressing 0
        if (isOperatorSelected || currentNumber === "-") {
          dispatch(addNumber("0."));
        } else {
          dispatch(addDecimal());
        }
        break;
      case "delete":
        dispatch(deleteEntry());
        break;
      case "result":
        //prevent result without number (negative)
        if (currentNumber !== "-") {
          dispatch(result());
        }
        break;
      case "reset":
        dispatch(reset());
        break;
      default:
        break;
    }
  };
};

export const setThemeLogic = () => {
  return (dispatch, getState) => {
    const { theme } = getState();

    const themeNames = calcThemes.map((t) => t.name);

    let i = themeNames.indexOf(theme);

    if (i !== themeNames.length - 1) {
      dispatch(setTheme(themeNames[i + 1]));
    } else {
      dispatch(setTheme(themeNames[0]));
    }
  };
};
