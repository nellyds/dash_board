<template>
  <div class="home">
    <v-row>
      <v-col cols="16" md="4" sm="8">
          <div class="intro">
            <p @click="sitFunction" color="white">Sit</p>
            <p @click="standFunction" color="white">Stand</p>
          </div>
         </v-col>
      <v-col cols="16" md="4" sm="8">
        <img id="dog" src="@/assets/frisky_hairy.png" @click="showLogin = !showLogin" />
        <transition name="slide">
          <Login v-if="showLogin" />
        </transition>
      </v-col>
      <v-col cols="16" sm="4">
        <transition name="slide"> </transition>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login
  },
  data() {
    return {
      showLogin: false,
      showWelcome: this.$store.state,
      sit: false
    };
  },
  methods: {
    sitFunction: function(){
        if (this.sit == false){
        document.getElementById('dog').classList.toggle('sit');
        this.sit = true;
        }
      },
      standFunction: function(){
        if (this.sit == true){
        document.getElementById('dog').classList.toggle('rise');
        this.sit = false;
        }
      }

    }
  };
</script>
<style scoped>
.intro{
  color: white;
  font-size: 3.4em;
  text-align: right;
}
.home{
      background-image: url('~@/assets/bcg.png');
      width: 100vw;
      height: 100vh;
}
.slide-enter {
  transform: scaleY(0);
}
.slide-enter-to {
  transform: scaleY(1);
}
.slide-enter-active {
  transition: transform 600ms ease-out;
}
.slide-leave-to {
  transform: scaleY(0);
}
.slide-leave {
  transform: scaleY(1);
}
.slide-leave-active {
  transition: transform 300ms ease-out;
}
.sit-enter{
  transform:translateY(0);
}
.sit-enter-to{
  transform: translateY(300px);
}
.sit-enter-active{
  transition: transform 300mx ease-out;
}
.sit {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
    -webkit-transform: translateY(200px);
  transform: translateY(200px);
}
.rise { 
    display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
    -webkit-transform: translateY(0px);
  transform: translateY(0px);
}
</style>
