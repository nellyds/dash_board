<template>
  <div>
    <form v-on:submit.prevent="upload">
      <label for="file-input">Upload:</label>
      <v-file-input v-model="file">File to upload </v-file-input>

      <v-btn @click="upload">Upload</v-btn>
    </form>
    <section>
      <ul v-if="errors.length > 0">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </section>
    <p>Image Upload Url: {{imageUrl}} </p>
    <v-btn text @click="clearUpload">Clear</v-btn>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ImageUpload",
  components: {},
  data() {
    return {
      results: null,
      errors: [],
      file: null,
      filesSelected: 0,
      cloudName: "nelsondsilva",
      preset: "WellNessOne",
      tags: "browser-upload",
      progress: 0,
      fileContents: null,
      formData: null
    };
  },
  methods: {
    prepareFormData: function() {
      this.formData = new FormData();
      this.formData.append("upload_preset", this.preset);
      this.formData.append("tags", this.tags);
      this.formData.append("file", this.fileContents);
    },
    upload: function() {
      console.log("upload", this.file.name);
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.fileContents = reader.result;
          this.prepareFormData();
          let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;
          let requestObj = {
            url: cloudinaryUploadURL,
            method: "POST",
            data: this.formData
          };
          this.showProgress = true;
          axios(requestObj)
            .then(response => {
              this.results = response.data;
              console.log("secure_url", this.results.secure_url);
              console.log("public_id", this.results.public_id);
              this.$store.commit({
                type: "addImageUrl",
                imageUrl: this.results.secure_url
              });
            })
            .catch(error => {
              this.errors.push(error);
              console.log(this.error);
            });
        }.bind(this),
        false
      );
      if (this.file && this.file.name) {
        reader.readAsDataURL(this.file);
      }
    },
    clearUpload: function(){
        this.$store.commit({
        type: 'removeImageUrl'
        });
    }
  },
  computed:{
    imageUrl: function(){
      return this.$store.state.imageUrl
    }
  }
};
</script>
<style scoped></style>
