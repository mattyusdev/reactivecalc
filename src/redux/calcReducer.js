import {
  NUMBER,
  RESET,
  OPERATOR,
  RESULT,
  DECIMAL,
  DELETE,
  CONTINUE_AFTER_RESULT,
} from "./calcTypes";
import { evaluate } from "mathjs";

const initialState = {
  expression: "",
  number: "0",
  isResult: false,
  decimal: false,
  operator: false,
};

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER:
      return {
        ...state,
        number:
          state.number !== "0"
            ? state.operator
              ? action.payload
              : state.number + "" + action.payload
            : action.payload,
        operator: false,
      };
    case DECIMAL:
      return {
        ...state,
        number: !state.decimal ? `${state.number}.` : state.number,
        decimal: true,
      };
    case DELETE:
      let sliced = state.number.slice(0, -1);
      let lastSliced = state.number.substr(state.number.length - 1);
      return {
        ...state,
        number:
          !state.operator && state.number !== "0"
            ? sliced.length
              ? sliced
              : "0"
            : state.number,
        decimal: lastSliced === "." ? false : state.decimal,
      };
    case OPERATOR:
      return {
        ...state,
        expression: state.operator
          ? `${state.expression.slice(0, -2)} ${action.payload}`
          : `${state.expression} ${state.number} ${action.payload}`,
        operator: true,
        decimal: false,
      };
    case RESULT:
      const result = evaluate(`${state.expression} ${state.number}`);
      return {
        ...state,
        expression: `${state.expression} ${state.number} =`,
        number: result,
        isResult: true,
        decimal: result.toString().split(".")[1] ? true : false,
      };

    case CONTINUE_AFTER_RESULT:
      return {
        ...state,
        expression: "",
        isResult: false,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
