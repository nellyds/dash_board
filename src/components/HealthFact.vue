<template>
<div data-aos="fade-left" data-aos-duration="600">
  <v-container >
    {{content}}
{{date}}
<v-btn color="primary" @click="toggleEdit">Edit Article</v-btn>
<div v-if="toEdit" data-aos="fade-down"  data-aos-duration="1000">
<v-form  action="#" @submit.prevent="editArticle">
<v-text-field v-model="editedArticle" ></v-text-field>
<button type="submit" >Submit changes </button>
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
    date: {
      type: String
    },
    id: {
      type: String
    }
  },
  data(){
    return{
      toEdit: false,
      editedArticle: '',
      objectId: this.id
    }
  },
  methods: {
    toggleEdit: function(){
    this.toEdit ? this.toEdit = false : this.toEdit = true
    },
    editArticle: function(){
      window.alert('hi')
      this.$http
      .post    
      ('http://127.0.0.1:5000/editArticle',{
          "article": this.editedArticle,
          "_id": this.objectId
      })
    }
  }
};
</script>