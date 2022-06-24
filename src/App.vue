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
:root{
  --var-main-color: #1C1C1C;
  --var-secondary-color: #F38120;
  --var-third-color: #12C868;
}

@font-face {
  font-family: 'Montserrat';
  src: url('@/assets/font/Montserrat-VariableFont_wght.ttf');
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: var(--var-main-color);
  font-family: 'Montserrat';
}

body{ 
  overflow-x: hidden;
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

span{
  font-style: normal;
  font-weight: 600;
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
