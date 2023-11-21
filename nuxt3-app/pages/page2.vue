<template>
  <div>
    <h1>page2页面</h1>
    query传参
    <ul>
      <li><NuxtLink to="/page1">page1</NuxtLink></li>
      <li><NuxtLink to="/page2/page2-1?id=2-1">page2-1</NuxtLink></li>
      <li><button @click="Jump">page2-2</button></li>
    </ul>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const Jump = () => {
  router.push({
    path: "/page2/page2-2",
    query: {
      id: '2-2',
    },
  });
};
</script>