<template>
  <v-content>
    <div v-if="fields.length != null">
      <v-select :items="fields" v-model="selectedField" label="Field" />
      <v-btn @click="updateField" text> Update Field</v-btn>
      <v-card width="300">
        <v-card-title> {{ selectedField }}</v-card-title>
        <v-card-text>{{ currentValue }}</v-card-text>
      </v-card>
      <v-textarea v-model="updateContent" label="Content" />
      <v-btn @click="submitUpdate" text>Submit Changes</v-btn>
    </div>
  </v-content>
</template>
<script>
export default {
  name: "Item",
  props: {
    _id: String,
    database: String,
    collection: String
  },
  data() {
    return {
      fields: [],
      selectedField: null,
      itemDict: null,
      currentValue: null,
      newObject: null
    };
  },
  beforeMount() {
    console.log("before mounted");
    this.$http
      .post(this.$store.state.apiUrl + "/getItem", {
        database: this.database,
        collection: this.collection,
        _id: this._id
      })
      .then(result => {
        this.fields = result.data.fields;
        this.itemDict = result.data.item;
        console.log(this.fields);
      })
      .catch(() => {
        console.log("Data Access Error");
      });
  },
  beforeDestroy() {
    console.log("destroyed");
  },
  methods: {
    updateField: function() {
      this.currentValue = this.itemDict[this.selectedField];
    },
    submitUpdate: function() {
      var k = {
        _id: this._id,
        database: this.database,
        collection: this.collection,
        update: [this.selectedField, this.updateContent]
      };
      this.$http.post(this.$store.state.apiUrl + "/editItem", k);
    }
  }
};
</script>
<style scoped></style>
