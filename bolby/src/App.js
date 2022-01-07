import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HomepageEN from "./pages/HomepageEN";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/fr-FR" />
      </Route>
        <Route path="/fr-FR" exact>
          <Homepage />
        </Route>
        <Route path="/en-EN" exact>
          <HomepageEN/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
