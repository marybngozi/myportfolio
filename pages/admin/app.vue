<template>
  <div class="page">
    <div>
      <h2>Hello Dashboard</h2>
    </div>
    <div>
      <button
        class="bg-navyBlue text-lemon p-4 cursor-pointer"
        @click="$auth.logout()"
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
};
</script>

<style scoped>
.page {
  @apply p-5;
}
</style>
