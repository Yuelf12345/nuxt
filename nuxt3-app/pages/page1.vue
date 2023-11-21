<template>
  <div>
    <h1>page1页面</h1>
    <button @click="Jump">page2</button>
    <NuxtLink to="/page3">page3</NuxtLink>
    <NuxtLink to="/page4">page4</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const Jump = () => {
  navigateTo("/page2");
};
</script>