<template>
  <v-container>
    {{name}}
    {{email}}

{{phone}}
{{company}}


  </v-container>
</template>

<script>
export default {
  name: "Client",
  props: {
    name: {
      type: String
    },
    email: {
      type: String,
    },
    phone: {
      type: String
    },
    company:{
        type: String,
    }
  }
};
</script>