<template>
  <div class="content">
    <Navbar />
    <div class="account">
      <div class="account-info">
        <div class="account-info_avatar">
          <img alt="avatar" src="https://github.com/mdo.png" width="200px">

          <label for="avatar"> Изменить аватар </label>
          <input id="avatar" ref="avatar" name="avatar" type="file">
        </div>
        <div class="account-info_data">
          <p>Ваше имя: </p>
          <p>Ваша почта </p>
        </div>
      </div>
      <div class="account-edit">

        <div class="account-edit_name">
          <label for="username"> Изменить имя</label>
          <input id="username" ref="username" name="username" type="text">
          <!--<button>Подтвердить изменения</button>-->
          <button>Изменить</button>
        </div>
        <div class="account-edit_email">

          <label for="emailUser"> Изменить почту</label>
          <input id="emailUser" ref="userEmail" name="emailUser" type="email">
          <!--<button>Подтвердить изменения</button>-->
          <button>Изменить</button>
        </div>

        <div class="account-edit_pass">
          <p>Изменить пароль</p>
          <label for="oldPass">Введите Ваш старый пароль</label>
          <input id="oldPass" ref="oldPass" name="oldPass" type="password">
          <label for="newPass">Введите новый пароль</label>
          <input id="newPass" ref="newPass" name="newPass" type="password">
          <label for="confirmNewPass">Повторите пароль</label>
          <input id="confirmNewPass" ref="confirmNewPass" name="confirmNewPass" type="password">

          <!--<button>Подтвердить изменения</button>-->
          <button>Изменить</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "AccountSettings",
  components: {Navbar}
}
</script>

<style lang="scss" scoped>
@import "src/layout/scss/account.scss";
</style>