<template>
  <main ref="contain">
    <section class="form">
      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
          />
        </svg>
      </div>
      <h1 class="form__title">Log in to your Account</h1>
      <p class="form__description">
        Welcome back! Please, enter your information
      </p>

      <form action="" onsubmit="return false">
        <label class="form-control__label">Username</label>
        <input type="text" class="form-control" v-model="userInfo.username" />

        <label class="form-control__label">Password</label>
        <div class="password-field">
          <input
            type="password"
            class="form-control"
            minlength="4"
            ref="passwordField"
            v-model="userInfo.password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        </div>
        <div class="password__settings">
          <label class="password__settings__remember">
            <input type="checkbox" v-model="userInfo.remember" />
            <span class="custom__checkbox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            Remember me
          </label>

          <a href="#">Forgot Password?</a>
        </div>
        <button @click="logIn" class="form__submit" id="submit" ref="submit">
          Log In
        </button>
      </form>

      <p class="form__footer">
        Don't have an account?<br />
        <a href="#">Create an account</a>
      </p>
    </section>
    <section class="form__animation">
      <div id="ball" ref="ball">
        <div class="ball">
          <div id="face" ref="face">
            <div class="ball__eyes">
              <div v-for="i in 2" :key="i" class="eye_wrap">
                <span class="eye" ref="eyes"></span>
              </div>
            </div>
            <div class="ball__mouth"></div>
          </div>
        </div>
      </div>
      <div class="ball__shadow"></div>
    </section>
  </main>
</template>
<script lang="ts" setup>
import("~/assets/css/login.scss");
import { ref, reactive, onMounted } from "vue";
definePageMeta({
  layout: "main",
});
const { userInfo, userLogin } = useUserInfo();
const logIn = async () => {
  await userLogin();
};
onMounted(() => {
  dom();
});
const passwordField = ref<Element | null>(null);
const contain = ref<Element | null>(null);
const face = ref<Element | null>(null);
const ball = ref<Element | null>(null);
const submit = ref<Element | null>(null);
const eyes = ref<Element[]>([]);
const handleMouseMove = (event: any) => {
  if (
    !document.querySelector("#password:is(:focus)") &&
    !document.querySelector("#password:is(:user-invalid)")
  ) {
    for (let eye of eyes.value) {
      const x = eye.getBoundingClientRect().left + 10;
      const y = eye.getBoundingClientRect().top + 10;
      const rad = Math.atan2(event.pageX - x, event.pageY - y);
      const rot = rad * (180 / Math.PI) * -1 + 180;
      eye.style.transform = `rotate(${rot}deg)`;
    }
  }
};
const handleFocusPassword = (event: any) => {
  face.value.style.transform = "translateX(30px)";
  const eyes = document.getElementsByClassName("eye");
  for (let eye of eyes.value) {
    eye.style.transform = `rotate(100deg)`;
  }
};
const handleFocusOutPassword = (event: any) => {
  face.value.style.transform = "translateX(0)";
  if (event.target.checkValidity()) {
    ball.value.classList.toggle("sad");
  } else {
    ball.value.classList.toggle("sad");
    const eyes = document.getElementsByClassName("eye");
    for (let eye of eyes.value) {
      eye.style.transform = `rotate(215deg)`;
    }
  }
};
const dom = () => {
  contain.value.addEventListener("mousemove", (event) =>
    handleMouseMove(event)
  );
  passwordField.value.addEventListener("focus", (event) =>
    handleFocusPassword(event)
  );
  passwordField.value.addEventListener("focusout", (event) =>
    handleFocusOutPassword(event)
  );
  submit.value.addEventListener("mouseover", (event) =>
    ball.value.classList.toggle("look_at")
  );

  submit.value.addEventListener("mouseout", (event) =>
    ball.value.classList.toggle("look_at")
  );
};
</script>

<style lang="scss" scoped>
.contain {
  width: 100vw;
  height: 100vh;
}
</style>