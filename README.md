# micro-blog

### 主应用 react17+ts、子应用 vue3+ts+vue-router4+vuex4

### 使用

1. `lerna bootstrap`
2. `lerna run dev`
3. 访问主应用：[localhost:9091](localhost:9091)
   1. 子应用默认地址是[localhost:3333](localhost:3333)
   2. 如果想修改去对应 vite-config.ts>server.port 修改即可

### 2 个可用分支说明

1. `master`分支主应用使用 vite、子应用使用 vite，问题是 dev 模式下会出现子应用样式污染父应用，但是 pro 不会
2. `feat/micro-style-problem`主应用使用 vite，子引用[vue]使用 vue-cli，在 dev 和 pro 下均无问题

- 其实 qiankun 和 vite 的 issue 中提供的 demo 没全用 vite 有上面的原因，如果想 dev 下避免样式污染问题，可以切到`feat/micro-style-problem`分支，该分支的子应用使用的 vue-cli 构建，无上述问题
- 提的相关 issue
  1.  [子应用的样式会被 insert 到主应用的 head 中，开启了 qiankun 的 shadow-box 还是会这样影响主应用的样式](https://github.com/tengmaoqing/vite-plugin-qiankun/issues/15)
  2.  [子应用样式 style 被加到了主应用的 header 里面](https://github.com/umijs/qiankun/issues/1906)

### done

- [x] vue 子应用 hashRouter 有问题
- [x] ~~跳回主应用时/不渲染~~：主应用中重定向一下
- [x] 'import.meta.env'得指定全
- [x] 发现 build.outDir 在 dev 启动时也会被 vite 引用，如果 undefined 会报 startWith 调用失败，看看能不能 pr 下
