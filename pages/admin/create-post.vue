<template>
  <div>
    <div class="flex justify-start mb-3">
      <nuxt-link to="/admin/blogs" class="underline text-lemon py-1">
        <span>&#8592;</span>
        <span>List Blog Post</span>
      </nuxt-link>
    </div>

    <div class="w-full lg:max-w-3xl mt-4">
      <div class="input-group">
        <label for="title">Post Title</label>
        <input
          type="text"
          name="title"
          id="title"
          v-model="form.title"
          placeholder="We will all live"
        />
      </div>

      <div class="input-group">
        <label for="title">Post Status</label>
        <v-select
          :options="statusOptions"
          label="label"
          :reduce="(b) => b.value"
          v-model="form.status"
        >
        </v-select>
      </div>

      <div class="mt-4 input-group">
        <label for="content">Post Content</label>
        <AppEditor v-model="form.content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminBlog",

  layout: "user",

  data() {
    return {
      form: {
        title: null,
        content: "",
        categories: [],
        status: "draft",
      },
      statusOptions: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
        { label: "Deleted", value: "deleted" },
      ],
    };
  },

  mounted() {
    this.$store.commit("setValue", {
      key: "pageTitle",
      val: "Create Blog Post",
    });
  },
};
</script>

<style scoped></style>
