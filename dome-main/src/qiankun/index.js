import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    runAfterFirstMounted,
    start
  } from "qiankun";
  import apps from "./app";
  
  registerMicroApps(apps, {
    beforeLoad: (app) => {
      console.log("加载前" + app.name);
      return Promise.resolve();
    },
    afterMount: (app) => {
      console.log("加载后" + app.name);
      return Promise.resolve();
    }
  });
  
  // 全局
  addGlobalUncaughtErrorHandler((event) => {
    // console.error(event);
    let {msg} = event;
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
      console.error("微应用加载失败，请检查应用是否可运行");
    }
  });
  
  runAfterFirstMounted(() => {
    console.log("[MainApp] first app mounted");
  });
  
  // setDefaultMountApp("/vue");
  
  export default start;
  