import React from "react";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

import modules from "../../data/modules.json";

const AddModuleDialog = ({ open, onClose, onAdd }) => {
  const [selectedModule, setSelectedModule] = React.useState("");

  const handleChange = event => setSelectedModule(event.target.value);
  const handleClose = () => {
    setSelectedModule("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Insuranse Module</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please choose insurance module from the options below
        </DialogContentText>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">package</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedModule}
            onChange={handleChange}
          >
            {modules.map(module => (
              <MenuItem value={module.id}>{module.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddModuleDialog;
