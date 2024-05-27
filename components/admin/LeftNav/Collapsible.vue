<template>
  <div>
    <button
      class="w-full flex items-center justify-between transition opacity-70 hover:opacity-100 pt-2 pb-1.5 px-4 rounded-lg text-lemon"
      @click="toggle"
    >
      <div class="w-full flex items-center gap-2">
        <font-awesome-icon
          :icon="['fas', `${icon ? icon : 'blog'}`]"
          class="text-xl"
        />
        {{ label }}
      </div>

      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="transition"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <div
      ref="contenthold"
      class="mt-2 transition-[max-height] overflow-hidden collapse__content"
    >
      <slot> This is the content </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItemCollapsible",

  props: {
    icon: String,
    label: String,
    value: Boolean,
  },

  data() {
    return {
      isOpen: this.value,
    };
  },

  watch: {
    isOpen(newValue) {
      this.$emit("input", newValue);
      const content = this.$refs.contenthold;

      const scrollHeight = content.scrollHeight;
      console.log({ first: scrollHeight });

      if (newValue && !!scrollHeight) {
        content.style.setProperty("--collapse-height", `${scrollHeight}px`);
        return;
      }
      content.style.removeProperty("--collapse-height");
    },
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.collapse__content {
  /* // We set the max-height using the --collapse-height
  // CSS custom property. If the custom property is
  // missing then the fallback value of 0 is used.
  // By toggling the value of the custom property with
  // JavaScript we can animate the max-height. */
  /* max-height: var(--collapse-height, 0); */
  max-height: var(--collapse-height, 0);
  /* @apply max-h-full; */
}
</style>
