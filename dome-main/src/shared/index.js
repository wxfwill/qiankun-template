import store from "../store";

class Shared {
  // 获取token
  getToken() {
    const state = store.state;
    return state.accessToken || "";
  }
  // 设置token
  setToken(token) {
    store.commit("setAccessToken", token);
  }
}

const shared = new Shared();
export default shared;
