<template>
  <div class="welcome">
    <v-card :dark="darkValue" height="300">
      Welcome!
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Welcome",
  data() {
    return {
      darkValue: this.$store.state.darkValue
    };
  }
};
</script>
<style scoped></style>
