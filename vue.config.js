const { defineConfig } = require('@vue/cli-service');

const isProd = process.env.NODE_ENV === 'production';

const devConfig = {};
const prodConfig = {
  configureWebpack: {
    // 不让 vue-demi 源码打包进代码( 如果打进去在安装使用 zw-demi 时会有问题 )
    externals: {
      'vue-demi': 'vue-demi',
    },
  },
};

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  ...(isProd ? prodConfig : devConfig),
});
