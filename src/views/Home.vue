<template>
  <div class="home">
    <v-row>
      <v-col cols=16 sm=4>
      </v-col>
      <v-col cols=16 sm=4>
        <img src="@/assets/frisky_hairy.png" @click="showLogin = !showLogin" />
        <transition name=slide>
          <Login v-if="showLogin"/>
        </transition>
    
      </v-col>
      <v-col cols=16 sm=4>
                <transition name=slide>

        </transition>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
  },
  data(){
    return{
    showLogin: false,
    showWelcome: this.$store.state
    }
  },
  methods:{
}
}
</script>
<style scoped>
.slide-enter{
  transform: scaleY(0);
}
.slide-enter-to{
  transform: scaleY(1);
}
.slide-enter-active{
  transition: transform 600ms ease-out;
}
.slide-leave-to{
    transform: scaleY(0)
}
.slide-leave{
    transform:scaleY(1)
}
.slide-leave-active{
    transition: transform 300ms ease-out;
}
</style>
