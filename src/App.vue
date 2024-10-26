<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-100">
    <header class="bg-blue-600 text-white p-4">
      <nav class="container mx-auto">
        <router-link to="/" class="text-lg font-semibold hover:text-blue-200">Todoリスト</router-link>
      </nav>
    </header>
    <main class="flex-grow container mx-auto p-4">
      <router-view />
    </main>
    <footer class="bg-gray-800 text-white py-2 text-center">
      <p>© 2024 My Todo App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
