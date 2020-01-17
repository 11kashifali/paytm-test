<template>
  <div class="text-center">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: null
    }
  }
}
</script>
