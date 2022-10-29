import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import Parent from './components/Parent.vue'

const routes = [
  { path: "/", name: "helloWorld", component: HelloWorld },
  { path: "/slot", name: "parent", component: Parent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
