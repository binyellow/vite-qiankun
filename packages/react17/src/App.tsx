import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import routes from "./routes/config";
import Home from "./pages/Home/index";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            123
            <Home />
          </Route>
          <Redirect exact from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
