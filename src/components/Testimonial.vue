<template>
  <div>
    <p>Name: {{ name }}</p>
    <p>Testimonial: {{ testimonial }}</p>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    testimonial: String
  }
};
</script>
<style scoped></style>
