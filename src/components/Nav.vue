<template>
    <div>
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
          <router-link to="/blogEdit">EditBlog</router-link>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: 'Nav'
}
</script>
<style scoped>
a{
    text-decoration: none;
}
a:visited{
    text-decoration: none;
    color: white;
}
</style>