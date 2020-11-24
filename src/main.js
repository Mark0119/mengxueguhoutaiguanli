import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//配置axios的信息
import axios from "@/utils/request";
Vue.prototype.$axios = axios;

//配置echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

//配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
