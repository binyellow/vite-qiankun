import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { changePackageVersion } from "./build/plugins";
import { readdirSync } from "fs";
import qiankun from "vite-plugin-qiankun";

const useDevMode = true; // 如果是在主应用中加载子应用vite,必须打开这个,否则vite加载不成功, 单独运行没影响
/**
 * 获取多入口文件
 * @returns
 */
export function getPages() {
  let pagePath = resolve(__dirname, "./src/pages");
  let files: string[] = readdirSync(pagePath);
  let pages: { [key: string]: string } = {
    main: resolve(__dirname, "index.html"),
  };
  for (let i = 0; i < files.length; i++) {
    let key = files[i].replace(".html", "");
    if (key === "index") continue;
    pages[key] = resolve(__dirname, `src/pages/${files[i]}`);
  }
  return pages;
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:3333",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    // host: process.env.NODE_ENV !== "production",
    port: 3333,
    origin: 'http://localhost:3333'
  },
  plugins: [
    changePackageVersion(),
    vue({
      refTransform: [/src/],
    }),
    qiankun("vue3", { useDevMode }),
  ],
  build: {
    rollupOptions: {
      input: getPages(),
    },
  },
});
