<template>
  <div>
    <h1>欢迎来到首页</h1>
    <AppAlert> 这是一个自动导入的组件。 </AppAlert>
    <NuxtLink to="/">index</NuxtLink>
    <!-- router-view -->
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
useHead({
  title: "我的应用",
  meta: [{ name: "越大大", content: "我的神奇网站。" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('啊啊啊啊~')" }],
});
</script>
