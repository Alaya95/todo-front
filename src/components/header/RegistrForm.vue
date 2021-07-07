<template>
  <div>
    <div @click="closeRegister" class="blur"></div>
    <div class="registr-modal">
      <p>Регистрация</p>

      <div>
        <label for="name">Введите ваш логин</label>
        <input name="name" id="name" type="text" />
      </div>

      <div>
        <label for="email">Введите ваш email</label>
        <input name="email" id="email" type="email" />
      </div>

      <div>
        <label for="numberPhone">Введите ваш номер телефона</label>
        <input name="numberPhone" id="numberPhone" type="number" />
      </div>

      <div>
        <label for="password">Введите ваш пароль</label>
        <input name="password" id="password" type="password" />
      </div>

      <div>
        <label for="confirmPassword">Повторите ваш пароль</label>
        <input name="confirmPassword" id="confirmPassword" type="password" />
      </div>

      <button @click="enter">Войти</button>
    </div>
  </div>
</template>

<script>
import store from "@/store/store";
export default {
  name: "RegistrForm",
  props: ["closeRegister"],
  methods: {
    enter() {
      const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        password_confirmation: document.getElementById("confirmPassword").value,
        phone: document.getElementById("numberPhone").value,
        remember_me: false,
      };
      store.dispatch("registerUser", data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../layout/scss/forms/auth/register.scss";
</style>
