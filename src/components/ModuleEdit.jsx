import React, { useState } from "react";
import {
  Typography,
  Slider,
  makeStyles,
  Grid,
  Input,
  Tooltip
} from "@material-ui/core";
import noop from "lodash/noop";
import { useMemo } from "react";
import { formatPercent, formatCurrency } from "../utils";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(1)
  },
  slider: {
    marginTop: theme.spacing(1.8)
  }
}));

// todo: move to other place
function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const normalizeValue = (value, coverage) => {
  if (value < coverage.min) {
    return coverage.min;
  } else if (value > coverage.max) {
    return coverage.max;
  }
  return value;
};

const ModuleEdit = ({ data, onChange }) => {
  const { risk, coverage } = data;
  const sliderStep = (coverage.max - coverage.min || 1) / 100;

  const classes = useStyles();

  const [currentCoverage, setCurrentCoverage] = useState(coverage.min);

  const handleInputChange = event => {
    const newValue = event.target.value === "" ? "" : +event.target.value;
    // const value = normalizeValue(newValue, coverage);
    setCurrentCoverage(newValue);
    onChange(newValue);
  };

  const handleSliderChange = (event, newValue) => {
    setCurrentCoverage(newValue);
    onChange(newValue);
  };

  const handleBlur = () => {
    const newValue = normalizeValue(currentCoverage, coverage);
    setCurrentCoverage(newValue);
    onChange(newValue);
  };

  const price = useMemo(() => {
    return currentCoverage * risk;
  }, [currentCoverage, risk]);

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={3}>
        <Typography>Risk:</Typography>
      </Grid>
      <Grid item xs={3}>
        <Input
          fullWidth
          className={classes.input}
          value={formatPercent(risk * 100)}
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
      <Grid item xs={3}>
        <Typography variant="h6">Price:</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6">{formatCurrency(price)}</Typography>
      </Grid>
    </Grid>
  );
};

ModuleEdit.defaultProps = {
  onChange: noop
};

export default ModuleEdit;
