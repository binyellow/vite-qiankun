import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import routes from "./routes/config";
import Home from "./pages/Home/index";
import { registerMicroApps, start } from "qiankun";

const App = () => {
  useEffect(() => {
    console.log("====>", import.meta.env);
    registerMicroApps([
      {
        name: "vue3",
        entry: "http://localhost:3333",
        container: "#subapp-container",
        activeRule: "/vue3",
      },
    ]);
    // 启动 qiankun
    start({
      // prefetch: "all",
      sandbox: {
        strictStyleIsolation: true,
        experimentalStyleIsolation: true,
      },
    });
  }, []);

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
