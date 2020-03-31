import isNumber from "lodash/isNumber";

export const formatPercent = val => {
  return isNumber(+val) ? +(+val.toFixed(2)) + "%" : "";
};

export const formatCurrency = (val, currency = "USD") => {
  return val.toLocaleString("en-US", { style: "currency", currency });
};

export const createReducer = (initialState, handlers) =>
  function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
