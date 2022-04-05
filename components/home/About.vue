<template>
  <section class="px-5 py-20 md:pl-12 md:pr-12">
    <h1>Me, Myself and I</h1>

    <div class="flex flex-col-reverse md:flex-row gap-x-5 justify-between">
      <div class="w-5/5 md:w-3/5 mt-7 md:mt-14">
        <p class="text-justify mb-7 w-full sm:w-10/12 sm:mx-auto md:w-full">
          Software Engineer actually a full-stack developer with more than 3
          years of professional experience, a customer-driven nature,
          well-organized and a collaborative team player with strong
          communication and analytical abilities. Dedicated to improving skills
          through hands-on learning and development work. Full-stack Web
          developer and an educator, I'm passionate about building software
          solutions.
        </p>

        <p class="text-justify w-full sm:w-10/12 sm:mx-auto md:w-full">
          I currently work at
          <a class="cursor" href="https://udacity.com" target="_blanck">
            Udacity
          </a>
          as a Student Guide, where I use my technical skills and leadership
          ability to mentor sutdents through their Nanodegree Program.
        </p>
      </div>

      <div class="w-5/5 md:w-2/5 mt-10 md:mt-0">
        <img
          src="/marybngozi.png"
          alt="MaryBlessing Umeh picture"
          class="w-10/12 mx-auto sm:w-7/12 md:w-full xl:w-9/12 xl:mx-auto h-auto border-double border-lemon rounded-full my_image"
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
section {
  z-index: 9;
}
h1 {
  @apply text-4xl sm:text-5xl md:text-7xl font-bold text-lemon;
}
p {
  @apply text-white text-sm md:text-base mt-3 tracking-wide;
}
.my_image {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}
.my_image:hover {
  filter: none;
  -webkit-filter: grayscale(0);
}
a {
  text-decoration: none;
  font-weight: bolder;
  @apply text-lemon;
  cursor: pointer;
  z-index: 10;
}
</style>
