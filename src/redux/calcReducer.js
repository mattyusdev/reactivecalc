import {
  SET_NUMBER,
  RESET_CALCULATOR,
  SET_OPERATOR,
  GET_RESULT,
  ADD_DECIMAL,
  DELETE_ENTRY,
  CONTINUE_AFTER_RESULT,
  SET_THEME,
} from "./calcTypes";
import { evaluate } from "mathjs";

const initialState = {
  currentExpression: "",
  currentNumber: "0",
  isResult: false,
  isDecimal: false,
  isOperatorSelected: false,
  theme: "dark",
};

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      return {
        ...state,
        currentNumber:
          state.currentNumber !== "0" && state.currentNumber !== "-"
            ? state.isOperatorSelected
              ? action.payload
              : state.currentNumber + "" + action.payload
            : state.currentNumber !== "-"
            ? action.payload
            : state.currentNumber + "" + action.payload,
        isOperatorSelected: action.payload === "-",
      };

    case ADD_DECIMAL:
      return {
        ...state,
        currentNumber: !state.isDecimal
          ? `${state.currentNumber}.`
          : state.currentNumber,
        isDecimal: true,
      };

    case DELETE_ENTRY:
      const stringNumber = state.currentNumber.toString();
      const sliced = stringNumber.slice(0, -1);
      const lastSliced = stringNumber.substr(state.currentNumber.length - 1);
      return {
        ...state,
        currentNumber:
          !state.isOperatorSelected && state.currentNumber !== "0"
            ? sliced.length
              ? sliced
              : "0"
            : state.currentNumber,
        isDecimal: lastSliced === "." ? false : state.isDecimal,
      };

    case SET_OPERATOR:
      return {
        ...state,
        currentExpression: state.isOperatorSelected
          ? `${state.currentExpression.slice(0, -2)} ${action.payload}`
          : `${state.currentExpression} ${state.currentNumber} ${action.payload}`,
        isOperatorSelected: true,
        isDecimal: false,
      };

    case GET_RESULT:
      const result = evaluate(
        `${state.currentExpression} ${state.currentNumber}`
      );
      return {
        ...state,
        currentExpression: `${state.currentExpression} ${state.currentNumber} =`,
        currentNumber: result,
        isResult: true,
        isDecimal: result.toString().split(".")[1] ? true : false,
      };

    case CONTINUE_AFTER_RESULT:
      return {
        ...state,
        currentExpression: "",
        isResult: false,
      };

    case RESET_CALCULATOR:
      return {
        ...initialState,
        theme: state.theme,
      };

    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
