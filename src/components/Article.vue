<template>
  <v-container>
    {{content}}
{{date}}}}

<v-btn color="primary" @click="toggleEdit">Edit Article</v-btn>
<v-form v-if="toEdit">
things
</v-form>
  </v-container>
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
    }
  },
  data(){
    return{
      toEdit: false
    }
  },
  methods: {
    toggleEdit: function(){
    this.toEdit ? this.toEdit = false : this.toEdit = true
    }
  }
};
</script>