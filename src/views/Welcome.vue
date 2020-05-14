<template>
    <v-content class="welcome">
        <div class="sectionHeader">
            <p>Hi, {{user}}, what do you want to do today?</p>
        </div>
        <transition name="flip">
            <div v-if="display">
                <v-row >
                    <v-col md="2">
                        <img class="hvr-bob" src="@/assets/edit.png" id="write" v-on:click="toggle($event)" />
                        <p id="create" v-on:click="goto($event)">Create Content for your site </p>
                        <img class="hvr-bob" src="@/assets/organize.png" id="link" v-on:click="toggle($event)" />
                        <p id="display" v-on:click="goto($event)">Organize your content.</p>
                    </v-col>
                    <v-col md="6">
                        <div class="createContainer" >
                        </div>
                    </v-col>
                </v-row>
            </div>
        </transition>
    </v-content>
</template>
<script>
export default {
    name: 'Welcome',
    components: {
        },
    data(){
        return{
            display: false
        }
    },
    computed:{
        user: function(){
      
                return this.$store.state.user
                
        }
    },
    methods:{
        goto: function(event){
            let destination = event.target.id;
            this.$router.push({path : "/"+ destination})
        }
    },
    beforeMount(){
        this.display = true;
    }
}
</script>
<style scoped>
.sectionHeader{
  background-color: black;
padding: 20px;
  color: white;
  font-size: 2.2em;
}
.class{
    width: 80vw;
    background-color: white;
}
img{
    width: 200px;
    height: 200px;
    margin: 10px;
}
p{
    font-size: 1.2em;
    font-weight: bold;
}
.flip-enter {
  transform: scaleY(0);
}
.flip-enter-to {
  transform: scaleY(1);
}
.flip-enter-active {
  transition: transform 600ms ease-out;
}
.flip-leave-to {
  transform: scaleY(0);
}
.flip-leave {
  transform: scaleY(1);
}
.flip-leave-active {
  transition: transform 300ms ease-out;
}
</style>