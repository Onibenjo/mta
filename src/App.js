import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { login, signup, home } from "./pages";
import { Header } from "./components";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7ed56f",
      main: "#55c57a",
      dark: "#28b485",
      contrastText: "#fff"
    },
    secondary: {
      light: "",
      main: "#2998ff",
      dark: "#5592bf",
      contrastText: "#fff"
    }
  }
});
function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header>
          {/* <Nav /> */}
          {/* <div className="container"> */}
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route render={() => <div>ERROR 404</div>} />
          </Switch>
          {/* </div> */}
        </Header>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
