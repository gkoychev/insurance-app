import React, { useMemo, Fragment } from "react";
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
  makeStyles,
  Typography
} from "@material-ui/core";

import modules from "../../data/modules.json";

const useStyles = makeStyles(theme => ({
  line: {
    marginTop: theme.spacing(2)
  }
}));

const AddModuleDialog = ({ open, onClose, onAdd }) => {
  const [selectedModuleId, setSelectedModuleId] = React.useState("");
  const classes = useStyles();

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

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">package</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedModuleId}
            onChange={handleChange}
          >
            {modules.map(module => (
              <MenuItem value={module.id}>{module.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {!!selectedModule && (
          <Fragment>
            <FormControl className={classes.line}>
              {/* <InputLabel htmlFor="my-input">Risk</InputLabel> */}
              <Typography>Risk: {selectedModule.risk * 100}%</Typography>
              {/* <InputBase
                value={selectedModule.risk}
                
              /> */}
            </FormControl>
          </Fragment>
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
