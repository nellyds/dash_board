<template>
  <div>
    <div class="sectionHeader">
      <p>Let's write an email.</p>
    </div>
    <div style="height: 100%;">
      <v-tabs
        v-if="$vuetify.breakpoint.smAndUp"
        vertical
        background-color="white"
      >
        <v-tab color="black">
          <p>Write email</p>
        </v-tab>
        <v-tab color="black">
          <p>Edit subscriber list</p>
        </v-tab>
        <v-tab-item>
          <SendNewsLetter />
        </v-tab-item>
        <v-tab-item>
          <EmailList />
        </v-tab-item>
      </v-tabs>
      <v-tabs v-else background-color="black" dark>
        <v-tab color="white">
          <p>Write email</p>
        </v-tab>
        <v-tab color="white">
          <p>Edit subscriber list</p>
        </v-tab>
        <v-tab-item>
          <SendNewsLetter />
        </v-tab-item>
        <v-tab-item>
          <EmailList />
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>
<script>
import EmailList from "@/components/Email/EmailList.vue";
import SendNewsLetter from "@/components/Email/SendNewsLetter.vue";
export default {
  name: "Email",
  components: {
    SendNewsLetter,
    EmailList
  },
  data() {
    return {
      heading: "",
      subheading: "",
      collection: "",
      article: "",
      image: false,
      loading: false,
      message: null,
      subscribers: [],
      fetchingSubscribers: false
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
    },
    getSubscriberList: function() {
      this.fetchingSubscribers = true;
      this.$http
        .post(
          this.apiUrl + "subscribers/get",
          { database: this.database },
          { headers: { Authorization: `Bearer ${this.$store.state.jwt}` } }
        )
        .then(result => {
          this.subscribers = result.data.subscribers;
          console.log(this.subscribers);
          this.fetchingSubscribers = false;
        })
        .catch(() => {
          console.log("Internal Service Error");
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
    user: function() {
      return this.$store.state.user;
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
