<template>
<div>
  is this here
      <div v-if="!$auth.loading">

        <a  @click="login" class="button is-dark"><strong>Sign in</strong></a>
        <p v-if="!$auth.isAuthenticated"> not authenticated</p>
        <p v-else>authenticated </p>
        <a @click="logout" class="button is-dark"><strong>Log out</strong></a>
      </div>
       <a @click="logout" class="button is-dark"><strong>Log out</strong></a>
</div>
</template>
<script>
export default {
    name: 'Nav',

methods: {
      login() {
    this.$auth.loginWithRedirect();
  },
  // Log the user out
  logout() {
    this.$auth.logout({
      returnTo: window.location.origin
    });
  }
}
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }
</style>