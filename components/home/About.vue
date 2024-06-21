<template>
  <section>
    <!-- Summary -->
    <section class="px-5 py-20 md:pl-12 md:pr-12">
      <h1>Me, Myself and I</h1>

      <div class="flex flex-col-reverse md:flex-row gap-x-5 justify-between">
        <div class="w-5/5 md:w-3/5 mt-7 md:mt-14">
          <p class="text-justify mb-7 w-full sm:w-10/12 sm:mx-auto md:w-full">
            As a Software Engineer, I am a full-stack web developer with over 3
            years of professional experience. I possess a customer-driven nature
            and excel as an organized and collaborative team player, leveraging
            strong communication and analytical abilities to drive project
            success. While I thrive in team environments, I am equally
            proficient working independently, demonstrating self-motivation and
            autonomy in delivering results.
          </p>
          <p class="text-justify mb-7 w-full sm:w-10/12 sm:mx-auto md:w-full">
            I have a proven track record as a competent team leader, adept at
            guiding and motivating teams towards achieving shared objectives. My
            expertise lies in web application development, DevOps practices, and
            cloud technologies, supplemented by intermediate proficiency in
            database management. I am deeply passionate about crafting
            innovative software solutions and contributing to the growth and
            development of individuals and teams alike.
          </p>

          <p class="text-justify w-full sm:w-10/12 sm:mx-auto md:w-full">
            I currently work at
            <a class="cursor" href="https://appmart.ng" target="_blank">
              Appmart Integrated
            </a>
            as a Contract Software Engineer, where I collaborate in the design,
            building and maintaining applications tailored towards automating
            government revenue processes, citizen identitfication and school
            portal management.
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

    <HomeExperience />
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
