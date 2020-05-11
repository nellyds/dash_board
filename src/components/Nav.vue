<template>
  <div>
    <v-navigation-drawer color="black" :right="true" absolute dark>
      <v-list nav class="py-0">
        <v-list-item>
          <router-link to="/" class="navbar-item">Home</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/newsEdit" class="navbar-item"
            >Add Site News</router-link
          >
        </v-list-item>
        <v-list-item>
          <router-link to="/blogEdit">Edit Blog</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/create">Create Content</router-link>
        </v-list-item>
        
        <v-list-item>
          <p @click="logOut">Log Out</p>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      darkMode: true
    };
  },
  methods: {
    submitDarkMode: function() {
      this.darkMode = !this.darkMode;
      window.alert(this.darkMode);
    },
    logOut: function() {
      this.$store.commit({
        type: "removeJwt"
      });
      window.alert("logged out");
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
  color: white;
}
</style>
