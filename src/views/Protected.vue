<template>
  <div class="events container">
    <h2 class="subtitle is-3">
        Hi, is this protected.
    </h2>
    <div class="columns is-multiline">
      <div class="column is-one-quarter">

        <h2>{{$auth.user.name}} </h2>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Protected',

  }
</script>