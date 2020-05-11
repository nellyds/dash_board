<template>
  <div class="NewsEdit">
    {{ collections[0] }}
    <h2>{{ $auth.user.name }}</h2>
    <h2>{{ user }}</h2>
    <v-content>
      <v-form action="#" @submit.prevent="getArticles">
        <button type="submit">Refresh Articles</button>
      </v-form>
      <v-form action="#" @submit.prevent="postNews">
        <v-text-field v-model="article">type here</v-text-field>
        <button type="submit">Submit new article</button>
      </v-form>
      <div v-for="entry in results" :key="entry.date">
        <Article
          v-bind:content="entry.article"
          v-bind:date="entry.date"
          v-bind:id="entry._id"
        />
      </div>
    </v-content>
  </div>
</template>

<script>
import Article from "@/components/Article.vue";

export default {
  name: "NewsEdit",
  data() {
    return {
      article: "",
      results: [],
      user: this.$auth.user.name,
      collections: []
    };
  },
  components: {
    Article
  },
  methods: {
    getArticles: function() {
      window.alert(this.$auth.user.name);
      this.results = [];
      this.$http
        .post("http://127.0.0.1:5000/getSection", {
          Database: "WellNessOne",
          Collection: "WellNessNews"
        })
        .then(result => {
          this.results = result.data.result;
        });
    },
    postNews: function() {
      this.$http.post("http://127.0.0.1:5000/postNews", {
        article: this.article
      });
      this.getArticles();
    },
    getUser: function() {
      if (this.user == "admin@wellnessone.com") {
        this.collections = this.$store.state.WellNessOne;
      }
    }
  },
  beforeMount() {
    if (this.$auth.user.name == "admin@wellnessone.com") {
      this.collections = this.$store.state.WellNessOne;
    }
  }
};
</script>
