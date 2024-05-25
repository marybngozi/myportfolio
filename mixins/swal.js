import Swal from "sweetalert2/dist/sweetalert2.js";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

export const Popup = Swal.mixin({
  confirmButtonColor: "#030920d6",
  // confirmButtonColor: "#6ef4ac",
  cancelButtonColor: "#ff7674",
  allowOutsideClick: false,
  backdrop: "#030920d6",
  customClass: {
    popup: "bg-[#001528] bordered-green",
  },
});
