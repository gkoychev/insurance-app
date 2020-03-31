import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import AddModuleContainer from "../../containers/AddModuleContainer";

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
        <AddModuleContainer />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
