<template>
  <div id="app">
    <div id="nav">
      <el-button type="primary">
        <router-link to="/" tag="span" class="router">主应用home</router-link>
      </el-button>
      <el-button type="primary">
        <router-link to="/about" tag="span" class="router">主应用路由</router-link>
      </el-button>
      <el-button type="primary">
        <router-link to="/child-vue" tag="span" class="router">vue子应用</router-link>
      </el-button>
      <el-button type="primary">
        <router-link to="/child-react" tag="span" class="router">react子应用</router-link>
      </el-button>
    </div>
    <router-view />
    <div id="frame1"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  .router {
    color: #ffffff;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
