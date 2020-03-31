import React from "react";
import { mount } from "enzyme";
import App from "./App";

it("should render App", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find("Main").exists()).toBe(true);
});
