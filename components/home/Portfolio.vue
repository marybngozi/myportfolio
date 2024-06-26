<template>
  <section>
    <div class="section">
      <h1>My Portfolio</h1>

      <div class="flex flex-col lg:flex-row justify-between">
        <p class="w-12/12 lg:w-8/12 text-justify mb-7 lg:mb-0">
          Having collaborated on numerous impactful projects and co-mentored
          over 500 students in their programming journeys, I am excited to share
          some of the standout projects that are not restricted by proprietary
          rights. I hope you find them impressive.👩🏽‍💻
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
      <div v-for="(p, i) in topProjects" :key="i" class="project relative">
        <img
          :src="require(`@/assets/images/${p.image}.png`)"
          :alt="p.name"
          class="w-full h-full port-works"
        />
        <button class="img-btn">View Project</button>
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

  mounted() {
    document.querySelectorAll(".project").forEach((el) => {
      el.addEventListener("mouseover", () => {
        el.children[1].style.display = "block";
      });

      el.addEventListener("mouseleave", () => {
        el.children[1].style.display = "none";
      });
    });
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
.img-btn {
  @apply absolute top-1/3 left-1/4 rounded-full bg-lemon text-navyBlue px-12 py-7 hidden;
}
.port-works {
  filter: grayscale(70%);
  -webkit-filter: grayscale(70%);
}
.port-works:hover {
  filter: none;
  -webkit-filter: grayscale(0);
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
