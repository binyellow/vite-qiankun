- [micro-blog](#micro-blog)
    - [todo](#todo)
    - [done](#done)
- [分支说明](#分支说明)

# micro-blog

micro app, docker additional publish, spring boot support basic server function

目前本地开发和部署都成功访问页面了，但是有以下问题，准备再切个分支来用原生的 vite 应用

### todo

- [ ] [样式隔离还是有问题](https://github.com/umijs/qiankun/issues/1318)，为啥子应用样式还是被加到了主应用的 header 上

### done

- [x] vue 子应用 hashRouter 有问题
- [x] ~~跳回主应用时/不渲染~~：主应用中重定向一下
- [x] 'import.meta.env'得指定全
- [x] 发现 build.outDir 在 dev 启动时也会被 vite 引用，如果 undefined 会报 startWith 调用失败，看看能不能 pr 下

# 分支说明

- 当前分支是希望 vue 作为管理端，react 作为用户端，vue 来配置一些东西
- 学习 vue3 的分支
- 主分支是 base 的微前端分支
