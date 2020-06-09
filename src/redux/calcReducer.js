import { NUMBER, RESET, OPERATOR } from "./calcTypes";

const initialState = {
  expression: "",
  result: 0,
  number: 0,
};

export const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUMBER:
      return {
        ...state,
        number:
          state.number !== 0
            ? state.number + "" + action.payload
            : action.payload,
      };
    case OPERATOR:
      return {
        ...state,
        expression: `${state.number} ${action.payload}`,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
