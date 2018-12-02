## 什么是webpack？
webpack是前段的一个项目构建工具，它是基于Node.js开发出来的一个前端工具。

[webpack官网](https://webpack.js.org)
## webpack安装的两种方法
1. 运行`npm i webpack -g`全局安装webpack，这样就能在全局使用webpack的命令
2. 在项目根目录运行`nmp i webpack --save-dev`安装到项目依赖中
## 初步使用webpack打包构造列表隔行变色案例
1. 运行`npm init`初始化项目，使用npm管理项目中的依赖包
2. 创建项目基本的目录结构
3. 使用`cnpm i jquery --save`安装jQuery类库
4. 创建`main.js`并书写各行变色的代码逻辑