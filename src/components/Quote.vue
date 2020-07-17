<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ quote }}</p>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    quote: String
  }
};
</script>
<style scoped></style>
