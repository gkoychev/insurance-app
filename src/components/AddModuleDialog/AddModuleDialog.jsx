import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Select,
  MenuItem,
  Grid,
  Typography
} from "@material-ui/core";

import ModuleEdit from "../ModuleEdit";

const AddModuleDialog = ({ open, onClose, onAdd }) => {
  const [selectedModuleId, setSelectedModuleId] = React.useState("");
  const [currentCoverage, setCurrentCoverage] = React.useState("");

  const modules = useSelector(state => state.app.modules);

  const handleChange = event => setSelectedModuleId(event.target.value);

  const handleClose = () => {
    setSelectedModuleId("");
    onClose();
  };

  const handleAdd = () => {
    onAdd({ moduleId: selectedModuleId, currentCoverage });
    setSelectedModuleId("");
  };

  const handleModuleChange = coverage => {
    setCurrentCoverage(coverage);
  };

  const selectedModule = useMemo(() => {
    return modules.find(module => module.id === selectedModuleId);
  }, [modules, selectedModuleId]);

  return (
    <Dialog
      fullWidth
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
          <ModuleEdit
            data={selectedModule}
            key={selectedModuleId}
            onChange={handleModuleChange}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddModuleDialog;
