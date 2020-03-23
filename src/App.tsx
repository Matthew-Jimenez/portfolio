import React from "react";

import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  CssBaseline
} from "@material-ui/core";

import "typeface-roboto";

import Root from "./pages/Root";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#056274"
    }
  }
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Root />
    </ThemeProvider>
  );
}

export default App;
