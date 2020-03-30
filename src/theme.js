import { useMemo } from "react";
import { createMuiTheme } from "@material-ui/core";
import { green, blue } from "@material-ui/core/colors";

export const useMyTheme = prefersDarkMode =>
  useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: blue,
          secondary: green
        }
      }),
    [prefersDarkMode]
  );
