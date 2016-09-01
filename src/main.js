import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/moment': {
    name: 'moment',
    component: require('components/moment/Moment.vue')
  },
  '/my-moment': {
    name: 'my-moment',
    component: require('components/my-moment/MyMoment.vue')
  }
});

router.start(App, 'body');
