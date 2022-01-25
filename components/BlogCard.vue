<template>
  <div>
    <div class="card" :style="`border-top: 1px solid ${bColor}`">
      <h4>The best web developer</h4>

      <small :style="`color: ${bColor}`">{{ blog.tag }}</small>

      <h6>NOVEMBER 12 2021</h6>

      <p>
        So long story short I started this tech thing some 10 years back (omo),
        sha you get the point here right? This part contains things about me and
        the langu...
      </p>

      <button type="button">Read more...</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogCard",

  props: {
    blog: {
      type: Object,
      required: true,
    },
    bColor: {
      type: String,
      default: "#EC1010",
    },
  },
};
</script>
<style scoped>
.card {
  background: #01111f;
  opacity: 1;
  width: 95%;
  box-shadow: 1px 0px 4px 3px rgba(10, 33, 21, 0.54);
  @apply px-7 py-5 mx-auto;
}
h4 {
  @apply text-lemon font-black text-2xl mb-3;
}
small {
  @apply uppercase text-xs;
}
h6 {
  @apply uppercase text-gray-600 text-sm lg:text-base my-4;
}
p {
  @apply text-gray-500 text-sm lg:text-base mb-6;
}
button {
  @apply pr-6 py-2.5 bg-transparent text-lemon font-medium text-base leading-tight hover:underline focus:underline focus:outline-none focus:ring-0 transition duration-150 ease-in-out;
}
</style>
