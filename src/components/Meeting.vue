<template>
  <v-container>
    {{content}}
    {{client}}
    {{date}}
  </v-container>
</template>

<script>
export default {
  name: "Meeting",
  props: {
    content: {
      type: String
    },
    client: {
      type: String,
    },
    date: {
      type: String
    }
  }
};
</script>