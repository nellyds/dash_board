<template>
  <v-content>
              <img
          class="hvr-bob"
          src="@/assets/emailList.png"
          id="link"
          v-on:click="getSubscriberList"
        />
        <div v-if="subscribers.length > 0">
          <p> <span style="font-weight: bolder" >  Number of subscribers : </span> {{this.subscribers.length}} </p>
          <ul>
            <div v-for="(subscriber, i) in subscribers" v-bind:key="i">
              <li>
                <p>  <span style="font-weight: bolder" > Name :</span> {{subscriber.firstName}}  {{subscriber.lastName}}</p>
                <p>  <span style="font-weight: bolder" > Email :</span>  {{subscriber.email}}  </p>
                <p> <span style="font-weight: bolder" > Verified : </span> {{subscriber.verified}} </p>
                </li>
            </div>
          </ul>
        </div>
  </v-content> 
</template>
<script>
export default {
    data(){
        return{
            subscribers: []
        }
    },
    methods:{
        getSubscriberList: function() {
        this.fetchingSubscribers = true;
        this.$http.post(this.apiUrl + "subscribers/get",{database: this.database},{ headers: { Authorization: `Bearer ${this.$store.state.jwt}` } })
          .then(result => {
          this.subscribers = result.data.subscribers;
          console.log(this.subscribers);
          this.fetchingSubscribers = false;
        })
          .catch(() =>{
            console.log("Internal Service Error");
          })
        },
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

}
</script>
<style scoped>
img{
    width: 200px;
}
</style>