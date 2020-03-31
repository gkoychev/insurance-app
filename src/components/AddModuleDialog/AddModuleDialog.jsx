import React, { useMemo } from "react";
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
  MenuItem,
  Grid,
  Typography
} from "@material-ui/core";

import modules from "../../data/modules.json";
import ModuleEdit from "../ModuleEdit";

const AddModuleDialog = ({ open, onClose, onAdd }) => {
  const [selectedModuleId, setSelectedModuleId] = React.useState("");

  const handleChange = event => setSelectedModuleId(event.target.value);
  const handleClose = () => {
    setSelectedModuleId("");
    onClose();
  };

  const selectedModule = useMemo(() => {
    return modules.find(module => module.id === selectedModuleId);
  }, [selectedModuleId]);

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

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography>Package:</Typography>
          </Grid>
          <Grid item xs={9}>
            <Select
              placeholder="package"
              fullWidth
              labelId="package-label"
              id="package-id"
              value={selectedModuleId}
              onChange={handleChange}
            >
              {modules.map(module => (
                <MenuItem value={module.id}>{module.name}</MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>

        {!!selectedModule && (
          <ModuleEdit data={selectedModule} key={selectedModuleId} />
        )}
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
