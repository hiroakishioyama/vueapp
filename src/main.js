// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

// ルート設定
import TodoList from './views/TodoList.vue';
import TodoDetail from './views/TodoDetail.vue';

const routes = [
  { path: '/', component: TodoList },
  { path: '/todo/:id', component: TodoDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
