<template>
  <div class="displayEdit">
    <div class="sectionHeader">
      <p> Organize your content</p>
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
            <ItemDisplay v-bind:database=database v-bind:collection=selectedCollection v-bind:_id=item._id v-bind:title=item.title />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ItemDisplay from "@/components/ItemDisplay.vue";
export default {
  name: "DisplayEdit",
  components: {
    ItemDisplay,
  },
  data() {
    return {
      database: null,
      collections: [],
      items: [],
      fields: [],
      selectedCollection: "",
      index: 0,
      json: "",
      apiUrl: this.$store.state.apiUrl
    };
  },
  methods: {
    submitDB: function() {
      this.$http
        .post(this.apiUrl + "/getAllCollections", {
          database: this.database
        })
        .then(result => {
          this.collections = result.data;
        });
    },
    getDisplayedRecords: function() {
      this.$http
        .post(this.apiUrl + "/getDisplay", {
          database: this.database,
          collection: this.selectedCollection
        })
        .then(result => {
          this.items = result.data.result;
          this.fields = result.data.fields;
        })
        .catch(() => {
          console.log("Internal Server Error retrieving documents");
        });
    },
    getItem: function() {}
  },
  beforeMount() {
    this.database = "WellNessOne";
    this.submitDB();
  }
};
</script>
<style scoped>
.sectionHeader{
  background-color: black;
padding: 20px;
  color: white;
  font-size: 2.2em;
}</style>
