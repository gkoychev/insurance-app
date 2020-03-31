import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import grey from "@material-ui/core/colors/grey";

import CartItem from "./CartItem";
import { getCartDetails } from "../../redux/selectors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    minHeight: "100%",
    backgroundColor: grey[700],
    overflowY: "auto"
  }
}));

const Cart = () => {
  const classes = useStyles();

  const items = useSelector(getCartDetails);

  return (
    <Box className={classes.root} pt={1} pl={1}>
      <Box display="flex" alignItems="center">
        <Box mr={1} ml={1} display="flex">
          <ShoppingCartIcon />
        </Box>
        <Typography variant="h5">Shopping Cart</Typography>
      </Box>
      <List>
        {items.map(item => (
          <CartItem item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Cart;
