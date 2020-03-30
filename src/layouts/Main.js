import React, { useState } from "react";
import { Container, Button, makeStyles } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";

import AppHeader from "../components/AppHeader/AppHeader";
import AddModuleDialog from "../components/AddModuleDialog/AddModuleDialog";

const useStyles = makeStyles(theme => ({
  content: {
    minHeight: 400,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light
  }
}));

const Main = () => {
  const classes = useStyles();

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };
  const handleClickClose = () => {
    setDialogOpen(false);
  };
  const handleClickAdd = () => {
    setDialogOpen(false);
  };

  return (
    <Container maxWidth="md">
      <AppHeader />
      <div className={classes.content}>
        <Button
          variant="contained"
          color="default"
          startIcon={<AddCircle />}
          onClick={handleClickOpen}
        >
          Add Module
        </Button>
        <AddModuleDialog
          open={isDialogOpen}
          onClose={handleClickClose}
          onAdd={handleClickAdd}
        />
      </div>
    </Container>
  );
};

export default Main;
