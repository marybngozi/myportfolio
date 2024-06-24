<template>
  <div class="w-full mt-4">
    <div class="flex justify-end mb-3">
      <nuxt-link to="/admin/create-post" class="btn-outline">
        Create New Post
      </nuxt-link>
    </div>

    <table-api-table
      apiUrl="/user/list-blog"
      :fields="fields"
      :show-page="true"
      :show-search="true"
      placeholder="Search by name, phone number or email"
    >
    </table-api-table>
  </div>
</template>

<script>
export default {
  name: "AdminBlog",

  layout: "user",

  data() {
    const tc = "bg-navyBlue py-3.5 text-cadet font-semibold text-sm";
    const dc = "py-2 text-xs text-romanSilver";
    return {
      fields: [
        {
          name: "id",
          title: "S/N",
          titleClass: `${tc} text-left pl-4 `,
          dataClass: `${dc} text-left pl-4`,
        },

        {
          name: "clockInTime",
          title: "Clock-In Time",
          titleClass: `${tc} text-left pl-4 `,
          dataClass: `${dc} text-left pl-4 w-32`,
          formatter: (val) =>
            !val ? "-" : this.moment(val).format("DD MMM YYYYY hh:mm:ss a"),
        },
        {
          name: "clockOutTime",
          title: "Clock-Out Time",
          titleClass: `${tc} text-left pl-4 `,
          dataClass: `${dc} text-left pl-4 w-32`,
          formatter: (val) =>
            !val ? "-" : this.moment(val).format("DD MMM YYYYY hh:mm:ss a"),
        },
        {
          name: "clockInLocation",
          title: "Clock-In Location",
          titleClass: `${tc} text-left pl-4 `,
          dataClass: `${dc} text-left pl-4`,
        },
        {
          name: "clockOutLocation",
          title: "Clock-Out Location",
          titleClass: `${tc} text-left pl-4 `,
          dataClass: `${dc} text-left pl-4`,
        },
      ],
    };
  },

  mounted() {
    this.$store.commit("setValue", {
      key: "pageTitle",
      val: "Blog Posts",
    });
  },
};
</script>

<style scoped></style>
