<template>
    <v-content>
        <img
          class="hvr-bob"
          src="@/assets/write.png"
          id="write"
          v-on:click="toggle($event)"
        />
        <v-form action="#" @submit.prevent="submitItem">
          <v-text-field v-model="title" label="title" />
          <v-textarea v-model="article" label="article">type here</v-textarea>
          <v-btn @click="image = !image" text
            >Add a header image to the article</v-btn
          >
          <transition name="flip">
            <ImageUpload v-if="image" />
          </transition>
          <v-btn type="submitItem">Submit new article</v-btn>
        </v-form>
    </v-content>
</template>
<script>
import ImageUpload from "@/components/Util/ImageUpload";
export default {
    components:{
        ImageUpload
    },
    data() {
    return {
      link: false,
      write: false,
      image: false,
      profile: false,
      error: null,
      article: "",
      title: "",
      collection: "WellNessNews",
      profileName: "",
      role: ""
    };
  },
  methods: {
          submitItem: function() {
      this.$http
        .post(
          this.apiUrl + "/postNews",
          {
            article: this.article,
            database: this.database,
            collection: this.collection,
            title: this.title,
            imgUrl: this.imageUrl
          },
          { headers: { Authorization: `Bearer ${this.$store.state.jwt}` } }
        )
        .then(result => {
          window.alert(result.data);
          this.$store.commit({
            type: "removeImageUrl"
          });
        })
        .catch(() => {
          console.log("Error connecting to server resource");
        });
    },
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
}
</script>
<style scoped>

</style>