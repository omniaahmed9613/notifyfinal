<template>
 <div class="container-fluid text-center" style="height:100%" id="info">
    <img src="../logo/white_notify.png" alt="" class="mx-auto d-block pt-5">
<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-4 mt-5">
    <h2 class="mt-5">Almost there...</h2>
    <p>Please check your email ({{this.$store.state.newEmail}}) <br> to confirm your account.</p>
    <hr>
    <p class="mt-5 pt-3">If {{this.$store.state.newEmail}} is not your email address,<br> please <router-link  to="/register">go back</router-link> and enter the correct one.</p>
    <p class="mt-5 pt-3 ">If you haven't received our email in 15 minutes,<br> please check your spam folder.</p>
  </div>
  <div class="col-sm-4"></div>
  </div>
</div>
 
</template>

<script>
export default {

}
</script>

<style scoped>
#info{
  background-color: #164e87;
  color: white;
}
</style>

