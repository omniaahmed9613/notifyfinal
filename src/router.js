import VueRouter from "vue-router";
import login from "./components/login.vue";
import register from "./components/register.vue";
import confirmation from "./components/confirmation.vue";
import userDashboard from "./components/UserDashboard.vue";
import api from "./api";
import Toasted from "vue-toasted";
import Vue from "vue";
import NotifyApp from "./components/NotifyApp.vue";
import UserHome from "./components/UserHome.vue";
import NotifyOptions from './components/NotifyOptions.vue'
import Currency from './components/Currency.vue';
import Metals from './components/Metals.vue';
import MoreFeatures from './components/MoreFeatures.vue';
Vue.use(Toasted, { duration: 2000 });
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
const beforeEnterCheck = (to, from, next) => {
  api
    .checktoken()
    .then(() => {
      next();
    })
    .catch(() => {
      Vue.toasted.error("Please login to continue");
      next("/");
    });
};
const beforeEnterLogin = async (to, from, next) => {
  api
    .checktoken()
    .then(() => {
      next("/home");
    })
    .catch(() => {
      localStorage.removeItem('user-info');
      next();
    });
};
const beforeEnteroptions = async (to, from, next) => {
  if (to.params.price) return next();
  next('/home/main')

}

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: userDashboard,
      beforeEnter: beforeEnterCheck,
      
      children: [
        {
          path: "main",
          name: "main",
          component: NotifyApp,

        },
        {
          path: "options",
          name: "options",
          component: NotifyOptions,
          beforeEnter: beforeEnteroptions,



        },
        {
          path: "currency",
          name: "currency",
          component: Currency,
        },
        {
          path: "metals",
          name: "metals",
          component: Metals,
        },
        {
          path: "morefeatures",
          name: "morefeatures",
          component: MoreFeatures
        },
        {
          path: "",
          name: "",
          component: UserHome,

        },

      ]
    },
    { path: "/confirmation", component: confirmation },
    { path: "/register", component: register },
    { path: "/", component: login, beforeEnter: beforeEnterLogin },
    { path: "/login", component: login, beforeEnter: beforeEnterLogin },
  ]
});

export default router;
