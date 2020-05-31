<template>
  <div class="container mt-5">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../logo/backbannerslide.png"),
        },
        {
          src: require("../logo/fullbck.png"),
        },
        {
          src: require("../logo/H&M-Logo.svg"),
        },
        {
          src: require("../logo/Souq_Logo_Primary_EN.svg"),
        },
        {
          src: require("../logo/Souq_Logo_Primary_EN.svg"),
        },
      ],
      slides: ["WELCOME TO", "OUR", "NOTIFY", "WEBSITE", "Fifth"],
    };
  },
};
</script>

<style></style>
