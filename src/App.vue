<template>
  <v-app>

          <v-navigation-drawer
        v-model="drawer"
        color="black"
        :right="true"
        absolute
        dark
      >
        <v-list
          nav
          class="py-0"
        >
        <v-list-item>
          <router-link to="/" class="navbar-item">Home</router-link>
        </v-list-item>
        <v-list-item>
      <router-link to="/about" class="navbar-item">About</router-link>
        </v-list-item>
        <v-list-item>
      <router-link to="/newsEdit" class="navbar-item">News</router-link>
        </v-list-item>
        <v-list-item>
      <router-link to="/protected">Protected </router-link>
        </v-list-item>
        </v-list>
          </v-navigation-drawer>
    <v-content>
      <BlogEdit />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import BlogEdit from "@/views/BlogEdit.vue";
export default {
  name: "App",
  components:{
    BlogEdit
  },
  data(){
    return{
        results: [],
    }
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;500;600;900&display=swap');
body{
  font-family: 'Exo 2';
}
a:visited{
  text-decoration: none;
  color:white;
}
a{
  text-decoration: none;
  color: white;
}
</style>

