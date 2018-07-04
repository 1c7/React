## React.js 学习笔记
这里只是我个人的学习笔记，对你没用。     
笔记时间：2018-7-5

## 课程名
react-2nd-edition

## 笔记
1. 新建一个 public/ 和 index.html 然后 `yarn add global live-server` 添加 live-server
然后  
```bash
live-server public/
```
这样就跑起来了    

2. 在 index.html 中通过 `<script>` 形式引入 React 和 ReactDOM  

3. 介绍 Babel, `yarn init` 以及 `yarn add` 添加 React 需要的包    

4. 使用 Babel
```bash
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```