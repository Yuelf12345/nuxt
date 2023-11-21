<template>
    <div>
      <h1>page2-2页面</h1>
      query参数:{{route.query.id}}
    </div>
  </template>

<script setup lang="ts">
const route = useRoute()
</script>