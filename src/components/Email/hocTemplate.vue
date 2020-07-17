<template>
  <div class="hocTemplate">
    <v-row>
      <v-col class="padding-coloumn" />
      <v-col>
        <img :src="image1" />
        <img :src="image2" />
        <img :src="image3" />
        {{intro}}
        {{paragraph}}
        {{secondHeadline}}
        {{paragraph2}}
        {{quote}}
        {{shareParagraph}}
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    intro: String,
    paragraph: String,
    secondHeadline: String,
    paragraph2: String,
    quote: String,
    shareParagraph: String,
    image1: String,
    image2: String,
    image3: String
  }
};
</script>
<style scoped>
.hocTemplate {
  background-color: #ff4ffc;
  background-image: url("https://res.cloudinary.com/nelsondsilva/image/upload/v1594859508/Screen_Shot_2020-07-15_at_5.30.52_PM.png");
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: 80vh;
  margin: 0;
  padding: 0;
}
.paddingColumn {
  width: 33vh;
}
</style>
