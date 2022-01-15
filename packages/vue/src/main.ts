import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { store } from './store'
import './assets/index.postcss'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { routes } from './router'
import { createRouter, createWebHistory } from 'vue-router'

console.log(import.meta.env)
const head = createHead()

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
  instance.use(head)
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
