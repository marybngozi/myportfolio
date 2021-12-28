<template>
  <div id="nav-icon" :style="`width: ${width}px; height: ${height}px;`">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    clicked: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 33,
    },
  },

  watch: {
    clicked() {
      document.querySelector("#nav-icon").classList.toggle("open")
    },
  },
}
</script>

<style scoped>
#nav-icon {
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
#nav-icon span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  background: #6ef4ac;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}
#nav-icon span:nth-child(1) {
  top: 0px;
}
#nav-icon span:nth-child(2) {
  top: 10px;
}

#nav-icon span:nth-child(3) {
  top: 20px;
}
#nav-icon.open {
  margin-top: -0.6rem;
}
#nav-icon.open span:nth-child(1) {
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}
#nav-icon.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}
#nav-icon.open span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>
