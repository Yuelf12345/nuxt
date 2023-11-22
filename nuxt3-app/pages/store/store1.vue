<template>
  <div>
    <h1>store1</h1>
    <h4>姓名:{{ userInfo.name }}</h4>
    <h4>年龄:{{ userInfo.age }}</h4>
      <button @click="setAge(+1)">+</button>
      <button @click="setAge(-1)">-</button>
  </div>
</template>

<script setup lang="ts">
const {userInfo,setAge} = usePerson()
</script> 
