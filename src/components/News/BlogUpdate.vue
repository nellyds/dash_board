
<template>
    <div class="blogEdit"> 

        <v-text-field v-model="title" label="title of the article" />
        <ckeditor
            :editor="editor"
            v-model="editorData"
            :config="editorConfig"
        ></ckeditor>
        <v-btn @click="submitItem" >Submit Blog Entry</v-btn>
        <div v-if="loading">
            <v-progress-linear
            v-if="loading"
            color="rgb(255,73,112)"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
          <v-alert
          color="rgb(255,73,112)"
          v-if="message != null"
          >
          <p style="color: white">{{message}}</p>
          </v-alert>
        </div>
    </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  components: {
  },
  data() {
    return {
      error: null,
      article: "",
      title: "",
      editor: ClassicEditor,
      editorData: "",
      loading: false,
      message: null,
      editorConfig: {
      }
    };
  },
  methods: {
    submitItem: function() {
        this.loading = true;
      this.$http
        .post(
          this.apiUrl+ "/self/blogUpdate",
          {
            article: this.editorData,
            title: this.title,
          },
          { headers: { Authorization: `Bearer ${this.$store.state.jwt}` } }
        )
        .then(result => {
        this.loading = false;
          this.message = result.data.message
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
@media screen and (min-width: 416px){
  .blogEdit{
  width: 60%;
  border: solid 2px black;
}
@media screen and (max-width:414px){
  .blogEdit{
  width: 100%;
    border: solid 2px black;
}
}
}

</style>
