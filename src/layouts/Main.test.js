import React from "react";
import { mount } from "enzyme";
import Main from "./Main";

jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: () => []
}));

it("should render component", () => {
  const wrapper = mount(<Main />);
  expect(wrapper.find("AppHeader").exists()).toBe(true);
  expect(wrapper.find("Cart").exists()).toBe(true);
  expect(wrapper.find("AddModuleButton").exists()).toBe(true);
});
