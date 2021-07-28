<template>
  <div class="account-content">
    <NavbarAccount />

    <div class="profile">
      <div class="profile-info">
        <div class="profile-info_avatar">
          <img src="https://github.com/mdo.png" width="200px" alt="avatar" />

          <label for="avatar"> Изменить аватар </label>
          <input id="avatar" name="avatar" ref="avatar" type="file" />
          <button @click="sendPhoto">Отправить</button>
        </div>
        <div class="profile-info_data">
          <p>Ваше имя:</p>
          <p>Ваша почта</p>
        </div>
      </div>
      <div class="profile-edit">
        <div class="profile-edit_name">
          <label for="username"> Изменить имя</label>
          <input id="username" name="username" ref="username" type="text" />
          <!--<button>Подтвердить изменения</button>-->
          <button>Изменить</button>
        </div>
        <div class="profile-edit_email">
          <label for="emailUser"> Изменить почту</label>
          <input id="emailUser" name="emailUser" ref="userEmail" type="email" />
          <!--<button>Подтвердить изменения</button>-->
          <button>Изменить</button>
        </div>

        <div class="profile-edit_pass">
          <p>Изменить пароль</p>
          <label for="oldPass">Введите Ваш старый пароль</label>
          <input id="oldPass" name="oldPass" ref="oldPass" type="password" />
          <label for="newPass">Введите новый пароль</label>
          <input id="newPass" name="newPass" ref="newPass" type="password" />
          <label for="confirmNewPass">Повторите пароль</label>
          <input
            id="confirmNewPass"
            name="confirmNewPass"
            ref="confirmNewPass"
            type="password"
          />

          <!--<button>Подтвердить изменения</button>-->
          <button>Изменить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAccount from '../components/account/NavbarAccount';

export default {
  name: 'AccountSettings',
  components: { NavbarAccount },
  methods: {
    sendPhoto() {
      this.$store.dispatch(
        'sendPhoto',
        document.getElementById('avatar').files[0]
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'src/layout/scss/account.scss';
</style>
