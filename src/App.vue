<template>
  <div class="app">
    <main-page v-if="!popUp"/>
    <div class="pop-up-bg" v-if="popUp">
      <img src="@/assets/images/BG.png" alt="bg" />
    </div>
    <the-pop-up v-if="popUp"/>
  </div>
</template>

<script>
import MainPage from "./views/MainPage.vue";
import ThePopUp from "./components/ThePopUp.vue";
import { mapGetters } from "vuex";

export default {
  components: { MainPage, ThePopUp },
  computed: {
    ...mapGetters(["popUp"])
  },
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

.pop-up-bg{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  filter: blur(10px);
}

.button{
  justify-content: space-evenly;

  height: 100px;
  border-radius: 500px;
  box-shadow: inset 0px 0px 22px rgba(255, 255, 255, 0.25);

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }

  &>p{
    width: 57%;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;

    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: #FFFFFF;
  }
}
</style>
