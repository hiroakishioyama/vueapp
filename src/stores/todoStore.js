// src/stores/todoStore.js
import { defineStore } from 'pinia';

// Todoリストの状態を管理するストアを定義
export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [], // Todoアイテムのリスト
    nextId: 1, // 次に追加するTodoのID
  }),
  actions: {
    // 新しいTodoをリストに追加する関数
    addTodo(title) {
      // 新しいTodoオブジェクトをtodos配列に追加
      this.todos.push({ id: this.nextId++, title, completed: false });
    },
    // 特定のIDを持つTodoを削除する関数
    removeTodo(id) {
      // todos配列から指定されたIDのTodoを除外し、リアクティブに更新
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    // 特定のIDに基づいてTodoを取得する関数
    getTodoById(id) {
      // 配列から指定のIDを持つTodoを検索して返す
      return this.todos.find(todo => todo.id === parseInt(id));
    },
  },
});
