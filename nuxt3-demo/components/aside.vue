<template>
  <nav class="main-menu">
    <h1>Fitness App</h1>
    <img
      class="logo"
      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4cfdcb5a-0137-4457-8be1-6e7bd1f29ebb"
      alt=""
    />
    <ul>
      <li
        v-for="(item, index) in navItems"
        :key="index"
        class="nav-item"
        :class="{ active: index == isActive }"
        @click="handleActive(item, index)"
      >
        <b></b>
        <b></b>
        <a>
          <i class="fa fa-house nav-icon"></i>
          <span class="nav-text">{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { ref } from "vue";
const navItems = ref([
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Profile",
    path: "/home",
  },
  {
    title: "Schedule",
    path: "/home",
  },
  {
    title: "Activities",
    path: "/home",
  },
  {
    title: "Settings",
    path: "/home",
  },
]);
const isActive = ref<number>(0);
const handleActive = (item, index: number) => {
  console.log("item", item);
  isActive.value = index;
};
</script>
<style lang="scss" scoped>
nav {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
}
nav ul,
nav ul li {
  outline: 0;
}
nav ul li a {
  text-decoration: none;
}
.main-menu {
  min-height: 100vh;
  overflow: hidden;
  background: rgb(73, 57, 113);
  padding-top: 10px;
  border-radius: 15px 0 0 15px;
  font-family: "Roboto", sans-serif;
  & h1 {
    display: block;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    margin: 20px 0 30px;
    color: #fff;
    font-family: "Nunito", sans-serif;
  }
}
.logo {
  display: none;
}
.nav-item {
  position: relative;
  display: block;
}

.nav-item a {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  padding: 15px 0;
  margin-left: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.nav-item b:nth-child(1) {
  position: absolute;
  top: -15px;
  height: 15px;
  width: 100%;
  background: #fff;
  display: none;
}

.nav-item b:nth-child(1)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
  background: rgb(73, 57, 113);
}

.nav-item b:nth-child(2) {
  position: absolute;
  bottom: -15px;
  height: 15px;
  width: 100%;
  background: #fff;
  display: none;
}

.nav-item b:nth-child(2)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 20px;
  background: rgb(73, 57, 113);
}

.nav-item.active b:nth-child(1),
.nav-item.active b:nth-child(2) {
  display: block;
}

.nav-item.active a {
  text-decoration: none;
  color: #000;
  background: rgb(254, 254, 254);
}

.nav-icon {
  width: 60px;
  height: 20px;
  font-size: 20px;
  text-align: center;
}

.nav-text {
  display: block;
  width: 120px;
  height: 20px;
  font-family: "Mulish", sans-serif;
}
</style>