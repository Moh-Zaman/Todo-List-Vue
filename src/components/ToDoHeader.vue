<template>
  <section class="header-title-wrapper">
    <h1 class="header-title-text">T O D O</h1>
    <img :src="themeMode" @click="toggleModeHandler" />
  </section>
</template>

<script>
import moonBtn from "../assets/images/icon-moon.svg";
import sunBtn from "../assets/images/icon-sun.svg";

export default {
  name: "ToDoHeader",
  data() {
    return {
      mode: false,
      modeImg: moonBtn,
    };
  },
  methods: {
    toggleModeHandler() {
      this.mode = !this.mode;
    },
  },
  computed: {
    themeMode() {
      return this.mode ? sunBtn : moonBtn;
    },
  },
};
</script>

<style>
.header-title-wrapper {
  display: flex;
  margin-top: 120px;
}

.header-title-wrapper img {
  height: 26px;
  width: 26px;
  /* padding-left: 100px; */
  margin-top: 40px;
  cursor: pointer;
}

.header-title-text {
  color: white;
  font-weight: 700;
  font-size: 30px;
  margin-right: 300px;
}
</style>
