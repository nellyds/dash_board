<template>
  <v-container>
    {{ content }}
    {{ client }}
    {{ date }}
  </v-container>
</template>

<script>
export default {
  name: "Note",
  props: {
    content: {
      type: String
    },
    client: {
      type: String
    },
    date: {
      type: String
    }
  }
};
</script>
