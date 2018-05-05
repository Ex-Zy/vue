import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import UserList from '@/views/UserList.vue';
import UserEdit from '@/views/UserEdit.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "user-list",
      component: UserList
    },
    {
      path: "/user-edit",
      name: "user-edit",
      component: UserEdit
    }
  ]
});
