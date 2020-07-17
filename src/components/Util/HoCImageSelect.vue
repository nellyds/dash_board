<template>
  <div>
    <p>{{ pictureSlot }}</p>
    <v-select label="select an image" :items="images" v-model="selectedImage" />
    <img v-bind:src="selectedImage" />
    <v-btn @click="setImage">set image </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    pictureSlot: String
  },
  components: {},
  data() {
    return {
      images: this.$store.state.artAssets,
      selectedImage: null
    };
  },
  methods: {
    setImage: function() {
      this.$store.commit({
        type: "setHocImage",
        number: this.pictureSlot,
        url: this.selectedImage
      });
    }
  }
};
</script>
<style scoped>
img {
  width: 200px;
}
</style>
