<template>
  <span
    :class="`inline-block w-6 h-6 rounded-full animate-spin border-4 border-solid border-${color} border-t-transparent`"
  >
  </span>
</template>

<script>
export default {
  name: "Spinner",

  props: {
    color: {
      type: String,
      default: "navyBlue",
    },
  },
};
</script>
