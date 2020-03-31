import React from "react";
import { Container, makeStyles, Paper } from "@material-ui/core";

import AppHeader from "../components/AppHeader";
import Cart from "../components/Cart";

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
    height: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <AppHeader />
      <Paper className={classes.content}>
        <Cart />
      </Paper>
    </Container>
  );
};

export default Main;
