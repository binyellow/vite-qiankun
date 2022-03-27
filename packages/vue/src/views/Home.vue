<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Vue.js Demo" @close="close"> </HelloWorld>
  <el-button type="primary" @click="close">提交</el-button>
  <input v-model="n" />
  <input v-model="p" />
</template>

<script>
import axios from "axios";
import HelloWorld from "../components/HelloWorld.vue";
import { ElButton } from "element-plus";
import { defineComponent, onMounted, ref } from "vue";
import { prefix } from "@/utils/constants.ts";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ElButton,
  },
  setup() {
    const n = ref("binyellow");
    const p = ref();

    onMounted(() => {
      console.log(123);
    });
    return {
      close() {
        const username = n.value;
        const password = p.value;
        console.log("close", username, password);
        axios.request({
          url: `${prefix}/user/login`,
          method: "POST",
          data: {
            username,
            password,
          },
        });
      },
      n,
      p,
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
