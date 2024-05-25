<template>
  <div class="page">
    <div>
      <h2>Hello Dashboard</h2>
      <h3>{{ $store.state.loggedIn }}</h3>
    </div>

    <div>
      <button
        class="bg-navyBlue text-lemon p-4 cursor-pointer"
        @click="logout()"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",

  middleware: "auth",

  layout: "user",

  mounted() {
    this.getData();
  },

  data() {
    return {
      getting: false,
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "admin-login" });
    },

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
