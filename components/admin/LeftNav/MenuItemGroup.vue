<script>
export default {
  name: "MenuItemGroup",

  data() {
    return {
      isOpen: false,
    };
  },

  props: {
    icon: String,
    label: String,
    to: String,
    links: Array,
  },

  watch: {
    to(val) {
      if (!val) return;
      console.log({ first: this.$route.path.includes(val) });

      this.isOpen = this.$route.path.includes(val);
    },
  },
};
</script>
<template>
  <admin-left-nav-collapsible :label="label" :icon="icon" v-model="isOpen">
    <div class="ml-3">
      <admin-left-nav-menu-item
        v-for="link in links"
        :key="link.label"
        class="text-sm"
        :icon="link.icon"
        :label="link.label"
        :to="link.to"
      ></admin-left-nav-menu-item>
    </div>
  </admin-left-nav-collapsible>
</template>
