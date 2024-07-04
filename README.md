# Vue cli 打包 lib 库，并且支持 vue2/vue3 使用

## 安装依赖

```
npm install
```

### 开发环境

```
npm run dev
入口文件为：main.js
```

### 打包 lib 库

l

```
1. npm login
  登录 npm, npm login zengwei11223

2. 执行命令 npm run lib

  vue-cli-service build --target lib --name zw-demi src/App.js

  说明：
    --target: 构建目标-lib 库
    --name: 构建的名字 zw-demi
    --dest lib：打包的目录，默认为 dist( 这里设置了为 lib 文件夹 )
    src/App.js:  构建的入口文件为 app.js

3. 执行命令 npm publish
  发布包。然后在 https://www.npmjs.com/package/zw-demi 中可查看
```
