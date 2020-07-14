// 父 router
import parentRouter from "../router";
// 父 store
import store from "../store";
// 通信
import shared from "@/shared";

const apps = [
    {
        name: "childVue",
        entry: "//localhost:8011/child-vue-dome/",
        container: "#frame1",
        activeRule: "/child-vue",
        // 通过 props 将 shared 传递给子应用
        props: { shared, parentRouter, store }
    },
    {
        name: "child-react",
        entry: "//localhost:3000",
        container: "#frame1",
        activeRule: "/child-react",
        // 通过 props 将 shared 传递给子应用
        props: { shared, parentRouter, store }
    }
];

export default apps;
