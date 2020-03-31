import isNumber from "lodash/isNumber";

export const formatPercent = val => {
  return isNumber(+val) ? +(+val.toFixed(2)) + "%" : "";
};

export const formatCurrency = (val, currency = "USD") => {
  return val.toLocaleString("en-US", { style: "currency", currency });
};
