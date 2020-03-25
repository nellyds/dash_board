<template>
  <v-container>
    {{content}}
{{date}}}}
  </v-container>
</template>

<script>
export default {
  name: "Event",
  props: {
    content: {
      type: String
    },
    date: {
      type: String
    }
  }
};
</script>