<template>
  <v-app>
    <v-content>
            <router-view ></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {

  },

  
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;1,200;1,500&display=swap');
body{
  font-family: Poppins;
}
</style>
