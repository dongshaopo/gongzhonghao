module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局注入sass变量、函数、混合, 第一个@符号是css关键字, 第二个@符号代表src文件夹, 不可缺少分号(;)
        data: `@import '@/css/_vw_func.scss';`
      }
    }
  },
  productionSourceMap: false,
  publicPath: process.env.BUILD_ENV == 'dev' ? '/' : 'heating',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('style-vw-loader')
      .loader('style-vw-loader');
    const buildConfig = require('./src/build/' + process.env.BUILD_ENV + '.js');
    config.plugin('define').tap(args => {
      args[0]['process.env'].BUILD_ENV = JSON.stringify(process.env.BUILD_ENV);
      args[0]['process.env'].API_BASE_URL = JSON.stringify(buildConfig.BASE_URL);
      console.log(args[0]);
      return args;
    });
  },
  runtimeCompiler: true,
};
