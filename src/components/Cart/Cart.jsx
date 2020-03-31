import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, List, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import grey from "@material-ui/core/colors/grey";

import CartItem from "./CartItem";
import { getCartDetails, getCartTotal } from "../../redux/selectors";
import { formatCurrency } from "../../utils";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 440,
    minHeight: "100%",
    backgroundColor: grey[700],
    overflowY: "auto"
  },
  total: {
    flexGrow: 1,
    textAlign: "right",
    marginRight: theme.spacing(2)
  }
}));

const Cart = () => {
  const classes = useStyles();

  const items = useSelector(getCartDetails);
  const total = useSelector(getCartTotal);

  return (
    <Box
      display="flex"
      flexDirection="column"
      className={classes.root}
      pt={1}
      pl={1}
    >
      <Box display="flex" alignItems="center">
        <Box mr={1} ml={1} display="flex">
          <ShoppingCartIcon />
        </Box>
        <Typography variant="h5">Shopping Cart</Typography>
        <Typography variant="h5" className={classes.total}>
          Total: <strong>{formatCurrency(total)}</strong>
        </Typography>
      </Box>
      <List>
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Cart;
