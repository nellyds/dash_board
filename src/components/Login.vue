<template>
<div class="login">
        <v-btn v-if="!showLogin" @click="showLogin= !showLogin">Enter </v-btn>
        <v-form>
            <v-text-field v-model="user">User </v-text-field>
            <v-text-field v-model="password">Password </v-text-field>
        </v-form>
        <v-btn @click="login">login </v-btn>
        <p>api: {{apiUrl}}</p>
        <p>jwt: {{jwt}}</p>
        <v-btn @click="testToken" >protected</v-btn>
        <v-btn @click="logOut"> LogOut</v-btn>
</div>
</template>
<script>
export default {
    name: 'Login',
    data(){
      return{
      showLogin:false,
      apiUrl: this.$store.state.apiUrl,
      jwt:this.$store.state.jwt,
      password:'',
      user: ''
      }
    },
    methods:{
      login: function(){
        this.$http.post(this.apiUrl + '/login',
        {
          'user': this.user,
          'password': this.password
        }).then(result =>{
          if (result.data.status == "logged in"){
            window.alert(result.data.status);
          this.$store.commit({
              type: "storeJwt",
              jwt: result.data.response,
              status: result.data.status,
              user: this.user
            }) 
          }
        })
        },
      testToken: function(){
        const token = this.$store.state.jwt
        console.log("jwt: "+this.$store.state.jwt);
        console.log("local: "+localStorage.getItem('isAuth'));
        window.alert(token)
        this.$http.post(this.apiUrl + '/protected',
          {'message': 'hello'},
          { headers: {"Authorization" : `Bearer ${token}`}
        }).then(response =>{
        console.log(response);
        console.log(this.$store.state.jwt);
        console.log(localStorage.getItem('isAuth'));
        })
    },
    logOut: function(){
      this.$store.commit({
        type: "removeJwt",
        message: 'hi'
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.login{
  background-color: rgb(236, 68, 68);
  width: 200px;
  height: 200px;
}
</style>