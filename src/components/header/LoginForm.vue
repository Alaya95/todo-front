<template lang="">
  <div class="login-modal">
    <p>Авторизация</p>
    <div>
      <label for="email">Введите ваш email</label>
      <input name="email" id="login_email" type="email" />
    </div>

    <div>
      <label for="password">Введите ваш пароль</label>
      <input name="password" id="login_password" type="password" />
    </div>

    <button @click="enter">Войти</button>
  </div>
</template>
<script>
import store from "@/store/store";
export default {
  name: "LoginForm",
  props: ["closeLogin"],
  methods: {
    enter() {
      const data = {
        email: document.getElementById("login_email").value,
        password: document.getElementById("login_password").value,
        remember_me: true,
      };
      store.dispatch("loginUser", data);
      this.closeLogin();
    },
  },
};
</script>
<style lang="scss">
@import "../../layout/scss/forms/auth/register.scss";
</style>
