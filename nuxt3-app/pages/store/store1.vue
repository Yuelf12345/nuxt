<template>
  <div>
    <h4>姓名:{{ person.name }}</h4>
    <h4>年龄:{{ person.age }}</h4>
  </div>
</template>

<script setup lang="ts">
const person = usePerson()
</script> 
