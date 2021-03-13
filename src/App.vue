<template>
  <div id="app">
    <header>
      MENU:
      <template v-if="isAuthenticated">
        <router-link to="/" class="header-item">ようこそ</router-link>
        <span class="header-item" v-on:click="logout()">ログアウト</span>
      </template>
      <template v-else>
        <router-link to="/login" class="header-item">ログイン</router-link>
        <router-link to="/register" class="header-item">登録</router-link>
      </template>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.idToken !== null;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
  header {
    font-weight: bold;
    outline: none;
  }

  .header-item {
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    color: #000000;
    font-weight: bold;
  }
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
