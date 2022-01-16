<template>
  <img style="width: 120px" alt="Vue logo" src="@/assets/logo.png" />
  123321
  <div>
    用户名:<input v-model="username" /><br />
    密码:<input v-model="password" /> <br />
    <button @click="regist">注册</button>
  </div>
</template>

<script type="application/ecmascript" lang="ts">
import axios from "../http";
export default {
  name: "",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    regist() {
      console.log(this.username, this.password);
      axios.post("/api/user/regist", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>


