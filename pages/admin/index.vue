<template>
  <div class="page">
    <div class="text-white">
      <h3>Logged in: {{ $store.state.loggedIn }}</h3>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",

  middleware: "auth",

  layout: "user",

  mounted() {
    this.$store.commit("setValue", {
      key: "pageTitle",
      val: "Dashboard",
    });
    this.getData();
  },

  data() {
    return {
      getting: false,
    };
  },

  methods: {
    async getData() {
      try {
        this.getting = true;

        const res = await this.$axios.$get("/user/me");

        this.getting = false;
        if (!res) {
          return;
        }

        const { user } = res;

        this.$store.commit("setUser", user);
      } catch (error) {
        console.log(error);
        this.getting = false;
      }
    },
  },
};
</script>

<style scoped>
.page {
  @apply p-5;
}
</style>
