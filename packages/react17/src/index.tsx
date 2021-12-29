import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3002',
    container: '#container',
    activeRule: '/root',
  },
  {
    name: 'vueApp',
    entry: '//localhost:3333',
    container: '#container',
    activeRule: '/app-vue',
  },
]);
// 启动 qiankun
start();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
