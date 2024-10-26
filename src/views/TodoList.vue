<template>
    <div>
      <!-- Todoリストの見出し -->
      <h1 class="text-2xl font-bold mb-4">Todoリスト</h1>
  
      <!-- 新しいTodoを入力・追加する部分 -->
      <div class="flex mb-4">
        <input
          v-model="newTodoTitle"
          placeholder="新しいTodoを追加"
          class="border border-gray-300 rounded p-2 flex-grow mr-2"
        />
        <!-- Todoを追加するボタン -->
        <button @click="addNewTodo" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          追加
        </button>
      </div>
  
      <!-- Todoアイテムの一覧表示 -->
      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="flex items-center justify-between border-b border-gray-300 py-2"
        >
          <!-- Todoタイトルを表示し、クリックで詳細ページに遷移 -->
          <router-link :to="`/todo/${todo.id}`" class="text-lg hover:underline">
            {{ todo.title }}
          </router-link>
          
          <!-- Todoアイテムの削除ボタン -->
          <button @click="removeTodo(todo.id)" class="text-red-600 hover:text-red-800">
            削除
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  // Vueのrefとcomputed関数をインポート
  import { ref, computed } from 'vue';
  // Todoの状態管理ストアをインポート
  import { useTodoStore } from '../stores/todoStore';
  
  // ストアを使用して、リアクティブなTodoデータを取得
  const todoStore = useTodoStore();
  // todos配列をリアクティブに監視するため、computedで取得
  const todos = computed(() => todoStore.todos);
  // 新しいTodoのタイトルを一時的に保持するref
  const newTodoTitle = ref('');
  
  // 新しいTodoを追加する関数
  const addNewTodo = () => {
    // 入力が空でない場合にTodoを追加
    if (newTodoTitle.value.trim()) {
      todoStore.addTodo(newTodoTitle.value);
      // 入力フィールドをリセット
      newTodoTitle.value = '';
    }
  };
  
  // 特定のTodoを削除する関数
  const removeTodo = (id) => {
    // ストアのremoveTodo関数を呼び出して削除
    todoStore.removeTodo(id);
  };
  </script>
  