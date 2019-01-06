import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import BootstrapVue from 'bootstrap-vue';
import Icon from 'vue-awesome/components/Icon.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons';

import App from './App.vue';
import './scss/main.scss';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA5RiSzy4t_2syOcRxEA-Fl_M3Tvu3GzU4',
  },
});

Vue.use(BootstrapVue);
Vue.component('v-icon', Icon);

new Vue({
  render: h => h(App),
}).$mount('#app');
