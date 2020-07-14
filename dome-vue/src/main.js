import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
import VueRouter from "vue-router";
import store from "./store";
import actions from "@/shared/actions";


if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// Vue.use(ElementUI);

Vue.config.productionTip = false;


// 全局控制element元素尺寸
Vue.prototype.$ELEMENT = {size: "small", zIndex: 3000};

let vueOptions = null;
let router = null;

function render(props) {
  console.log(props);
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  console.log(window.__POWERED_BY_QIANKUN__);
  router = new VueRouter({
    // 运行在主应用中时，添加路由命名空间 /vue
    base: window.__POWERED_BY_QIANKUN__ ? "/child-vue" : process.env.BASE_URL,
    mode: "history",
    routes
  });
  // 主应用数据挂载到子应用全局
  if (props) {
    Vue.prototype.parentData = props;
    console.log(props);
    // 注入 actions 实例
    actions.setActions(props);
  }
  // 挂载应用
  vueOptions = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount("#app1");
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("VueMicroApp bootstraped");
}

export async function mount(props) {
  console.log("VueMicroApp mount", props);
  render(props);
}

export async function unmount() {
  console.log("VueMicroApp unmount");
  vueOptions.$destroy();
  vueOptions = null;
  router = null;
}
