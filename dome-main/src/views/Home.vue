<template>
  <div class="home">
    <HelloWorld/>
    <el-form :inline="true">
      <el-form-item>
          <el-input placeholder="请输入" v-model="testVal"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click.native="sendInfo">发送信息给子应用</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script>
import actions from "@/shared/actions";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      testVal: ''
    }
  },
    mounted() {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态;
      console.log(prevState);
      console.log("token", state.token);
    });
  },
  methods: {
    sendInfo() {
       actions.setGlobalState({ token: this.testVal });
    }
  }
};
</script>
