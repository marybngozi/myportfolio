<template>
  <section class="px-5 py-20 md:pl-12 md:pr-12">
    <h1>Me, Myself and I</h1>

    <div class="flex flex-col-reverse md:flex-row gap-x-5 justify-between">
      <div class="w-5/5 md:w-3/5 mt-7 md:mt-14">
        <p class="text-justify mb-7 w-full sm:w-10/12 sm:mx-auto md:w-full">
          This part contains things about me and the languages i write or speak
          i guess so. But I must explain to you how all this mistaken idea of
          denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great explorer of the truth, the master-builder of human
          happiness.
        </p>

        <p class="text-justify w-full sm:w-10/12 sm:mx-auto md:w-full">
          Alsoi get to tell you where i worked and work and still working sorta,
          if need be lol, the kind of jobs i prefer say remote, full-time
          contract or freelance etc.
        </p>
      </div>

      <div class="w-5/5 md:w-2/5 mt-10 md:mt-0">
        <img
          src="/marybngozi.png"
          alt="MaryBlessing Umeh picture"
          class="w-10/12 mx-auto sm:w-7/12 md:w-full xl:w-9/12 xl:mx-auto h-auto border-double border-lemon rounded-full"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeAbout",

  data() {
    return {};
  },
};
</script>
<style scoped>
h1 {
  @apply text-4xl sm:text-5xl md:text-7xl font-bold text-lemon;
}
p {
  @apply text-white text-sm md:text-base mt-3 tracking-wide;
}
</style>
