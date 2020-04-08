import { createSelector } from "reselect";
import { calculatePrice } from "../utils/price";

const getCartItems = state => state.cart.items;
const getModules = state => state.app.modules;

//todo: add tests

export const getCartDetails = createSelector(
  [getCartItems, getModules],
  (cartItems, modules) =>
    cartItems.map(item => {
      const foundModule = modules.find(mod => mod.id === item.moduleId);
      return {
        ...foundModule,
        ...item
      };
    })
);

export const getCartTotal = createSelector(
  [getCartItems, getModules],
  (cartItems, modules) =>
    cartItems.reduce((sum, item) => {
      const foundModule = modules.find(mod => mod.id === item.moduleId);
      const price = calculatePrice(item.currentCoverage, foundModule.risk);
      sum += price;
      return sum;
    }, 0)
);
