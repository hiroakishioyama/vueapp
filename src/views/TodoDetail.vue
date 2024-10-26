<template>
    <div v-if="todo" class="bg-white p-6 rounded shadow-lg">
      <h1 class="text-2xl font-bold mb-4">Todo詳細</h1>
      <p class="mb-2"><span class="font-semibold">ID:</span> {{ todo.id }}</p>
      <p class="mb-4"><span class="font-semibold">タイトル:</span> {{ todo.title }}</p>
      <router-link to="/" class="text-blue-600 hover:underline mt-4 inline-block">戻る</router-link>
    </div>
    <div v-else class="text-red-600">
      <p>Todoが見つかりませんでした。</p>
      <router-link to="/" class="text-blue-600 hover:underline">戻る</router-link>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useTodoStore } from '../stores/todoStore';
  
  const route = useRoute();
  const todoStore = useTodoStore();
  const todo = computed(() => todoStore.getTodoById(route.params.id));
  </script>
  