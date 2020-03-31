import { createReducer } from "../../utils";

// Actions
const ADD = "my-app/cart/ADD";
const REMOVE = "my-app/cart/REMOVE";

// Action Creators
export function addModuleToCart(item) {
  return { type: ADD, item };
}

export function removeModuleToCart(id) {
  return { type: REMOVE, id };
}

// Initial State
const initialState = {
  items: []
};

// Reducer
const reducer = createReducer(initialState, {
  [ADD]: (state, { item }) => ({ ...state, items: [...state.items, item] }),

  [REMOVE]: (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id)
  })
});

export default reducer;
