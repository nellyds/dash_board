<template>
  <div class="BlogEdit">
      sdfds why won't this show up?
      <p>user: {{user}}</p>
      <p>database: {{database}}</p>
      <p>select: {{select}} </p>
                <div v-if="collections.length >0">
                    <v-select
            :items="collections"
            label="Standard"
            v-model="select"
          ></v-select>
         <v-btn text @click="getCollection" >Get Collection </v-btn>
         <v-content>
            <v-form action="#" @submit.prevent="postNews">
                <v-text-field v-model="article" >type here</v-text-field>
                <button type="submit">Submit new article</button>
            </v-form>
            <div  v-if="results.lenght > 0" >
            <div   v-for="entry in results" :key="entry.date">
                <Article v-bind:content = entry.article v-bind:date = entry.date v-bind:id= entry._id />
            </div>
            </div>
         </v-content>
          </div>

  </div>
</template>

<script>
export default {
  name: "BlogEdit",
    data(){
    return{
        article: '',
        database: '',
        user: this.$store.state.user,
        collections: [],
        results: [],
        select:'',
        apiUrl: this.$store.state.apiUrl
    }
  },
  methods:{
      submitDB: function(){
          this.$http.post(
              this.apiUrl + '/getAllCollections',
              {
                  "database": this.database,
              }).then(result =>{
              console.log(result);
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
            "Database": this.database,
            "Collection": this.select
        }).then(result =>{
        console.log(result);
        });
    },
    getArticles: function(){
        this.$http
        .post(this.apiUrl +'/getSection',
        {
            "Database": this.database,
            "Collection": this.select
        })
        .then(result =>{
            this.results = result.data.result
        });
    },
    postNews: function(){
      this.$http
      .post(this.apiUrl+ '/postNews',
      {
        "article": this.article
      }
      )
      this.getArticles();
    },

  },
  beforeMount(){
      this.getUser();
      this.submitDB();
  }
};
</script>