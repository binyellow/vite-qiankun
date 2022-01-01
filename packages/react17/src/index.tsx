import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue3',
    entry: '/child/',
    container: '#subapp-container',
    activeRule: '/vue3',
  },
]);
// 启动 qiankun
start();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("subapp-container")
);
