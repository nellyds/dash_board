<template>
  <div class="about">
    <h1>This is an about page and ALSO an auth status page
    </h1>
    <p>{{auth}}</p>
    <p>{{user}}</p>

  </div>
</template>
<script>
export default {
  data(){
    return{
      auth: null,
      user: null,
    }
    
  },
  beforeMount(){
    this.auth = this.$store.state.isAuthenticated;
    this.user = this.$store.state.user;
  }
}
</script>
