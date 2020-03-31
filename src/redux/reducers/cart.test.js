import reducer, { initialState, ADD, REMOVE } from "./cart";

describe("cart reducer", () => {
  it("should handle empty action", () => {
    const state = reducer(initialState, { type: "" });
    expect(state).toEqual(initialState);
  });

  it("should handle ADD", () => {
    const item = { foo: "bar" };
    const state = reducer(initialState, { type: ADD, item });
    expect(state).toMatchObject({ items: [item] });
  });

  it("should handle REMOVE", () => {
    const state = {
      items: [
        { foo: "bar", id: 1 },
        { qqq: "eee", id: 2 }
      ]
    };
    const newState = reducer(state, { type: REMOVE, id: 1 });
    expect(newState).toMatchObject({ items: [{ qqq: "eee", id: 2 }] });
  });
});
