import Vue from 'vue';
import App from './components/app.vue';
import i18n from './i18n';

new Vue({
  el: '#app',
  render: (h) => h(App),
  i18n
});
