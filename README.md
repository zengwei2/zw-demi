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
  发布包。然后在 [npm 官网](https://www.npmjs.com/package/zw-demi) 中可查看
```

### 使用

#### Vue2.6.14

```
1. 安装
  npm i zw-demi @vue/composition-api -S
  注意：vue 2.7 以下的需要额外安装 @vue/composition-api 才能使用 composition api

2. App.vue 中使用
  <template>
    <div>
      <Comp />
    </div>
  </template>

  <script>
    import Comp from 'zw-demi';
    export default {
      name: 'AppV',
      components: {
        Comp,
      },
    };
  </script>

```

#### Vue3.2.13

```
1. 安装
  npm i zw-demi -S

2. App.vue 中使用
  <template>
    <div>
      <Comp />
    </div>
  </template>

  <script>
    import Comp from 'zw-demi';
    export default {
      name: 'AppV',
      components: {
        Comp,
      },
    };
  </script>

```
