<template>
  <div class="">
    <admin-left-nav-menu :links="links"> </admin-left-nav-menu>
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
          to: "/admin/blog",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
