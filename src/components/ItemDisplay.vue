<template>
  <v-content>
      <div class="displayCard">
        <v-card
            style="padding: 10px; border-top-right-radius: 25px; top-right-radius: 50px; border; background-color: rgb(255,73,112);"
            >
        <v-card-text style="color:white; font-size:2em;">{{title}}</v-card-text>
        </v-card>
        <v-card>
            <p>{{collection}}</p>
            <v-btn @click="edit = !edit" text>Edit this item</v-btn>
            <v-btn @click="deleteItem" text>Delete this item</v-btn>
            <transition name="flip">
            <div v-if="edit">
            <ItemEdit
                v-bind:database="database"
                v-bind:collection="collection"
                v-bind:_id="_id"
            />
            </div>
            </transition>
  
        </v-card>
      </div>
  </v-content>
</template>
<script>
import ItemEdit from "@/components/ItemEdit.vue";

export default {
  components: {
    ItemEdit
  },

  props: {
    title: String,
    _id: String,
    database: String,
    collection: String
  },
  data() {
    return {
      edit: false,
      confirmPopup: false,
      confirm: false
    };
  },
  methods:{
    deleteItem: function(){
      this.$http.post(this.apiUrl + "/deleteItem",
      {
        database: this.database,
        collection: this.collection,
        _id: this._id
      }).then(result =>{
        if (result.data.result == 'Success'){
          window.alert('Item deleted successfully?')
        }
      }).catch(() => console.log('Data access error'))

    }
  },
  watched: {
    apiUrl: function(){
      return this.$store.state.apiUrl
    }
  }
};
</script>
<style scoped>
.displayCard{
    width: 350px;
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
