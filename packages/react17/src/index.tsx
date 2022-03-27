import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";
import { registerMicroApps, start } from "qiankun";

const entry = import.meta.env.VITE_BASE;
registerMicroApps([
  {
    name: "vue3",
    entry,
    container: "#subapp-container",
    activeRule: "/vue3",
  },
]);
// 启动 qiankun
start({
  // prefetch: "all",
  // sandbox: {
  //   strictStyleIsolation: true,
  //   experimentalStyleIsolation: true,
  // },
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("subapp-container")
);
