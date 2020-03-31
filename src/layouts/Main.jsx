import React from "react";
import {
  Container,
  makeStyles,
  Paper,
  Typography,
  Box
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import AppHeader from "../components/AppHeader";

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
    height: "calc(100vh - 64px)",
    overflowY: "auto"
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <AppHeader />
      <Paper className={classes.content}>
        <Box display="flex" alignItems="center">
          <Box mr={1} ml={1} display="flex">
            <ShoppingCartIcon />
          </Box>
          <Typography variant="h5">Shopping Cart</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Main;
