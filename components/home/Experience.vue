<template>
  <section class="px-5 py-20 md:pl-12 md:pr-12">
    <h1>Experiences</h1>

    <div class="text-white mb-3">
      <VueSlickCarousel v-bind="settings">
        <div class="box">
          <h4>Front-end Developer</h4>
          <h5>Appmart Integrated Limited, Abuja</h5>
          <h6>Feb, 2020 - Mar 2022</h6>
          <p>
            Basically a brief information about the coompany or firm you worked
            for goes here.
          </p>
        </div>
        <div class="box">
          <h4>Front-end Developer</h4>
          <h5>Appmart Integrated Limited, Abuja</h5>
          <h6>Feb, 2020 - Mar 2022</h6>
          <p>
            Basically a brief information about the coompany or firm you worked
            for goes here.
          </p>
        </div>
        <div class="box">
          <h4>Front-end Developer</h4>
          <h5>Appmart Integrated Limited, Abuja</h5>
          <h6>Feb, 2020 - Mar 2022</h6>
          <p>
            Basically a brief information about the coompany or firm you worked
            for goes here.
          </p>
        </div>
        <div class="box">
          <h4>Front-end Developer</h4>
          <h5>Appmart Integrated Limited, Abuja</h5>
          <h6>Feb, 2020 - Mar 2022</h6>
          <p>
            Basically a brief information about the coompany or firm you worked
            for goes here.
          </p>
        </div>
        <div class="box">
          <h4>Front-end Developer</h4>
          <h5>Appmart Integrated Limited, Abuja</h5>
          <h6>Feb, 2020 - Mar 2022</h6>
          <p>
            Basically a brief information about the coompany or firm you worked
            for goes here.
          </p>
        </div>
        <div class="box">
          <h4>Front-end Developer</h4>
          <h5>Appmart Integrated Limited, Abuja</h5>
          <h6>Feb, 2020 - Mar 2022</h6>
          <p>
            Basically a brief information about the coompany or firm you worked
            for goes here.
          </p>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "HomeExperience",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
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
.box {
  @apply bg-darkNavy w-60 p-6;
}
.box p {
  @apply text-base text-navGray font-medium;
}
</style>
