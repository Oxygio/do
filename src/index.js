import Vue from 'vue';
import VueMaterial from 'vue-material';
import Hello from './components/hello.js';

import 'vue-material/dist/vue-material.css';

Vue.use(VueMaterial);

var app = new Vue({
  el: '#app',
  components: {
    HelloWorld: Hello,
  },
  data: {
    message: 'Hello Vue!',
  },
});
