<template>
  <div>
    <v-app-bar
      color="black"
    >
          <img style="height:50px" src="@/assets/icon.png" />
        <v-btn text
        class="hvr-bob"
        :color="!isScrolling ? 'white' : 'black'"
        id="welcome"
        @click="goto($event)"
        >
        Home
        </v-btn>
        <v-btn text
        id="create"
        class="hvr-bob"
        :color="!isScrolling ? 'white' : 'black'"
        @click="goto($event)"
        >
        Create Content
        </v-btn>
        <v-btn id="display" text
        class="hvr-bob"
        :color="!isScrolling ? 'white' : 'black'"
        @click="goto($event)"
        >
        Organize Content
        </v-btn>
        <v-btn text
        class="hvr-bob"
        @click="logOut"
        :color="!isScrolling ? 'white' : 'black'"
        >
            Log Out
        </v-btn>

    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      darkMode: true,
      items:[
        {name: 'Home', to: "/"},
        {name: 'Create Content', to: "/create"},
        {name: 'Organize Content', to: "/display"}
      ]
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
      window.alert("Goodbye!");
      this.$router.push({ path: "/" });
    },
    goto: function(event){
      this.$router.push({path: "/" + event.target.id})
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
@keyframes hvr-bob {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@-webkit-keyframes hvr-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes hvr-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
.hvr-bob {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {
  -webkit-animation-name: hvr-bob-float, hvr-bob;
  animation-name: hvr-bob-float, hvr-bob;
  -webkit-animation-duration: .3s, 1.5s;
  animation-duration: .3s, 1.5s;
  -webkit-animation-delay: 0s, .3s;
  animation-delay: 0s, .3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}

</style>
