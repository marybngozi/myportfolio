<template>
  <section
    class="flex flex-col md:flex-row justify-between gap-x-5 px-5 pt-20 pb-12 md:pl-12 md:pr-12"
  >
    <div class="w-5/5 md:w-3/5 mt-7 md:mt-0">
      <h1 class="mb-2">Contact me</h1>

      <ul class="">
        <li>
          <a href="mailto:marybngozi@gmail.com">
            <span class="icon text-gray-400">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </span>
            <span> marybngozi@gmail.com </span>
          </a>
        </li>

        <li>
          <a
            href="https://wa.me/2348136587946?text=Hello%20MaryB%2C%20I%20am%20in%20need%20of%20your%20tech%20skills."
            target="_blank"
          >
            <span class="icon text-gray-400">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </span>
            <span>+23436587946</span>
          </a>
        </li>
      </ul>

      <p class="text-justify mt-4 mb-7">
        I'm interested n freelance opportunities, especially amobitious and
        large projects. If you have any foreign job biko do not hesistate to
        link me up, Chineke gozie gi!
      </p>

      <form
        class="mt-12 w-11/12 sm:w-9/12 mx-auto md:w-full lg:w-9/12"
        action=""
      >
        <div class="flex flex-col md:flex-row">
          <div class="w-2/2 input-div md:w-1/2 md:mr-4">
            <input
              type="text"
              autocomplete="off"
              id="name"
              placeholder="Mary Awesome"
            />
            <label for="name">Name</label>
          </div>

          <div class="w-2/2 input-div md:w-1/2">
            <input
              type="text"
              autocomplete="off"
              id="email"
              placeholder="me@awesome.com"
            />
            <label for="email">Email</label>
          </div>
        </div>

        <div class="input-div">
          <input
            type="text"
            autocomplete="off"
            id="subject"
            placeholder="Mary is Awesome"
          />
          <label for="subject">Subject</label>
        </div>

        <div class="input-div">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          >
          </textarea>
        </div>

        <div class="flex justify-end">
          <button class="btn-solid">Send message!</button>
        </div>
      </form>
    </div>

    <div
      class="w-5/5 md:w-2/5 mt-10 md:mt-1 block md:flex items-center sm:justify-center"
    >
      <div class="attribution">
        <h4>Attributions</h4>

        <ol class="mt-6">
          <li>
            <h6>Beautiful UI inspiration</h6>
            <a href="https://jacekjeznach.com/" target="_blank"
              >Jacek Jeznach</a
            >
          </li>

          <li>
            <h6>Beautiful UI design (Figma)</h6>
            <a href="https://twitter.com/UzohDhabs" target="_blank"
              >Uzoh Dhabs</a
            >
          </li>

          <li>
            <h6>Awesome Icons</h6>
            <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
          </li>
        </ol>

        <p class="copyright">
          &copy; {{ year }}
          <span class="text-gray-300">MaryBlessing </span>
          <span class="text-gray-400">Chimagbanwe </span>
          <span class="text-gray-400">Ngozichukwu</span>
          <span class="text-gray-500">Umeh</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeBottom",

  data() {
    return {
      year: new Date().getFullYear(),
    };
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
h4 {
  @apply text-2xl font-bold text-lemon;
}
ul li {
  @apply inline-block mr-3 text-xs;
}
ol li {
  @apply mb-5;
}
h6 {
  @apply text-base font-semibold text-gray-300;
}
a {
  @apply text-gray-400 underline;
}
.copyright {
  @apply mt-10 tracking-normal break-words;
}
.attribution {
  @apply w-full sm:w-9/12 sm:mx-auto;
}
.attribution::before {
  content: "~~~~~~~~⚘⚘⚘⚘⚘⚘⚘~~~~~~~~~";
  color: #6ef4ac;
}
.attribution::after {
  content: "~~~~~~~~❃❃❃❃❃❃❃~~~~~~~~~";
  color: #6ef4ac;
  margin-top: 0.7rem;
}
</style>
