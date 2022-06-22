<template>
  <div class="app">
    <main-page />
  </div>
</template>

<script>
import MainPage from "./views/MainPage.vue";

export default {
  components: { MainPage }
}

</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #1C1C1C;
  font-family: 'Montserrat';
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: url('@/assets/images/BG.png');
  background-size: cover;
}

p {
  font-style: normal;
  font-weight: 400;
}

.flex-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pulse-animation {
  &:hover{
    animation-name: pulse;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    cursor: pointer;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}
</style>
