<template>
  <div class="">
    <admin-left-nav-menu :links="links"> </admin-left-nav-menu>

    <button
      class="bg-navyBlue text-lemon p-4 cursor-pointer flex items-center gap-2 border-t border-lemon w-full"
      @click="logout()"
    >
      <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="text-xl" />
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: "AdminSideNav",

  data() {
    return {
      links: [
        {
          label: "Dashboard",
          icon: "synagogue",
          to: "/admin",
        },
        {
          label: "Skills",
          icon: "star",
          to: "/admin/skills",
        },
        {
          label: "Experience",
          icon: "sun",
          to: "/admin/tech-experience",
          links: [
            {
              label: "Tech Experience",
              icon: "sliders-h",
              to: "/admin/tech-experience",
            },
            {
              label: "Life Experience",
              icon: "sliders-h",
              to: "/admin/life-experience",
            },
          ],
        },
        {
          label: "Blog",
          icon: "sun",
          to: "/admin/blogs",
        },
      ],
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "admin-login" });
    },
  },
};
</script>

<style scoped></style>
