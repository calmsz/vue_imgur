import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';

library.add(faImages);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
