<template>
  <div>
    <h1>fetch</h1>
    <button @click="getData">获取</button>
  </div>
</template>

<script setup lang="ts">
const getData = async () => {
  const res = await useFetch("/api/getData");
  console.log(res.data.value);
  const user = await $fetch('/api/user').catch((error) => error.data)
  console.log(user);
  
};
</script>