import { NUMBER, RESET } from "./calcTypes";

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
