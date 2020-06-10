<template>
  <v-content>
    <div></div>
    <div class="displayCard">
      <v-card
        style="padding: 10px; border-top-right-radius: 25px; top-right-radius: 50px; border; background-color: rgb(255,73,112);"
      >
        <v-card-text style="color:white; font-size:2em;">{{
          title
        }}</v-card-text>
      </v-card>
      <v-card>
        <!-- <p>{{collection}}</p> -->
        <!-- <v-btn @click="edit = !edit" text>Edit this item</v-btn> -->
        <v-btn @click="deleteItem" text>Delete this item</v-btn>
        <v-alert
          v-if="confirmWarning"
          data-aos="fade-left"
          border="right"
          colored-border
          type="warning"
          elevation="2"
        >
          Are you sure you want to delete this item?
          <v-btn text @click="confirmDelete">Confirm</v-btn>
        </v-alert>
        <v-alert
          v-if="deleted"
          data-aos="fade-left"
          border="right"
          colored-border
          type="warning"
          elevation="2"
        >
          Item Deleted
        </v-alert>
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
      confirmWarning: false,
      confirm: false,
      deleted: false
    };
  },
  methods: {
    deleteItem: function() {
      this.confirmWarning = true;
    },
    confirmDelete: function() {
      this.$http
        .post(
          this.apiUrl + "/deleteItem",
          {
            database: this.database,
            collection: this.collection,
            _id: this._id
          },
          { headers: { Authorization: `Bearer ${this.$store.state.jwt}` } }
        )
        .then(result => {
          if (result.data == "article deleted") {
            this.confirmWarning = false;
            this.deleted = true;
          }
        })
        .catch(() => console.log("Data access error"));
    }
  },
  computed: {
    apiUrl: function() {
      return this.$store.state.apiUrl;
    }
  }
};
</script>
<style scoped>
.displayCard {
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
