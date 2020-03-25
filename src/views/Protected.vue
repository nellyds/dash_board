<template>
  <div class="events container">
    <h2 class="subtitle is-3">
        Hi, is this protected.
    </h2>
    <div class="columns is-multiline">
      <div class="column is-one-quarter">

        <h2>{{$auth.user.name}} </h2>
         <v-form action="#" @submit.prevent="submit">
        <button type="submit">Test it</button>
         </v-form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Protected',
    data(){
      return{
        results: []
      }
    },
    methods: {
      submit: function(){
      this.$http
      .post('http://127.0.0.1:5000/getSection',
      {
        "Database": "WellNessOne",
      "Collection": "Pharmacies"
      })
      .then(result =>{
        this.results = result.data.result;
        window.alert(this.results[0]['address'])
      });
    }
  }
  }
</script>