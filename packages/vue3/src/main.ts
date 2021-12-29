import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "./assets/css/setting.css";
import "./assets/css/global.css";

import { i18n } from "./i18n";
import { createRouter, createWebHistory } from "vue-router";
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

// const app = createApp(App);

// app.use(router);
// app.use(store);
// app.use(ElementPlus, { size: "mini" });
// app.use(i18n);

// app.mount('#app')

// export default app;

let router = null;
let instance = null;
let history = null;

function render(props = {}) {
  const { container } = props;
  history = createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vue3" : "/");
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.use(i18n);
  instance.use(ElementPlus, { size: "mini" });
  instance.mount(container ? container.querySelector("#app") : "#app");
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("%c ", "color: green;", "vue3.0 app bootstraped");
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

export async function mount(props) {
  storeTest(props);
  render(props);
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
  router = null;
  history.destroy();
}

renderWithQiankun({
  mount(props) {
    console.log("viteapp mount");
    render(props);
    // console.log(instance.config.globalProperties.$route,"444444444");
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props) {
    console.log("vite被卸载了");
    instance.unmount();
    instance._container.innerHTML = "";
    history.destroy(); // 不卸载  router 会导致其他应用路由失败
    router = null;
    instance = null;
  },
});
