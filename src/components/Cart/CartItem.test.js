import React from "react";
import CartItem from "./CartItem";
import { shallow } from "enzyme";
import { calculatePrice } from "../../utils/price";

jest.mock("react-redux", () => ({
  useDispatch: () => {},
  // useSelector: () => []
}));

jest.mock("../../utils/price", () => ({
  calculatePrice: jest.fn((coverage, risk) => coverage * risk),
}));

const defaultProps = {
  item: {
    risk: 10,
    currentCoverage: 7,
  },
};
const setup = (props) => shallow(<CartItem {...defaultProps} {...props} />);

describe("CartItem", () => {
  it("should call calculatePrice in proper order", () => {
    const wrapper = setup();
    expect(calculatePrice).toHaveBeenCalled();
    expect(calculatePrice).toHaveBeenCalledWith(
      defaultProps.item.currentCoverage,
      defaultProps.item.risk
    );
  });
});
