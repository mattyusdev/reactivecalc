import { NUMBER, RESET, OPERATOR, RESULT, DECIMAL, DELETE } from "./calcTypes";

export const addNumber = (number) => {
  return {
    type: NUMBER,
    payload: number,
  };
};

export const addDecimal = () => {
  return {
    type: DECIMAL,
  };
};

export const deleteEntry = () => {
  return {
    type: DELETE,
  };
};

export const chooseOperator = (operator) => {
  return {
    type: OPERATOR,
    payload: operator,
  };
};

export const result = () => {
  return {
    type: RESULT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
