<template>
  <div class="sidebar">
    <div class="logo_content">
      <div class="logo">
        <i class="fas fa-tasks icon"></i>
        <div class="logo_name">Kanban</div>
      </div>
      <i id="btn" @click="sidebar" ref="sidebar" class='bx bx-menu'></i>
    </div>

    <ul class="nav_list">
      <li>
        <router-link :to='{name: "userboards"}'>

          <i class='bx bx-grid-alt'></i>
          <span class="links_name">Мои доски</span>

        </router-link>


        <span class="tooltip">Мои доски</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-user'></i>
          <span class="links_name">User</span>
        </a>
        <span class="tooltip">User</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-chat'></i>
          <span class="links_name">Messages</span>
        </a>
        <span class="tooltip">Messages</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-pie-chart-alt-2'></i>
          <span class="links_name">Analytics</span>
        </a>
        <span class="tooltip">Analytics</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-folder'></i>
          <span class="links_name">File Manager</span>
        </a>
        <span class="tooltip">File Manager</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-cart'></i>
          <span class="links_name">Order</span>
        </a>
        <span class="tooltip">Order</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-heart'></i>
          <span class="links_name">Save</span>
        </a>
        <span class="tooltip">Save</span>
      </li>
      <li>
        <a href="#">
          <i class='bx bx-cog'></i>
          <span class="links_name">Settings</span>
        </a>
        <span class="tooltip">Settings</span>
      </li>

    </ul>

    <div class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <img alt="" src="../assets/avatar.png">
          <div class="name_job">
            <div class="name">Name User</div>
            <div class="job">Web dev</div>
          </div>
        </div>
        <i id="log_out" class='bx bx-log-out'></i>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    sidebar() {
      document.querySelector('.sidebar').classList.toggle('active')
    }
  }
}
</script>

<style lang="scss">
  @import "src/layout/scss/sidebar.scss";
</style>