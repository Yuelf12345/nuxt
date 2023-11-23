<template>
  <div>
    <h1>store页面</h1>
    <NuxtLink to="/store/store1">store1</NuxtLink>
    <NuxtLink to="/store/store2">store2</NuxtLink>
    <NuxtPage />
  </div>
</template>
  
  <script lang="ts" setup>
const headers = useRequestHeaders(["cookie"]);
console.log("headers", headers);
</script>