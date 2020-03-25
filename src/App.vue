<template>
  <v-app>
          <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/protected">Protected </router-link>
       <Nav />
 <v-form action="#" @submit.prevent="formSubmit">
        <button type="submit">Test it , yo</button>
 </v-form>
  <v-form action="#" @submit.prevent="postNews">
    <v-text-field v-model="article" >type here</v-text-field>
        <button type="submit">Test, the post</button>
 </v-form>
 <div v-for="entry in results" :key="entry.date">
   <Article v-bind:content = entry.article v-bind:date = entry.date />
 </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Article from "@/components/Article.vue";
export default {
  name: "App",
  data(){
    return{
        article:'',
        results: [],
    }
  },
  components: {
   Nav,
   Article
  },
    methods: {
      formSubmit: function(){
      this.$http
      .post('http://127.0.0.1:5000/getSection',
      {
        "Database": "WellNessOne",
      "Collection": "WellNessNews"
      })
      .then(result =>{

        window.alert(result.data.result),
        this.results = result.data.result
      });
    },
    postNews: function(){
      this.$http
      .post('http://127.0.0.1:5000/postNews',
      {
        "article": this.article
      }
      )
    }
  }
};
</script>
