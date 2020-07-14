/** @format */

const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

const projectName = "child-vue-dome";
// const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/';
const BASE_URL = process.env.NODE_ENV === "production" ? "/" + projectName + "/" : "/" + projectName + "/";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 配置全局样式变量
      }
    }
  },
  outputDir: projectName,
  publicPath: BASE_URL,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  chainWebpack: (config) => {
    // 配置入口( 兼容 es6 es7 )
    config.entry.app = "./src/main.js";
    // 别名
    // config.resolve.alias
    //   .set("components", resolve("src/components"))
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    externals: {
      "element-ui": "ELEMENT",
      vue: "Vue"
    },
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: "childVue",
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
      // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
      jsonpFunction: `webpackJsonp_childVue`
    }
  },
  // node_modules 下babel转义
  // transpileDependencies: [],
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    port: 8011,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};
