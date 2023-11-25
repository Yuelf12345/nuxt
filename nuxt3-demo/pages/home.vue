<template>
  <section class="content">
    <div class="left-content">
      <div class="activities">
        <div class="activity-container">
          <div
            v-for="i in 6"
            :key="i"
            class="image-container"
            :class="getClass(i)"
          >
            <img
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd"
              alt="tennis"
            />
            <div class="overlay">
              <h3>Tennis</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="left-bottom">
        <div class="weekly-schedule">
          <h1>Weekly Schedule</h1>
          <div class="calendar">
            <div
              class="day-and-activity activity-one"
              v-slid-in
              v-for="i in 9"
              :key="i"
            >
              <div class="day">
                <h1>{{ i }}</h1>
                <p>mon</p>
              </div>
              <div class="activity">
                <h2>Swimming</h2>
                <div class="participants">
                  <img
                    v-for="i in 3"
                    :key="i"
                    src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c61daa1c-5881-43f8-a50f-62be3d235daf"
                    alt=""
                  />
                </div>
              </div>
              <button class="btn">Join</button>
            </div>
          </div>
        </div>

        <div class="personal-bests">
          <h1>Personal Bests</h1>
          <div class="personal-bests-container">
            <div class="best-item box-one">
              <p>Fastest 5K Run: 22min</p>
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27"
                alt=""
              />
            </div>
            <div class="best-item box-two">
              <p>Longest Distance Cycling: 4 miles</p>
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a3b3cb3a-5127-498b-91cc-a1d39499164a"
                alt=""
              />
            </div>
            <div class="best-item box-three">
              <p>Longest Roller-Skating: 2 hours</p>
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e0ee8ffb-faa8-462a-b44d-0a18c1d9604c"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right-content">
      <div class="active-calories">
        <h1 style="align-self: flex-start">Active Calories</h1>
        <div class="active-calories-container">
          <div class="box" style="--i: 85%">
            <div class="circle">
              <h2>85<small>%</small></h2>
            </div>
          </div>
          <div class="calories-content">
            <p><span>Today:</span> 400</p>
            <p><span>This Week:</span> 3500</p>
            <p><span>This Month:</span> 14000</p>
          </div>
        </div>
      </div>
      <div class="friends-activity">
        <h1>Friends Activity</h1>
        <div class="card-container">
          <div class="card" v-for="i in 2" :key="i">
            <div class="card-user-info">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/42616ef2-ba96-49c7-80ea-c3cf1e2ecc89"
                alt=""
              />
              <h2>Mike</h2>
            </div>
            <img
              class="card-img"
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2dcc1b94-06c5-4c62-b886-53b9e433fd44"
              alt=""
            />
            <p>We completed the 30-Day Running Streak Challenge!🏃‍♀️🎉</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const getClass = (i: number) => {
  return `img-${i}`;
};
</script>
<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: 75% 25%;
}

/* LEFT CONTENT */

.left-content {
  display: grid;
  grid-template-rows: 40% 60%;
  background: #f6f7fb;
  margin: 15px;
  padding: 20px;
  border-radius: 15px;
}

/* ACTIVITIES */

.activities h1 {
  margin: 0 0 20px;
  font-size: 1.4rem;
  font-weight: 700;
}

.activity-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 150px);
  column-gap: 10px;
}

.img-1 {
  grid-area: 1 / 1 / 2 / 2;
}

.img-2 {
  grid-area: 2 / 1 / 3 / 2;
}

.img-3 {
  display: block;
  grid-area: 1 / 2 / 3 / 4;
}

.img-4 {
  grid-area: 1 / 4 / 2 / 5;
}

.img-5 {
  grid-area: 1 / 5 / 2 / 6;
}

.img-6 {
  display: block;
  grid-area: 2 / 4 / 3 / 6;
}

.image-container {
  position: relative;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
  border-radius: 10px;
}

.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent,
    transparent,
    rgba(3, 3, 185, 0.5)
  );
  border-radius: 10px;
  transition: all 0.6s linear;
}

.image-container:hover .overlay {
  opacity: 0;
}

.overlay h3 {
  margin-bottom: 8px;
  margin-right: 10px;
  color: #fff;
}

/* LEFT BOTTOM */

.left-bottom {
  display: grid;
  grid-template-columns: 55% 40%;
  gap: 40px;
}

/* WEEKLY SCHEDULE */

.weekly-schedule {
  display: flex;
  flex-direction: column;
}

.weekly-schedule h1 {
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 700;
}

.calendar {
  margin-top: 10px;
  height: 500px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
}

.day-and-activity {
  display: grid;
  grid-template-columns: 15% 60% 25%;
  align-items: center;
  border-radius: 14px;
  margin-bottom: 5px;
  color: #484d53;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
}

.activity-one {
  background-color: rgb(124, 136, 224, 0.5);
  background-image: linear-gradient(
    240deg,
    rgb(124, 136, 224) 0%,
    #c3f4fc 100%
  );
}

.activity-two {
  background-color: #aee2a4a1;
  background-image: linear-gradient(240deg, #e5a243ab 0%, #f7f7aa 90%);
}

.activity-three {
  background-color: #ecfcc376;
  background-image: linear-gradient(240deg, #97e7d1 0%, #ecfcc3 100%);
}

.activity-four {
  background-color: #e6a7c3b5;
  background-image: linear-gradient(240deg, #fc8ebe 0%, #fce5c3 100%);
}

.day {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-10px);
}

.day h1 {
  font-size: 1.6rem;
  font-weight: 600;
}

.day p {
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  transform: translateY(-3px);
}

.activity {
  border-left: 3px solid #484d53;
}

.participants {
  display: flex;
  margin-left: 20px;
}

.participants img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  z-index: calc(2 * var(--i));
  margin-left: -10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
}

.activity h2 {
  margin-left: 10px;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 12px;
}

.btn {
  display: block;
  padding: 8px 24px;
  margin: 10px auto;
  font-size: 1.1rem;
  font-weight: 500;
  outline: none;
  text-decoration: none;
  color: #484b57;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  cursor: pointer;
}

.btn:hover,
.btn:focus,
.btn:active,
.btn:visited {
  transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
  animation: gelatine 0.5s 1;
}

@keyframes gelatine {
  0%,
  100% {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(0.9, 1.1);
  }

  50% {
    transform: scale(1.1, 0.9);
  }

  75% {
    transform: scale(0.95, 1.05);
  }
}

/* PERSONAL BESTS */

.personal-bests {
  display: block;
}

.personal-bests h1 {
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 700;
}

.personal-bests-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 150px);
  gap: 10px;
  margin-top: 10px;
}

.best-item {
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
}

.box-one {
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-area: 1 / 1 / 2 / 3;
  background-color: rgba(185, 159, 237, 0.6);
  padding: 15px;
  font-size: 1rem;
  font-weight: 700;
}

.box-one img {
  max-width: 100px;
  aspect-ratio: 4/3;
}

.box-two {
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 10px;
  grid-area: 2 / 1 / 3 / 2;
  background-color: rgba(238, 184, 114, 0.6);
}

.box-two img {
  max-width: 90px;
  aspect-ratio: 3/2;
  align-self: flex-end;
}

.box-three {
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 10px;
  grid-area: 2 / 2 / 3 / 3;
  background-color: rgba(184, 224, 192, 0.6);
}

.box-three img {
  max-width: 70px;
  aspect-ratio: 1/1;
  align-self: flex-end;
}

/* RIGHT CONTENT */

.right-content {
  display: grid;
  grid-template-rows:  30% 70%;
  background: #f6f7fb;
  margin: 15px 15px 15px 0;
  padding: 10px 0;
  border-radius: 15px;
}

/* USER INFO */

.user-info {
  display: grid;
  grid-template-columns: 30% 55% 15%;
  align-items: center;
  padding: 0 10px;
}

.icon-container {
  display: flex;
  gap: 15px;
}

.user-info h4 {
  margin-left: 40px;
}

.user-info img {
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

/* ACTIVE CALORIES  */

.active-calories {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(214, 227, 248);
  padding: 0 10px;
  margin: 15px 10px 0;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
}

.active-calories h1 {
  margin-top: 10px;
  font-size: 1.2rem;
}

.active-calories-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.calories-content p {
  font-size: 1rem;
}

.calories-content p span {
  font-weight: 700;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 10px 0;
  /* width: 200px; */
}

.box h2 {
  position: relative;
  text-align: center;
  font-size: 1.25rem;
  color: rgb(91, 95, 111);
  font-weight: 600;
}

.box h2 small {
  font-size: 0.8rem;
  font-weight: 600;
}

.circle {
  position: relative;
  width: 80px;
  aspect-ratio: 1/1;
  background: conic-gradient(
    from 0deg,
    #590b94 0%,
    #590b94 0% var(--i),
    #b3b2b2 var(--i),
    #b3b2b2 100%
  );
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle::before {
  content: "";
  position: absolute;
  inset: 10px;
  background-color: rgb(214, 227, 248);
  border-radius: 50%;
}

/* MOBILE PERSONAL BESTS  */

.mobile-personal-bests {
  display: none;
}

/* FRIEND ACTIVITIES  */

.friends-activity {
  display: flex;
  flex-direction: column;
}

.friends-activity h1 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 15px 0 10px 15px;
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card {
  background-color: #fff;
  margin: 0 10px;
  padding: 5px 7px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;
}

.card-two {
  display: block;
}

.card-user-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
}

.card-user-info img {
  width: 25px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.card-user-info h2 {
  font-size: 1rem;
  font-weight: 700;
  margin-left: 5px;
}

.card-img {
  display: block;
  width: 100%;
  aspect-ratio: 7/4;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 10px;
  object-position: 50% 30%;
}

.card p {
  font-size: 0.9rem;
  padding: 0 5px 5px;
}
</style>