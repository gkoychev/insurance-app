import PropTypes from "prop-types";

export const CartItemShape = PropTypes.shape({
  moduleId: PropTypes.number,
  currentCoverage: PropTypes.number,
  name: PropTypes.string
});
