<template>
  <div class="container">
    <div class="main">
      <Aside></Aside>
      <div>
        <Header></Header>
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 13% 87%;
  min-height: 100vh;
  width: 100%;
  background: rgb(254, 254, 254);
  box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
    0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
  z-index: 10;
}
</style>
    