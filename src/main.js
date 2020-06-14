import Vue from 'vue'
import App from './App.vue'
import VueLoading from 'vuejs-loading-plugin'
import VueRouter from 'vue-router'
import router from './router'
import Toasted from 'vue-toasted';
import VueSimpleAlert from "vue-simple-alert";
import store from './vuex'
import vuetify from './plugins/vuetify';
import CountryFlag from 'vue-country-flag';
import Rate from 'vue-rate';
 
Vue.component('country-flag', CountryFlag)
Vue.use(VueSimpleAlert);
Vue.use(VueLoading,{text:'Please wait..'});
Vue.use(VueRouter);
Vue.use(Toasted,{duration:4000});


Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  vuetify,
  Rate,
  render: h => h(App)
}).$mount('#app')
