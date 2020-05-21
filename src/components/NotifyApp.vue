<template>
<div class="d-flex justify-content-center">
  
  <div class="flex-column  mt-5 ">
  
<img style="mix-blend-mode: multiply;" :src="this.$store.getters.website.websitesrc"  width="400" alt="no pic" />
<form class="mt-5">
   
    <v-text-field label="Enter the product link here" :rules="rules" hide-details="auto"></v-text-field>

 
<v-switch v-model="anypricedrop" class="mx-2 mt-5" color="#164e87" label="Email me when the price drops" :disabled="specificpricedrop"></v-switch>
<v-switch v-model="specificpricedrop" class="mx-2 mt-5" color="#164e87" :disabled="anypricedrop"   label="Email me only when the price drops below" ref="spd"></v-switch>
</form>
</div>

</div>

</template>

<script>
export default {
  data() {
    return {
   anypricedrop:false,
   specificpricedrop:false,
   spcificprice:null,
    rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    };
    
  },methods:{
 
  }
};
</script>

<style>
</style>