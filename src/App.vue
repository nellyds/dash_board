<template>
  <v-app>
    <v-content class="app">
        <div style="height:75px; background-color:black;">
          
        <Nav data-aos="fade-down" v-if="authenticated" />
        </div>
      <vue-page-transition name="fade-in-up">
        <router-view></router-view>
      </vue-page-transition>
    </v-content>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav
  },
  data() {
    return {
      results: [],
      user: this.$auth.user.name,
    };
  },
  computed:{
    authenticated: function(){
      return this.$store.state.isAuthenticated
    }
  },
    beforeMount(){
    }
  };
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Exo+2:wght@100;500;600;900&display=swap");
@media screen and (max-width: 415px){
a:visited {
  text-decoration: none;
  color: white;
}
a {
  text-decoration: none;
  color: white;
}
}
@media screen and (min-width: 416px){
.app {
	background: linear-gradient(-45deg, #ff216f, #F7CDD9, #FFFFFF, #FFF2E6, #FFEFEA,#FFD9E6, #F7CDD9,  #FFFFFF);
  	/* background: linear-gradient(90deg, #FF4970,  #FFFFFF); */
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
  width: 100vw;
  height: 100vh;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
}

</style>
