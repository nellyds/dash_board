<template>
  <div>
    <v-text-field v-model="linkUrl" label="Link Url (Web Address)" />
    <v-btn text @click="submitLink">Submit</v-btn>
  </div>
</template>
<script>
export default {
  name: "LinkUpload",
  data() {
    return {
      linkUrl: "",
      apiUrl: this.$store.state.apiUrl
    };
  },
  methods: {
    submitLink: function() {
      this.$http
        .post(
          this.apiUrl + "/newLink",
          { url: this.linkUrl },
          { headers: { Authorization: `Bearer ${this.$store.state.jwt}` } }
        )
        .then(result => {
          console.log(result);
        })
        .catch(() => {
          console.log("Error over there, not here.");
        });
    }
  }
};
</script>
<style scoped></style>
