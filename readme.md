## React.js 学习笔记
这里只是我个人的学习笔记，对你没用。     
笔记时间：2018-7-5, 2018-7-7

## 运行
在 `indecision-app/` 目录下运行
```
# 实时刷新
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

# 运行服务器
live-server public/
```

## 如果要跑不同的文件
把不同的文件作为输入就行。输出照样是 app.js    
```
  babel src/playground/toggleVisible.js --out-file=public/scripts/app.js --presets=env,react --watch
  babel src/playground/es6-class-1.js --out-file=public/scripts/app.js --presets=env,react --watch
```

## 课程名
react-2nd-edition

## 课程目录
`tree -L 1 -N`
```
├── 01 Welcome
├── 02 Setting up Your Environment
├── 03 Hello React
├── 04 React Components
├── 05 Stateless Functional Components
├── 06 Webpack
├── 07 Using a Third-Party Component
├── 08 Styling React
├── 09 React-Router
├── 10 Redux
├── 11 React with Redux
├── 12 Testing Your Application
├── 13 Deploying Your Apps
├── 14 Firebase 101
├── 15 Firebase with Redux
├── 16 Firebase Authentication
├── 17 Styling Expensify
├── 18 What Now
├── 19 Upgrade Guides
```

## 笔记
0. 新建一个 `indecision-app/` 目录，存放这个项目的所有文件

1. 新建一个 public/ 目录，里面放一个 index.html    
然后 `yarn add global live-server` 添加 live-server
然后跑  
```bash
live-server public/
```
这样就跑起来了    

2. 在 index.html 中通过 `<script>` 形式引入 React 和 ReactDOM  

3. 介绍 Babel，可以用新的 ES6 语法，自动编译成 ES5 让旧浏览器依然可用     

4. 安装 Babel
```bash
yarn global add babel-cli
```

5. 项目初始化
跑 `yarn init` 获得 `package.json`       
跑 `yarn add`  安装 React 需要的包        


6. 使用 Babel
```bash
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```