<template>
    <div>{{ color }} </div>
    <div>{{ people.name}} </div>
    <NuxtLink to="/about">about</NuxtLink>
    <button @click="handleJump">about</button>
    <h3>二级路由</h3>
    <NuxtPage />
</template>
 
<script setup lang='ts'>
//直接使用下面这俩函数，无需导入，因为Nuxt帮我们导入了
const color = useColor() 
const people = usePeople()
 
//在js代码中使用    
const func = ()=>{
    if(color.value === 'red'){
        console.log('是红色')
    }
}
const handleJump = () =>{
    navigateTo('/about')
}
</script>