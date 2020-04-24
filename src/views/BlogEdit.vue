<template>
  <div class="BlogEdit">
                <div v-if="collections.length >0">
          {{collections}}
                    <v-select
            :items="collections"
            label="Standard"
            v-model="select"
          ></v-select>
         <v-btn text @click="getCollection" >Get Collection </v-btn>
          </div>
          <div v-else>
          Hold on.
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
        user: this.$auth.user.name,
        collections: [],
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
          if ((this.user) == "admin@wellnessone.com"){
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
    }
  },
  beforeMount(){
      this.getUser();
      this.submitDB();
  }
};
</script>