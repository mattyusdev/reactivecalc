import { NUMBER, RESET, OPERATOR } from "./calcTypes";

export const addNumber = (number) => {
  return {
    type: NUMBER,
    payload: number,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const chooseOperator = (operator) => {
  return {
    type: OPERATOR,
    payload: operator,
  };
};
