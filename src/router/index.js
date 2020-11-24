import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login";
import index from "@/views/Home";
import Home from "@/views/Modelu/Home";
import member from "@/views/member";
import staff from "@/views/staff";
import supplier from "@/views/supplier";
import goods from "@/views/goods";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/index",
    name: "index",
    component: index,
    redirect:'/Home',
    children:[
      {
        path: "/Home",
        name: "Home",
        component: Home
      },
      {
        path: "/member",
        name: "member",
        component: member
      },
      {
        path: "/staff",
        name: "staff",
        component: staff
      },
      {
        path: "/supplier",
        name: "supplier",
        component: supplier
      },
      {
        path: "/goods",
        name: "goods",
        component: goods
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
