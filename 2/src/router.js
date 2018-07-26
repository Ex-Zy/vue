import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/index.vue")
    },
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/users.vue")
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("@/views/edit.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("@/views/add.vue")
    }
  ]
});
