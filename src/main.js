// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import NProgress from 'nprogress';
import DefaultLayout from '~/layouts/Default.vue';
import 'nprogress/nprogress.css';
import '~/assets/main.scss';

export default function(Vue, { router, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  if (isClient) {
    const VueWaypoint = require('vue-waypoint').default;
    const { VueTyper } = require('vue-typer');

    Vue.use(VueWaypoint);
    Vue.component('VueTyper', VueTyper);
  }
  // Facebook Opengraph
  NProgress.configure({ showSpinner: false });
  router.beforeEach((to, from, next) => {
    if (isClient) NProgress.start();
    next();
  });
  router.afterEach(() => {
    if (isClient) NProgress.done();
  });
}
