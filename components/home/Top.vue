<template>
  <section>
    <h1>
      <span>H</span><span>i</span><span>,</span>
      <br />
      <span>I</span><span>'</span><span>m</span>
      &nbsp;
      <span class="mary">M</span><span class="mary">a</span
      ><span class="mary">r</span><span class="mary">y</span><span>B</span
      ><span>l</span><span>e</span><span>s</span><span>s</span><span>i</span
      ><span>n</span><span>g</span><span>,</span>
      <br />
      <span>S</span><span>o</span><span>f</span><span>t</span><span>w</span
      ><span>a</span><span>r</span><span>e</span>
      &nbsp;
      <span>E</span><span>n</span><span>g</span><span>i</span><span>n</span
      ><span>e</span><span>e</span><span>r</span>
    </h1>

    <h6>Actually a Fullstack Developer</h6>

    <nuxt-link to="/contact" class="btn-outline w-60">
      <span>Wanna talk?</span>
      <span class="icon ml-3">
        <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
      </span>
    </nuxt-link>

    <div class="arrows">
      <p>
        <span class="icon mb-4">
          <font-awesome-icon :icon="['fas', 'long-arrow-alt-up']" />
        </span>
        scroll up
      </p>

      <p>
        <span class="icon mb-4">
          <font-awesome-icon :icon="['fas', 'long-arrow-alt-up']" />
        </span>
        scroll up
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeTop",
};
</script>
<style scoped>
h1 {
  font-weight: 900;
  font-size: 2.2rem;
}
section {
  height: 90vh;
  @apply relative text-white px-5 md:pl-12 md:pr-9 flex flex-col justify-center;
}
.mary {
  @apply text-lemon;
}
h6 {
  @apply text-base mt-3 mb-12 md:mb-10 tracking-widest;
  color: #7d7d7d;
}
.arrows {
  @apply absolute bottom-0 left-0 right-0 flex justify-between mx-3;
}
.arrows p {
  writing-mode: tb-rl;
  @apply text-sm animate-bounce tracking-widest;
}
@media (max-width: 321px) {
  h1 {
    font-size: 1.91rem;
  }
  section {
    height: 84vh;
  }
}
/* No less than 322px, no greater than 360px */
@media (min-width: 322px) and (max-width: 360px) {
  h1 {
    font-size: 2rem;
  }
  section {
    height: 85vh;
  }
}
@media (min-width: 361px) and (max-width: 424px) {
  h1 {
    font-size: 2.26rem;
  }
}
@media (min-width: 425px) and (max-width: 499px) {
  h1 {
    font-size: 2.65rem;
  }
}
@media (min-width: 500px) and (max-width: 600px) {
  h1 {
    font-size: 3.2rem;
  }
}
@media (min-width: 601px) and (max-width: 767px) {
  h1 {
    margin-top: 2rem;
    font-size: 3.9rem;
  }
}
@media (min-width: 768px) and (max-width: 799px) {
  h1 {
    margin-top: 2rem;
    font-size: 3.6rem;
  }
}
@media (min-width: 800px) and (max-width: 900px) {
  h1 {
    margin-top: 3rem;
    font-size: 4rem;
  }
}
@media (min-width: 901px) and (max-width: 1024px) {
  h1 {
    margin-top: 3rem;
    font-size: 4.4rem;
  }
}
@media (min-width: 1025px) {
  h1 {
    font-size: 5rem;
  }
}
</style>
