<template>
  <div v-show="this.isOpen" class="login-modal">

    <p>Регистрация</p>

    <div>
      <label for="login">Введите ваш логин</label>
      <input name="login" id="login" type="text">
    </div>

    <div>
      <label for="email">Введите ваш email</label>
      <input name="email" id="email" type="email">
    </div>

    <div>
      <label for="numberPhone">Введите ваш номер телефона</label>
      <input name="numberPhone" id="numberPhone" type="number">
    </div>

    <div>
      <label for="password">Введите ваш пароль</label>
      <input name="password" id="password" type="number">
    </div>

    <div>
      <label for="confirmPassword">Повторите ваш пароль</label>
      <input name="confirmPassword" id="confirmPassword" type="number">
    </div>

    <button>Войти</button>

  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    isOpen: {},
  }
}
</script>

<style scoped>

</style>