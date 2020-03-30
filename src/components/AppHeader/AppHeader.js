import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Tooltip
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));

const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Insurance Demo
        </Typography>
        <Tooltip title="Shopping Cart">
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
