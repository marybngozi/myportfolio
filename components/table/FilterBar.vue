<template>
  <form
    @submit.prevent="doFilter"
    :class="`flex w-full justify-between items-center ${width} p-1 border rounded`"
  >
    <!-- <section :class="`flex justify-between `"> -->
    <input
      type="text"
      v-model="filterText"
      class="input-search"
      @keyup.enter="doFilter"
      :placeholder="placeholder"
      autofocus="true"
    />

    <div class="flex justify-end gap-1.5 w-4/12">
      <div v-if="!filterText" class="p-1">
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="text-base text-darkNavy"
        />
      </div>

      <div v-else class="text-xs flex gap-1">
        <button
          type="submit"
          class="bg-lemon flex items-center rounded gap-2 text-darkNavy py-2 px-3"
          @click="doFilter"
        >
          <span>Search</span>
          <app-spinner
            v-if="loading"
            class="w-4 h-4"
            color="gray-700"
          ></app-spinner>
        </button>

        <button
          type="button"
          class="bg-lemon text-darkNavy rounded py-2 px-3"
          @click="resetFilter"
        >
          <span>&#x2715;</span>
        </button>
      </div>
    </div>
    <!-- </section> -->
  </form>
</template>

<script>
export default {
  name: "FilterBar",

  props: {
    placeholder: {
      type: String,
      default: "Enter search",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "w-5/12",
    },
  },

  data() {
    return {
      filterText: "",
    };
  },

  methods: {
    doFilter() {
      this.$events.fire("filter-set", this.filterText);
      this.$emit("filter-search", this.filterText);
      // this.filterText = "";
    },

    resetFilter() {
      this.filterText = "";
      this.$events.fire("filter-reset");
      this.$emit("filter-reset");
    },
  },
};
</script>

<style scoped>
form {
  @apply bg-white;
}
.input-search[type="text"] {
  @apply text-xs outline-none text-darkNavy border-none focus:outline-none focus:border-none w-full;
}
.input-search::placeholder {
  @apply text-xs text-[#8D8D8D] italic font-normal;
}
</style>
