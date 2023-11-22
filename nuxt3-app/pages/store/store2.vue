<template>
  <div>
    <h1>store2</h1>
    <h4>年龄:{{ userInfo.age }}</h4>
  </div>
</template>

<script setup lang="ts">
const {userInfo} = usePerson()
</script> 
