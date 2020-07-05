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

export const addNumber = (number) => {
  return {
    type: SET_NUMBER,
    payload: number,
  };
};

export const addDecimal = () => {
  return {
    type: ADD_DECIMAL,
  };
};

export const deleteEntry = () => {
  return {
    type: DELETE_ENTRY,
  };
};

export const chooseOperator = (operator) => {
  return {
    type: SET_OPERATOR,
    payload: operator,
  };
};

export const result = () => {
  return {
    type: GET_RESULT,
  };
};

export const reset = () => {
  return {
    type: RESET_CALCULATOR,
  };
};

export const continueAfterResult = () => {
  return {
    type: CONTINUE_AFTER_RESULT,
  };
};

export const setTheme = (themeName) => {
  return {
    type: SET_THEME,
    payload: themeName,
  };
};
