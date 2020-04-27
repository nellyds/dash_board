<template>
  <div class="home">
    <v-row>
      <v-col cols=16 sm=4>
      </v-col>
      <v-col cols=16 sm=4>
        <transition name=slide>
          <Login />
        </transition>
      </v-col>
      <v-col cols=16 sm=4>
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
  data(){
    return{
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
</style>
