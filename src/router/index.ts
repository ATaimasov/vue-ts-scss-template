import { createRouter, createWebHistory } from 'vue-router';
import Works from '@views/WorksView.vue';
import About from '@views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/works',
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active',
});

export default router;
