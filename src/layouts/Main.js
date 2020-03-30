import React from "react";
import { Container, Button, makeStyles } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";

import AppHeader from "../components/AppHeader/AppHeader";

const useStyles = makeStyles(theme => ({
  content: {
    minHeight: 400,
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
        <Button variant="contained" color="default" startIcon={<AddCircle />}>
          Add Module
        </Button>
      </div>
    </Container>
  );
};

export default Main;
