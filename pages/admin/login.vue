<template>
  <div class="page">
    <div class="flex justify-between items-center min-w-[500px]">
      <h5 class="text-xl text-lemon mb-1">Welcome Awesome</h5>
      <p>
        <nuxt-link to="/" class="font-bold text-white block hover:underline">
          Home
        </nuxt-link>
      </p>
    </div>

    <form class="card-box" method="POST" @submit.prevent="login()">
      <h3>Login</h3>

      <div class="input-div">
        <input
          id="username"
          type="email"
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
        <button
          type="submit"
          class="flex justify-center gap-2"
          :disabled="proceeding || !formReady"
        >
          <span>Proceed</span>
          <app-spinner v-if="proceeding"></app-spinner>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",

  layout: "auth",

  data() {
    return {
      proceeding: false,
      form: {
        username: null,
        password: null,
      },
    };
  },

  mounted() {
    this.$store.dispatch("logout");
  },

  computed: {
    formReady() {
      return Boolean(this.form.username) && Boolean(this.form.password);
    },
  },

  methods: {
    async login() {
      if (!this.formReady) {
        this.$swal({
          icon: "error",
          text: "Fill all required fields",
        });
        return;
      }

      try {
        this.proceeding = true;

        const res = await this.$axios.$post("/auth/login", this.form, {
          headers: { noauth: true },
        });

        this.proceeding = false;
        if (!res) {
          return;
        }

        const { user, token } = res;

        this.$store.commit("setUser", user);
        this.$store.commit("setValue", {
          key: "token",
          val: token,
        });
        this.$store.commit("setValue", {
          key: "loggedIn",
          val: true,
        });

        this.$router.push({ name: "admin" });
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
  @apply font-lato flex flex-col text-white justify-center items-center;
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
