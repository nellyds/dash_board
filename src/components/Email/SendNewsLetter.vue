<template>
  <v-content>
    {{ user }}
    <SendHoc v-if="showHoc" />
    <SendWellness1 v-if="showWellness1" />
  </v-content>
</template>
<script>
import SendHoc from "@/components/Email/SendHoc.vue";
import SendWellness1 from "@/components/Email/SendWellness1.vue";
export default {
  components: {
    SendHoc,
    SendWellness1
  },
  data() {
    return {
      showHoc: null,
      showWellness1: null
    };
  },

  computed: {
    imageUrl: function() {
      return this.$store.state.imageUrl;
    },
    apiUrl: function() {
      return this.$store.state.apiUrl;
    },
    database: function() {
      return this.$store.state.database;
    },
    user: function() {
      return this.$store.state.user;
    }
  },
  beforeMount() {
    if (this.user === "HouseOfClay") {
      this.showHoc = true;
    }
    if (this.user === "Wellness1") {
      this.User === "showWellness1";
    }
  }
};
</script>
<style scoped>
.sectionHeader {
  background-color: black;
  padding: 20px;
  color: white;
  font-size: 2.2em;
}

.sectionHeader {
  background-color: black;
  padding: 20px;
  color: white;
  font-size: 2.2em;
}
img {
  width: 200px;
  height: 200px;
  margin: 10px;
}
p {
  font-size: 1.2em;
  font-weight: bold;
}
.flip-enter {
  transform: scaleY(0);
}
.flip-enter-to {
  transform: scaleY(1);
}
.flip-enter-active {
  transition: transform 600ms ease-out;
}
.flip-leave-to {
  transform: scaleY(0);
}
.flip-leave {
  transform: scaleY(1);
}
.flip-leave-active {
  transition: transform 300ms ease-out;
}
.createContainer {
  height: 600px;
  background-color: rgba(255, 255, 255, 1);
  padding: 10px;
}

@-webkit-keyframes hvr-bob {
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
.hvr-bob:hover,
.hvr-bob:focus,
.hvr-bob:active {
  -webkit-animation-name: hvr-bob-float, hvr-bob;
  animation-name: hvr-bob-float, hvr-bob;
  -webkit-animation-duration: 0.3s, 1.5s;
  animation-duration: 0.3s, 1.5s;
  -webkit-animation-delay: 0s, 0.3s;
  animation-delay: 0s, 0.3s;
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
