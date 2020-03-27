<template>
  <v-app>
          <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/newsEdit" class="navbar-item">News</router-link>
      <router-link to="/protected">Protected </router-link>
       <Nav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  data(){
    return{
        results: [],
    }
  },
  components: {
   Nav,
  },
};
</script>
