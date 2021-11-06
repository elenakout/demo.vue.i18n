import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import i18n from '../i18n';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  i18n.locale = localStorage.getItem('language') || 'gr';
  return next();
});

export default router;

// {
//   path: "/:lang",
//   component: RouterView,
//   beforeEnter(to, from, next) {
//     const lang = to.params.lang;
//     if (!["en", "de"].includes(lang)) return next("de");
//     if (i18n.locale !== lang) {
//       i18n.locale = lang;
//     }
//     return next();
//   },
//   children: [
//     {
//       path: "home",
//       name: "home",
//       component: Home
//     },
//     {
//       path: "about",
//       name: "about",
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
//       component: () =>
//         import(/* webpackChunkName: "about" */ "./views/About.vue")
//     }
//   ]
// },
// {
//   path: "*",
//   redirect: "/de"
// }
