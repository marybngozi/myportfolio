<template>
  <section>
    <div class="section">
      <h1>My Portfolio</h1>

      <div class="flex flex-col lg:flex-row justify-between">
        <p class="w-12/12 lg:w-8/12 text-justify mb-7 lg:mb-0">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>

        <div class="w-12/12 lg:w-3/12 div-btn">
          <nuxt-link to="/works" class="btn-outline w-60 lg:w-full xl:w-8/12">
            <span>See more</span>
            <span class="icon ml-3">
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div id="projects" class="flex flex-wrap">
      <div v-for="(p, i) in topProjects" :key="i" class="project">
        <img
          :src="require(`@/assets/images/${p.image}.png`)"
          :alt="p.name"
          class="w-full h-full"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePortfolio",

  data() {
    return {
      topProjects: [
        {
          name: "Window",
          image: "work1",
        },
        {
          name: "Window",
          image: "work2",
        },
        {
          name: "Window",
          image: "work3",
        },
        {
          name: "Window",
          image: "work4",
        },
        {
          name: "Window",
          image: "work5",
        },
        {
          name: "Window",
          image: "work6",
        },
        {
          name: "Window",
          image: "work7",
        },
        {
          name: "Window",
          image: "work8",
        },
      ],
    };
  },
};
</script>
<style scoped>
.section {
  @apply px-5 py-20 md:pl-12 md:pr-9;
}
h1 {
  @apply text-4xl sm:text-5xl md:text-7xl font-bold text-lemon;
}
p {
  @apply text-white text-sm md:text-base mt-3 tracking-wide;
}
.div-btn {
  @apply block md:flex flex-col justify-center;
}
.project {
  @apply w-1/2 h-auto;
}
@media (min-width: 600px) {
  .project {
    @apply w-1/3 h-auto;
  }
}
@media (min-width: 1024px) {
  .project {
    @apply w-1/4 h-auto;
  }
}
@media (min-width: 1280px) {
  .project {
    @apply w-1/5 h-auto;
  }
}
</style>
