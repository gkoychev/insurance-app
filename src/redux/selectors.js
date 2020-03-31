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
