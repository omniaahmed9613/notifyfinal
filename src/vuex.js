import Vuex from 'vuex';
import Vue from 'vue';
import VuexPersist from 'vuex-persist'
const vuexPersist = new VuexPersist({
    key: 'user-info',
    storage: window.sessionStorage
  })
Vue.use(Vuex);
const store =new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state:{
    user:null,
    newEmail:null,
    },
    mutations:{
    setEmail(state,email){
        state.newEmail=email
    },
    assignUser(state,user){
        state.user=user;
    },
    assignpicture(state,picture){
        state.user.picture=picture;
    }
    },
    getters:{
    userImage:state=>{
        return state.user.picture;
    },
    userEmail:state=>{
    return state.user.email;
    },
    userName:state=>{
        return `${state.user.firstname} ${state.user.lastname}`
    }
    }
})
export default store;