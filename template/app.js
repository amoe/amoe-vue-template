// app.js

import Vue from 'vue';
import App from './src/App.vue'

document.addEventListener('DOMContentLoaded', e => {
    new Vue(App).$mount('#app');
});
