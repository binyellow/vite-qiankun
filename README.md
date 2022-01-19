# micro-blog

### 主应用 react17+ts、子应用 vue3+ts+vue-router4+vuex4

### 使用

1. `lerna bootstrap`
2. `lerna run dev`
3. 访问主应用：[localhost:9091](localhost:9091)
   1. 子应用默认地址是[localhost:3333](localhost:3333)
   2. 如果想修改去对应 vite-config.ts>server.port 修改即可

- 注意：目前[dev 模式下子应用 style 会被插入到主应用的 header](https://github.com/issues)，造成样式污染，但是 prod 下不会
- 其实 qiankun 和 vite 的 issue 中提供的 demo 没全用 vite 有上面的原因，如果想 dev 下避免样式污染问题，可以切到`feat/micro-style-problem`分支，该分支的子应用使用的 vue-cli 构建，无上述问题

### done

- [x] vue 子应用 hashRouter 有问题
- [x] ~~跳回主应用时/不渲染~~：主应用中重定向一下
- [x] 'import.meta.env'得指定全
- [x] 发现 build.outDir 在 dev 启动时也会被 vite 引用，如果 undefined 会报 startWith 调用失败，看看能不能 pr 下
