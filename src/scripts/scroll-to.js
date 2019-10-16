
import Vue from "vue";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  el: '.wrapper',
  data: {
    links: [
      { href: '#firstscreen', text: 'Главная' },
      { href: '#about', text: 'Обо мне' },
      { href: '#skills', text: 'Навыки' },
      { href: '#works', text: 'Работы' },
      { href: '#reviews', text: 'Отзывы' },
      { href: '#contacts', text: 'Связаться' }
    ]
  }
});