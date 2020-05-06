<template>
  <div class="BlogEdit">
    <p>Database: {{database}}</p>
    <p>User: {{user}}</p>
    
      <v-form action="#" @submit.prevent="postNews">
        <v-text-field v-model="article" label="content" />
        <v-text-field v-model="articleTitle" label="title" />
        <v-btn text @click="showImageUpload = !showImageUpload" >Append Image</v-btn>
        <ImageUpload v-if="showImageUpload"/>
        <v-btn text @click="postNews" >Submit</v-btn>
      </v-form>
      <div v-if="collections.length >0">
                    <v-select
            :items="collections"
            label="Standard"
            v-model="select"
          ></v-select>
         <v-btn text @click="getCollection" >Get Collection </v-btn>
         <v-content>
            <v-btn text @click="getArticles" >get articles </v-btn>
            <div v-if="articles.length > 0">
             <div  v-for="entry in articles" :key="entry.date">
                <Article v-bind:content = entry.article v-bind:title="title" v-bind:date = entry.date v-bind:id= entry._id />
             </div>
            </div>
         </v-content>
      </div>

  </div>
</template>

<script>
import Article from "@/components/Article.vue";
import ImageUpload from "@/components/ImageUpload.vue";
export default {
  name: "BlogEdit",
  components:{
      Article,
      ImageUpload
  },
  data(){
    return{
        article: '',
        database: '',
        user: this.$store.state.user,
        showImageUpload: false,
        collections: [],
        results: [],
        select:'',
        articles: [],
        apiUrl: this.$store.state.apiUrl,
        imgUrl: this.$store.state.imageUrl,
    }
  },
  methods:{
      submitDB: function(){
          this.$http.post(
              this.apiUrl + '/getAllCollections',
              {
                  "database": this.database,
              }).then(result =>{
              this.collections = result.data;
              });
      },
    getUser: function(){
        if ((this.user) == "admin@wellnessone.com" || this.user =="Nellzymandias"){
            this.database = 'WellNessOne'
        }

      },
    getCollection: function(){
        this.$http.post(this.apiUrl + '/getSection', 
        {    
           headers: {"Authorization" : `Bearer ${this.$store.state.jwt}`},
            "Database": this.database,
            "Collection": this.select
        })
        .then(result =>{
        console.log(result);
        })
        .catch(() =>{
        console.log('not logged in');
        });
    },
    postNews: function(){
      this.$http
      .post(this.apiUrl+ '/postNews',
      {
        "article": this.article,
        "title": this.articleTitle,
        "imgUrl": this.imgUrl,
        "database": this.database,
        "collection": "WellNessNews"
      }
      )
      this.getArticles();
    },
    getArticles: function(){
        this.articles = [];
        window.alert(this.$store.state.j)
      this.$http
      .post('http://127.0.0.1:5000/getSection',
      {
        "Database": "WellNessOne",
      "Collection": this.select
      },
      { headers: {"Authorization" : `Bearer ${this.$store.state.jwt}`}
      })
      .then(result =>{
        this.articles = result.data.result
      });
    },

  },
  beforeMount(){
      this.getUser();
      this.submitDB();
  }
};
</script>