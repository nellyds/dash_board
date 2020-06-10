<template>
  <div class="home">
    <v-row>
      <v-col cols="16" md="4" sm="8">
        <div class="intro">
          <p v-if="!sit" @click="sitFunction" color="white">Sit</p>
          <p v-if="sit" @click="standFunction" color="white">Stand</p>
          <p @click="overlay = !overlay" color="white">Login</p>
          <p @click="speak = !speak">Speak</p>
        </div>
      </v-col>
      <v-col cols="16" md="4" sm="8">
        <img
          id="dog"
          src="@/assets/frisky_hairy.png"
          @click="overlay = !overlay"
        />
        <transition name="slide">
          <v-overlay color="black" v-if="overlay" opacity=".3" :value="overlay">
            <v-btn @click="overlay = false" class="cancel" text> cancel </v-btn>
            <Login />
          </v-overlay>
        </transition>

        <transition name="slide">
          -->
          <v-alert color="white" dark dense v-if="speak" :value="speak">
            <div class="speech-bubble">
              <p>
                Nobody ever asks me how I am doing, not even in the perfunctory
                sense.
              </p>
            </div>
          </v-alert>
        </transition>
      </v-col>
      <v-col cols="16" sm="4"> </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from "@/components/Navigation/Login.vue";

export default {
  name: "Home",
  components: {
    Login
  },
  data() {
    return {
      showLogin: false,
      showWelcome: this.$store.state,
      sit: false,
      overlay: false,
      speak: false
    };
  },
  methods: {
    sitFunction: function() {
      // if (this.sit == false){
      document.getElementById("dog").classList.toggle("sit");
      this.sit = true;
      // }
    },
    standFunction: function() {
      //if (this.sit == true){
      document.getElementById("dog").classList.toggle("rise");
      //this.sit = false;
      //}
    }
  }
};
</script>
<style scoped>
@media screen and (min-width: 416px) {
  .intro {
    color: white;
    font-size: 3.4em;
    text-align: right;
    font-weight: bold;
  }
  .home {
    background-image: url("~@/assets/bcg.png");
    width: 100vw;
    height: 100vh;
  }
  .speech-bubble {
    position: relative;
    background: #ffffff;
    border-radius: 0.4em;
    color: rgb(255, 73, 112);
    font-size: 2em;
    text-align: center;
    padding: 30px;
  }

  .speech-bubble:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 62px solid transparent;
    border-bottom-color: white;
    border-top: 0;
    border-left: 0;
    margin-left: -31px;
    margin-top: -62px;
  }
}
@media screen and (max-width: 415px) {
  .speech-bubble {
    position: relative;
    background: #ffffff;
    border-radius: 0.4em;
    color: black;
    font-size: 1.1em;
    text-align: center;
    padding: 10px;
  }

  .speech-bubble:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 62px solid transparent;
    border-bottom-color: white;
    border-top: 0;
    border-left: 0;
    margin-left: -31px;
    margin-top: -62px;
  }
  img {
    height: 250px;
    width: 250px;
  }
  .intro {
    color: white;
    font-size: 2.8em;
    font-weight: bold;
  }
  .home {
    background-image: url("~@/assets/bcg2.png");
    background-size: cover;
    width: 100vw;
    height: 100vh;
  }
}
.slide-enter {
  transform: scaleY(0);
}
.slide-enter-to {
  transform: scaleY(1);
}
.slide-enter-active {
  transition: transform 300ms ease-out;
}
.slide-leave-to {
  transform: scaleY(0);
}
.slide-leave {
  transform: scaleY(1);
}
.slide-leave-active {
  transition: transform 100ms ease-out;
}
.sit-enter {
  transform: translateY(0);
}
.sit-enter-to {
  transform: translateY(300px);
}
.sit-enter-active {
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

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
