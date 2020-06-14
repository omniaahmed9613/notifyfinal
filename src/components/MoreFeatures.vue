<template>
  <div class="container">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
      <form class="mt-5" @submit.prevent="submitInfo">
        <!-- <v-textarea
            background-color="grey lighten-2"
            color="#164e87"
            label="Enter Your Recommendations..."

            height="300"
            class="text-center"
            v-model="msg"
        ></v-textarea>-->
        <!-- <v-col cols="12" md="6">
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
        ></v-textarea>
        </v-col>-->

        <v-container fluid>
          <v-textarea autocomplete="email" label="Enter Your Recommendations..." v-model="msg"></v-textarea>
        </v-container>

        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          class="text-right"
        ></v-rating>
        <div class="d-flex justify-content-end">
          <v-btn
            type="submit"
            class="white--text mt-5 ml-auto"
            color="#164e87"
            :loading="loading"
          >Send</v-btn>
        </div>
      </form>
    </div>
    <div class="col-sm-2"></div>
  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      msg: null,
      rating: null,
      loading: false
    };
  },
  methods: {
    submitInfo() {
      if (this.msg == null || this.rating == null) {
        return this.$alert("Kindly Fill This Form ", "error");
      }
      api
        .MoreFeatures(
          this.msg,
          this.rating,
          this.$store.getters.userEmail,
          this.$store.getters.userName
        )
        .then(() => {
          this.$alert("Message Sent Successfully ", "success");
        });
    }
  }
};
</script>

<style>
</style>