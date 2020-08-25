// 3rd Party
import Vue from "vue";
import VueFirestore from "vue-firestore";
// Components
import App from "./App.vue";
// Config
Vue.use(VueFirestore);
Vue.config.productionTip = false;
// Init
new Vue({
  render: (h) => h(App),
}).$mount("#app");
