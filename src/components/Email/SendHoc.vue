<template>
  <v-content>
    <v-card flat>
      House Of Clay
      <img
        class="hvr-bob"
        src="@/assets/email.png"
        id="write"
        v-on:click="toggle($event)"
      />
      <v-text-field label="intro" v-model="intro" />
      <v-text-field label="paragraph" v-model="paragraph" />
      <v-text-field label="secondHeadline" v-model="secondHeadline" />
      <v-text-field label="paragraph2" v-model="paragraph2" />
      <v-text-field label="quote" v-model="quote" />
      <v-text-field label="shareParagraph" v-model="shareParagraph" />
      <HoCImageSelect pictureSlot="1" />
      <HoCImageSelect pictureSlot="2" />
      <HoCImageSelect pictureSlot="3" />
      <v-btn outlined @click="submitItem">Submit</v-btn>
    </v-card>
  </v-content>
</template>
<script>
import HoCImageSelect from "@/components/Util/HoCImageSelect.vue";
export default {
  components: {
    HoCImageSelect,
  },
  data() {
    return {
      intro: null,
      paragraph: null,
      secondHeadline: null,
      paragraph2: null,
      quote: null,
      shareParagraph: null,
      confirm: false,
      preview: false
    };
  },
  methods: {
    submitItem: function() {
      this.loading = true;
      this.$http
        .post(
          this.apiUrl + "/newsLetter/hoc",
          {
            intro: this.intro,
            paragraph: this.paragraph,
            secondHeadline: this.secondHeadline,
            paragraph2: this.paragraph2,
            quote: this.quote,
            shareParagraph: this.shareParagraph,
            image1: this.image1,
            image2: this.image2,
            image3: this.image3
          },
          { headers: { Authorization: `Bearer ${this.$store.state.jwt}` } }
        )
        .then(result => {
          this.loading = false;
          this.message = result.data.message;
          this.$store.commit({
            type: "removeImageUrl"
          });
        })
        .catch(() => {
          console.log("Error connecting to server resource");
        });
    }
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
    image1: function() {
      return this.$store.state.hocImage1;
    },
    image2: function() {
      return this.$store.state.hocImage2;
    },
    image3: function() {
      return this.$store.state.hocImage3;
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
