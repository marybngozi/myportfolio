<template>
  <div class="page">
    <section class="card-box" method="POST">
      <h3>Login</h3>
      <div class="input-div">
        <input
          id="username"
          type="text"
          placeholder="enter username"
          v-model="form.username"
        />
        <label for="username">Username</label>
      </div>

      <div class="input-div">
        <input
          type="password"
          id="password"
          placeholder="enter password"
          v-model="form.password"
        />
        <label for="password">Password</label>
      </div>

      <div class="flex justify-center">
        <button @click="login()" class="">Proceed</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",

  middleware: "guest",

  data() {
    return {
      proceeding: false,
      form: {
        username: "marybngozi",
        password: "12qw!@QW",
      },
    };
  },

  methods: {
    async login() {
      try {
        this.proceeding = true;
        this.$auth.loginWith("local", {
          data: this.form,
        });
        this.proceeding = false;
      } catch (error) {
        console.log(error);
        this.proceeding = false;
      }
    },
  },
};
</script>

<style scoped>
.page {
  background: #001528 !important;
  height: 100vh;
  width: 100%;
  @apply font-lato flex text-white justify-center items-center;
}
.card-box {
  @apply rounded border border-lightLemon shadow w-11/12 px-4 py-5;
  max-width: 500px;
}
h3 {
  @apply text-3xl text-lemon mb-5;
}
.card-box button {
  @apply w-full;
  border: 1px solid #6ef4ac;
  background-color: #6ef4ac;
  color: #0f1e2c;
  padding: 0.625rem 0.7rem;
}
</style>
