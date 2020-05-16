import VueRouter from 'vue-router'
import login from './components/login.vue'
import register from './components/register.vue'
import confirmation from './components/confirmation.vue'
import userDashboard from './components/UserDashboard.vue'
import api from './api'
import Toasted from 'vue-toasted';
import Vue from 'vue'
Vue.use(Toasted,{duration:2000});
const beforeEnterCheck=(to,from,next)=>{
  api.checktoken().then(()=>{next()}).catch(()=>{Vue.toasted.error('Please login to continue');next("/")});
}
const router=new VueRouter({
    mode:'history',
    routes: [
      { path: '/confirmation', component: confirmation },
      { path: '/register', component: register },
      { path: '/home', component: userDashboard,beforeEnter:beforeEnterCheck },
      { path: '/', component: login },

    ]
  })

export default router;