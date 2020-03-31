import React from "react";
import { Container, makeStyles, IconButton, Tooltip } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import AppHeader from "../components/AppHeader/AppHeader";

const useStyles = makeStyles(theme => ({
  content: {
    minHeight: 600,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <AppHeader />
      <div className={classes.content}>
        <Tooltip title="Shopping Cart">
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Container>
  );
};

export default Main;
