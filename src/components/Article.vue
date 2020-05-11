<template>
  <div data-aos="fade-left" data-aos-duration="600">
    <v-container>
      <p>Title: {{ title }}</p>
      <p>Content: {{ content }}</p>

      <v-btn color="primary" @click="toggleEdit">Edit Article</v-btn>
      <div v-if="toEdit" data-aos="fade-down" data-aos-duration="1000">
        <v-form action="#" @submit.prevent="editArticle">
          <v-text-field label="content" v-model="editedArticle" />
          <v-btn color="primary" @click="deleteArticle">Delete Article</v-btn>
          <button type="submit">Submit changes</button>
        </v-form>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    content: {
      type: String
    },
    title: {
      type: String
    },
    date: {
      type: String
    },
    id: {
      type: String
    }
  },
  data() {
    return {
      toEdit: false,
      editedArticle: "",
      objectId: this.id
    };
  },
  methods: {
    toggleEdit: function() {
      this.toEdit ? (this.toEdit = false) : (this.toEdit = true);
    },
    editArticle: function() {
      this.$http.post("http://127.0.0.1:5000/editArticle", {
        article: this.editedArticle,
        title: this.editedTitle,
        _id: this.objectId
      });
    },
    deleteArticle: function() {
      this.$http.post("http://127.0.0.1:5000/deleteArticle", {
        _id: this.objectId
      });
    }
  }
};
</script>
