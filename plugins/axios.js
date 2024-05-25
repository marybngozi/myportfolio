import { Popup } from "../mixins/swal.js";

export default function ({ $axios, store }) {
  $axios.interceptors.request.use((config) => {
    if (!config.headers.noauth) {
      const token = store.state.token;

      if (!token) {
        window.location.href = "/";
        return config;
      }

      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  });

  $axios.onError((error) => {
    if (error.response.status === 404) {
      Popup.fire({
        text: error.response.data.message,
        icon: "error",
      });
      return false;
    }
    if (error.response.status === 500) {
      Popup.fire({
        text: "Internal server error, please try again later.",
        icon: "error",
      });
      return false;
    }
  });
}
