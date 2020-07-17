<template>
  <v-content>
    <v-card flat>
      Wellness 1
      <img
        class="hvr-bob"
        src="@/assets/email.png"
        id="write"
        v-on:click="toggle($event)"
      />
      <v-card style="margin: 10px;">
        <v-form action="#" @submit.prevent="submitItem">
          <v-text-field v-model="heading" label="heading" />
          <v-text-field v-model="subheading" label="subheading" />
          <v-textarea v-model="article" label="article">type here</v-textarea>
          <v-btn @click="image = !image" text
            >Add a header image to the article</v-btn
          >
          <transition name="flip">
            <ImageUpload v-if="image" />
          </transition>
          <v-btn type="submitItem">Submit news letter</v-btn>
        </v-form>
      </v-card>
    </v-card>
    <v-progress-linear
      v-if="loading"
      color="rgb(255,73,112)"
      indeterminate
      rounded
      height="6"
    ></v-progress-linear>
    <v-alert color="rgb(255,73,112)" v-if="message != null">
      <p style="color: white">{{ message }}</p>
    </v-alert>
  </v-content>
</template>
<script>
import ImageUpload from "@/components/Util/ImageUpload";
export default {
  name: "SendWellness1",
  components: {
    ImageUpload
  },
  data() {
    return {
      heading: "",
      subheading: "",
      collection: "",
      article: "",
      image: false,
      loading: false,
      message: null
    };
  },
  methods: {
    submitItem: function() {
      this.loading = true;
      this.$http
        .post(
          this.apiUrl + "/sendMail",
          {
            database: this.database,
            heading: this.heading,
            subheading: this.subheading,
            article: this.article,
            imageUrl: this.imageUrl
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
