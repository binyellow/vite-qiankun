<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Vue.js Demo" @close="close"> </HelloWorld>
  <el-button type="primary" @click="close">提交</el-button>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { ElButton } from "element-plus";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ElButton,
  },
  setup() {
    return {
      close() {
        console.log("close");
      },
    };
  },
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
