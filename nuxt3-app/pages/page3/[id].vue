<template>
    <div>
      <h1>{{route.params.id}}页面</h1>
      params参数:{{route.params.id}}
    </div>
  </template>
  
  <script setup lang="ts">
  const route = useRoute()
  </script>