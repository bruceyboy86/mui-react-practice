import React from 'react';
import FullWidthGrid from "./test";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  props: {
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
    button: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  },
}))

export default function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <ThemeProvider theme={classes}>
        <CssBaseline>
          <FullWidthGrid />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}


