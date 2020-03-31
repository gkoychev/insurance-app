import { createReducer } from "../../utils";
import modules from "../../data/modules.json";

// Initial State
const initialState = {
  modules
};

// Reducer
const reducer = createReducer(initialState, {});

export default reducer;
