import React, { useState } from "react";
import {
  Typography,
  Slider,
  makeStyles,
  Grid,
  Input,
  Tooltip
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(1)
  },
  slider: {
    marginTop: theme.spacing(1.8)
  }
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const ModuleEdit = ({ data }) => {
  const { risk, coverage } = data;
  const sliderStep = (coverage.max - coverage.min || 1) / 100;

  const classes = useStyles();

  const [currentCoverage, setCurrentCoverage] = useState(coverage.min);

  const handleInputChange = event => {
    setCurrentCoverage(event.target.value === "" ? "" : +event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setCurrentCoverage(newValue);
  };
  const handleBlur = () => {
    if (currentCoverage < coverage.min) {
      setCurrentCoverage(coverage.min);
    } else if (currentCoverage > coverage.max) {
      setCurrentCoverage(coverage.max);
    }
  };

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={3}>
        <Typography>Risk:</Typography>
      </Grid>
      <Grid item xs={3}>
        <Input
          fullWidth
          className={classes.input}
          value={`${risk * 100}%`}
          margin="dense"
          disabled
        />
      </Grid>
      <Grid item xs={6} />

      <Grid item xs={3}>
        <Typography>Coverage:</Typography>
      </Grid>
      <Grid item xs={3}>
        <Input
          fullWidth
          className={classes.input}
          value={currentCoverage}
          margin="dense"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: sliderStep,
            min: coverage.min,
            max: coverage.max,
            type: "number"
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Slider
          className={classes.slider}
          ValueLabelComponent={ValueLabelComponent}
          value={currentCoverage}
          onChange={handleSliderChange}
          min={coverage.min}
          max={coverage.max}
          step={sliderStep}
        />
      </Grid>
    </Grid>
  );
};

export default ModuleEdit;
