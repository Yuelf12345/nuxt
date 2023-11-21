<template>
  <div>
    <h1>page3页面</h1>
    params传参
    <ul>
      <li><NuxtLink to="/page1">page1</NuxtLink></li>
      <li><NuxtLink to="/page3/page3-1">page3-1</NuxtLink></li>
      <li><button @click="Jump">page3-2</button></li>
      <li><NuxtLink to="/page3/page3-3">page3-3 to page3-4</NuxtLink></li>
    </ul>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["router"]
  // or middleware: 'router'
})
const router = useRouter();
const Jump = () => {
  router.push({
    path: "/page3/page3-2",
    params: {
      id: 'page3-2',
    },
  });
};
</script>