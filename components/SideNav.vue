<!-- Please remove this file from your project -->
<template>
  <header class="header">
    <nuxt-link to="/" class="block top-sec">
      <img src="/icon.png" alt="logo" class="logo" />
      <h5 class="text-white">Software Engineer</h5>
    </nuxt-link>

    <nav>
      <ul>
        <li>
          <nuxt-link
            to="/about"
            :class="`text-navGray nav-link ${
              $route.name == 'about' ? 'active' : ''
            }`"
          >
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'user-tie']" />
            </span>
            <span>About</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link
            to="/skills"
            :class="`text-navGray nav-link ${
              $route.name == 'skills' ? 'active' : ''
            }`"
          >
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'tools']" />
            </span>
            <span>Skills</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link
            to="/works"
            :class="`text-navGray nav-link ${
              $route.name == 'works' ? 'active' : ''
            }`"
          >
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'briefcase']" />
            </span>
            <span>Works</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link
            to="/blog"
            :class="`text-navGray nav-link ${
              $route.name == 'blog' ? 'active' : ''
            }`"
          >
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'blog']" />
            </span>
            <span>Blog</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link
            to="/contact"
            :class="`text-navGray nav-link ${
              $route.name == 'contact' ? 'active' : ''
            }`"
          >
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'id-card']" />
            </span>
            <span>Contact</span>
          </nuxt-link>
        </li>

        <li>
          <ul class="flex pl-5 mt-9">
            <li>
              <a
                href="https://www.linkedin.com/in/marybngozi"
                target="_blank"
                class="social-link"
              >
                <span class="icon">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/marybngozi"
                target="_blank"
                class="social-link"
              >
                <span class="icon">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/marybngozi"
                target="_blank"
                class="social-link"
              >
                <span class="icon">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </span>
              </a>
            </li>
          </ul>
        </li>

        <li class="mt-5 border-b border-gray-700">
          <nuxt-link
            to="/admin/login"
            class="text-[#01111f] block w-full text-center py-3"
          >
            Login
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SideNav",
};
</script>

<style scoped>
header {
  background: #01111f;
}
.header {
  @apply py-8;
}
.top-sec {
  @apply mb-12 md:mb-16 text-center;
}
.top-sec h5 {
  @apply font-bold text-sm;
}
.logo {
  width: 3.563rem;
  height: 4.375rem;
  @apply mx-auto;
}
.nav-link {
  @apply block px-6 py-4 md:py-5 mt-1 text-sm md:text-base hover:bg-lemon hover:text-navyBlue;
}
.nav-link.active {
  @apply bg-lemon text-navyBlue;
}
.icon {
  @apply mr-3;
}
.social-link {
  @apply text-base px-1 text-navGray hover:text-lemon;
}
</style>
