<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="black"
      width="175"
    >
    <img @click="bark" style="height:100px; margin-left: 50px;" src="@/assets/icon.png" />
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
                       <v-btn text class="hvr-bob"
            to="/create"
            color="white">
            Create</v-btn>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
                        <v-btn text class="hvr-bob"
            to="/display"
            color="white">
            Organize</v-btn>
          </v-list-item-content>
        </v-list-item>
                <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
                        <v-btn text class="hvr-bob"
            to="/email"
            color="white">
            Email</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="black"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Sit, Rex.</v-toolbar-title>

    </v-app-bar>
    <v-content>
      <transition name="down">
            <router-view ></router-view>
      </transition>
    </v-content>
    <v-footer
      color="black"
      app
    >
      <span class="white--text">Sit-Rex&copy; 2020 design by Nelson D'Silva</span>
    </v-footer>
  </v-app>
</template>

<script>

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    methods: {
      bark: function(){
        console.log('Hello.')
      }
    }
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;1,200;1,500&display=swap');
body{
  font-family: Poppins;
}
.down-enter{
  transform: scaleY(-1200px);
  opacity: 0
}
.down-enter-to{
  transform: scaleY(0px);
  opacity:1
}
.down-enter-active{
  transition: opacity 1000ms ease-in-out;
}
/* .down-leave{
  opacity:1
}
.down-leave-to{
  opacity:0
}
.down-leave-active{
  transition: opacity 500ms ease-out
} */
</style>