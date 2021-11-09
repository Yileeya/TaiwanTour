import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../components/Layouts/AppLayout'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../components/Home/IndexPage')
      },
    ],
  },


];


const router = new VueRouter({
  routes,
});

export default router;
