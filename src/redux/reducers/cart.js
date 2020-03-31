import { v1 as uuid } from "uuid";
import { createReducer } from "../../utils";

// Actions
export const ADD = "my-app/cart/ADD";
export const REMOVE = "my-app/cart/REMOVE";

// Action Creators
export function addModuleToCart(item) {
  return { type: ADD, item };
}

export function removeModuleFromCart(id) {
  return { type: REMOVE, id };
}

// Initial State
export const initialState = {
  items: []
};

// Reducer
const reducer = createReducer(initialState, {
  [ADD]: (state, { item }) => ({
    ...state,
    items: [...state.items, { ...item, id: uuid() }]
  }),

  [REMOVE]: (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id)
  })
});

export default reducer;
