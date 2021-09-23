# qiankun-demo

[微前端系列讲解--应用集成方案](https://blog.csdn.net/w544924116/article/details/120105320)

## 项目技术选型

主应用：umi(Ant Design Pro)

子应用：umi(Ant Design Pro)、vue(vue-element-admin)

路由模式：都用 hash

## 执行命令

安装根目录工程依赖

```
npm i
```

一键安装所有主子应用的依赖

```
npm run install
```

一键启动所有所有应用

```
npm start
```

一键构建并打包所有主子应用

```
npm run build
```

## package.json 部分命令解释

npm-run-all 提供了多种运行多个命令的方式

--parallel 并行运行多个命令，例如：npm-run-all --parallel lint build

start cmd /k 打开新窗口
