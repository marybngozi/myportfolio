<template>
  <nuxt-link
    class="w-full block text-left transition opacity-80 hover:opacity-100 px-4 rounded mb-2 text-lemon hover:bg-lemon hover:text-navyBlue py-2.5"
    exact
    :to="to"
    active-class="[&&]:opacity-100 bg-lemon text-navyBlue"
    @click.native="toggleNavShow(false)"
  >
    <div class="flex items-center gap-2">
      <font-awesome-icon
        :icon="['fas', `${icon ? icon : 'blog'}`]"
        class="text-xl"
      />
      {{ label }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "MenuItem",

  props: {
    icon: String,
    label: String,
    to: String,
  },

  methods: {
    toggleNavShow(val) {
      this.$store.commit("setValue", {
        key: "navShow",
        val,
      });
    },
  },
};
</script>
