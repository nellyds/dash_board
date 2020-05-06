<template>
<div class="login">
            <v-card style="padding: 10px; border-top-right-radius: 25px; top-right-radius: 50px; border; background-color: rgb(255,73,112);">
              <v-card-text style="color:white; font-size:2em;">Login</v-card-text>
            </v-card>
            <v-card color="rgba(255,255,255,.7)" style="padding: 20px; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px; border: solid 2px rgb(255,73,112)">
             <v-card-text>
               <br>
               <v-form>
                <v-text-field outlined shaped label="username" color="black" v-model="user">User </v-text-field>
                <v-text-field outlined shaped type=password label="password" color="black" v-model="password">Password </v-text-field>
              </v-form>
              <br>
               <v-btn @click="login">login </v-btn>
               <!-- <v-btn @click="testToken" >test</v-btn>
                <v-btn @click="logOut"> LogOut</v-btn>  -->
             </v-card-text>
           </v-card>
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
            this.$router.push({path: '/blogEdit'})
          } else{
            window.alert('Invalid Username and Password Supplied')
          }
        }).catch(()=>{
          console.log('Internal Servor Error');
        })
        },
      testToken: function(){
        this.$http.post(this.apiUrl + '/protected',
          {'message': 'hello'},
          { headers: {"Authorization" : `Bearer ${this.$store.state.jwt}`}
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
  width: 700px;
  height: 200px;
}
.cardBody{
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
}
</style>