<script>
export default {
  name: "SideNavMenu",

  props: {
    links: {
      type: Array,
      default: [],
    },
  },
};
</script>
<template>
  <div>
    <div v-for="(link, i) in links" :key="i" class="">
      <admin-left-nav-menu-item-group
        v-if="link.links"
        :label="link.label"
        :icon="link.icon"
        :to="link.to"
        :links="link.links"
      ></admin-left-nav-menu-item-group>

      <admin-left-nav-menu-item
        v-else
        :label="link.label"
        :icon="link.icon"
        :to="link.to"
      ></admin-left-nav-menu-item>
    </div>
  </div>
</template>
