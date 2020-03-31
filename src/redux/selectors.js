import { createSelector } from "reselect";

const getCartItems = state => state.cart.items;
const getModules = state => state.app.modules;

export const getCartDetails = createSelector(
  [getCartItems, getModules],
  (cartItems, modules) => {
    return cartItems.map(item => {
      const foundModule = modules.find(mod => mod.id === item.moduleId);
      return {
        ...foundModule,
        ...item
      };
    });
  }
);

export const getCartTotal = createSelector(
  [getCartItems, getModules],
  (cartItems, modules) => {
    return cartItems.reduce((sum, item) => {
      const foundModule = modules.find(mod => mod.id === item.moduleId);
      const price = foundModule.risk * item.currentCoverage;
      sum += price;
      return sum;
    }, 0);
  }
);
