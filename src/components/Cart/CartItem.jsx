import React from "react";
import { useDispatch } from "react-redux";
import { CartItemShape } from "./propTypes";
import {
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

import { formatCurrency, formatPercent } from "../../utils";
import { removeModuleFromCart } from "../../redux/reducers/cart";

const useStyles = makeStyles(theme => ({
  currency: {
    textAlign: "right",
    paddingRight: theme.spacing(2)
  }
}));

const CartItem = ({ item }) => {
  const { id, name, risk, currentCoverage } = item;
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(removeModuleFromCart(id));
  };

  const price = currentCoverage * risk;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={`risk: ${formatPercent(
          risk * 100
        )} / coverage: ${currentCoverage}`}
      />
      <ListItemText
        primary={formatCurrency(price)}
        className={classes.currency}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon onClick={handleDeleteClick} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

CartItem.propTypes = {
  item: CartItemShape
};

CartItem.defaultProps = {
  item: {}
};

export default CartItem;
