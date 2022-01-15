import * as path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import pkg from "./package.json";
import qiankun from "vite-plugin-qiankun";

process.env.VITE_APP_VERSION = pkg.version;
if (process.env.NODE_ENV === "production") {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}
const useDevMode = true; // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响

export default defineConfig(({ mode }) => {
  const { VITE_BASE = '', VITE_OUT = '' } = loadEnv(mode, path.join(__dirname, "/src/env"));
  console.log(loadEnv(mode, path.join(__dirname, "/src/env")))
  return {
    base: VITE_BASE,
    envDir: "./src/env",
    build: {
      outDir: VITE_OUT,
    },
    plugins: [
      vue({
        script: {
          refSugar: true,
        },
      }),
      qiankun("vue3", { useDevMode }),
    ],
    server: {
      // host: process.env.NODE_ENV !== "production",
      port: 3333,
      origin: VITE_BASE,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
