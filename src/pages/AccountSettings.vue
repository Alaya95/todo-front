<template>
  <div class="account-content">
    <NavbarAccount/>
    <div class="profile">
      <div class="profile-info">
        <div class="profile-info_avatar">
          <img alt="avatar" src="https://github.com/mdo.png" width="200px">

          <label for="avatar"> Изменить аватар </label>
          <input id="avatar" ref="avatar" name="avatar" type="file">
        </div>
        <div class="profile-info_data">
          <p>Ваше имя: </p>
          <p>Ваша почта </p>
        </div>
      </div>
      <div class="profile-edit">

        <div class="profile-edit_name">
          <label for="username"> Изменить имя</label>
          <input id="username" ref="username" name="username" type="text">
          <!--<button>Подтвердить изменения</button>-->
          <button>Изменить</button>
        </div>
        <div class="profile-edit_email">

          <label for="emailUser"> Изменить почту</label>
          <input id="emailUser" ref="userEmail" name="emailUser" type="email">
          <!--<button>Подтвердить изменения</button>-->
          <button>Изменить</button>
        </div>

        <div class="profile-edit_pass">
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
import NavbarAccount from "../components/account/NavbarAccount";

export default {
  name: "AccountSettings",
  components: {NavbarAccount}
}
</script>

<style lang="scss" scoped>
@import "src/layout/scss/account.scss";
</style>