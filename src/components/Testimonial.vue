<template>
  <div class="testimonial">
    <p><span class="testimonialContent">Name: </span>{{ name }}</p>
    <p>
      <span class="testimonialContent">Testimonial: </span> {{ testimonial }}
    </p>
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
<style scoped>
.testimonialContent {
  font-weight: bold;
  font-size: 1.1em;
}
.testimonial {
  padding: 20px;
}
</style>
