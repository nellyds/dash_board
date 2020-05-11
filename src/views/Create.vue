<template>
    <v-content>
        <Nav />
        <p>What do you want to create?</p>
        <v-row>
            <v-col md="2">
                <img class="hvr-bob" src="@/assets/write.png" id="write" v-on:click="toggle($event)" />
                <p id="write" v-on:click="toggle($event)">Write an article </p>
                <img class="hvr-bob" src="@/assets/link.png" id="link" v-on:click="toggle($event)" />
                <p id="link" v-on:click="toggle($event)">Upload a Link to share</p>
            </v-col>
            <v-col md="6">
                <div class="createContainer" >
                <transition name="flip">
                    <div v-if="link" >
                        <LinkUpload />
                    </div>
                </transition>
                <transition name="flip">
                        <v-form v-if="write" action="#" @submit.prevent="submitItem">
                        <v-text-field v-model="title" label=title />
                        <v-textarea v-model="article" label=article>type here</v-textarea>
                        <v-btn @click="image = !image" text>Add a header image to the article</v-btn>
                        <transition name="flip">
                            <ImageUpload v-if="image" />
                        </transition>
                        <v-btn type="submitItem">Submit new article</v-btn>
                        </v-form>
                </transition>
                </div>
            </v-col>
        </v-row>
        <!-- <p id="place" v-on:click="toggle($event)">Talk about a place</p> -->
        <p> createImageUrl: {{imageUrl}} </p>
        <p>write : {{write}}</p>
        <p>link: {{link}} </p>
        <p>{{database}}</p>
    </v-content>
</template>
<script>
import ImageUpload from "@/components/ImageUpload.vue";
import LinkUpload from "@/components/LinkUpload.vue";
import Nav from "@/components/Nav.vue";
export default {
    name: "Create",
    components:{
        ImageUpload,
        LinkUpload,
        Nav
    },
    data(){
        return{
            link: false,
            write: false,
            image: false,
            place: false,
            article: '',
            title: '',
            collection: "WellNessNews",
        }
    },
    methods:{
        toggle: function(event){
            if (event.target.id == 'write'){
                this.write = !this.write
                this.link = false
                this.place = false
            }
            if (event.target.id == 'link'){
                this.link = !this.link
                this.write = false;
                this.place = false;
            }
        },
        submitItem: function(){
            this.$http.post(this.apiUrl + "/postNews", {
                article: this.article,
                database: this.database,
                collection: this.collection,
                title: this.title,
                imgUrl: this.imageUrl
            }).then(result =>{
                window.alert(result.data)
            }).catch(() =>{
                console.log("Error connecting to server resource")
            })
        }
    },
    computed:{
      imageUrl: function(){
      return this.$store.state.imageUrl
    },
        apiUrl: function(){
        return this.$store.state.apiUrl;
        },
        database: function(){
            return this.$store.state.database;
        }
    }
}
</script>
<style scoped>
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
.createContainer{
    height: 600px;
    background-color: rgba(255,255,255,.2);
    padding: 10px;
}

@-webkit-keyframes hvr-bob {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes hvr-bob {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@-webkit-keyframes hvr-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes hvr-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
.hvr-bob {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {
  -webkit-animation-name: hvr-bob-float, hvr-bob;
  animation-name: hvr-bob-float, hvr-bob;
  -webkit-animation-duration: .3s, 1.5s;
  animation-duration: .3s, 1.5s;
  -webkit-animation-delay: 0s, .3s;
  animation-delay: 0s, .3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}
</style>