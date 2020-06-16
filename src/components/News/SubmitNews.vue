<template>
    <v-content>
        <img
          class="hvr-bob"
          src="@/assets/write.png"
          id="write"
          v-on:click="toggle($event)"
        />
        <v-form action="#" @submit.prevent="submitItem">
          <v-text-field v-model="title" label="title of the article" />
<ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
      role: "",
                      editor: ClassicEditor,
                editorData: '',
                editorConfig: {
                    // The configuration of the rich-text editor.
                }
    };
  },
  methods: {
          submitItem: function() {
      // this.$http
      //   .post(
      //     this.apiUrl + "/postNews",
      //     {
      //       article: this.editorData,
      //       database: this.database,
      //       collection: this.collection,
      //       title: this.title,
      //       imgUrl: this.imageUrl
      //     },
      //     { headers: { Authorization: `Bearer ${this.$store.state.jwt}` } }
      //   )
      //   .then(result => {
      //     window.alert(result.data);
      //     this.$store.commit({
      //       type: "removeImageUrl"
      //     });
      //   })
      //   .catch(() => {
      //     console.log("Error connecting to server resource");
      //   });
      console.log({article: this.editorData, database: this.database, collection: this.collection, title: this.title, imgurl: this.imageUrl})
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