import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";

import AddModuleDialog from "../../components/AddModuleDialog/AddModuleDialog";
import { addModuleToCart } from "../../redux/reducers/cart";

const AddModuleContainer = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClickClose = () => {
    setDialogOpen(false);
  };

  const handleClickAdd = item => {
    dispatch(addModuleToCart(item));
    setDialogOpen(false);
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default AddModuleContainer;
