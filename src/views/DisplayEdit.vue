<template>
  <div class="displayEdit">
    <div class="sectionHeader">
      <p>Organize your content</p>
    </div>
    <div v-if="collections.length > 0">
      <v-select
        :items="collections"
        label="Standard"
        v-model="selectedCollection"
      ></v-select>
      <v-btn text @click="getDisplayedRecords">Get Collection </v-btn>
      <div v-if="items.length > 0">
        <div v-for="(item, i) in items" v-bind:key="i">
          <v-card outlined shaped>
            <ItemDisplay
              v-bind:database="database"
              v-bind:collection="selectedCollection"
              v-bind:_id="item._id"
              v-bind:title="item.title"
              v-bind:display="item.display"
            />
            <Testimonial
              v-bind:name="item.name"
              v-bind:testimonial="item.testimonial"
              v-bind:display="item.display"
            />
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ItemDisplay from "@/components/ItemDisplay.vue";
import Testimonial from "@/components/Testimonial.vue";
export default {
  name: "DisplayEdit",
  components: {
    ItemDisplay,
    Testimonial
  },
  data() {
    return {
      collections: [],
      items: [],
      fields: [],
      selectedCollection: "",
      index: 0,
      json: ""
    };
  },
  methods: {
    submitDB: function() {
      this.$http
        .post(
          this.apiUrl + "/getAllCollections",
          { database: this.database },
          { headers: { Authorization: `Bearer ${this.$store.state.jwt}` } }
        )
        .then(result => {
          this.collections = result.data;
        });
    },
    getDisplayedRecords: function() {
      this.items = [];
      this.$http
        .post(this.apiUrl + "/getDisplay", {
          database: this.database,
          collection: this.selectedCollection
        })
        .then(result => {
          console.log(result.data);
          this.items = result.data;
        })
        .catch(() => {
          console.log("Internal Server Error retrieving documents");
        });
    },
    getItem: function() {}
  },
  beforeMount() {
    this.submitDB();
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
};
</script>
<style scoped>
.sectionHeader {
  background-color: black;
  padding: 20px;
  color: white;
  font-size: 2.2em;
}
</style>
