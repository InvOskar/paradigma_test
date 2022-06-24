<template>
    <div class="container">
        <p class="text">
            Продажа <span>кровельных материалов</span> в Тюмени и Тюменской области
        </p>
        <div class="subtitle flex-list">
            <div class="flex-list dots">
                <div class="dot"
                    v-for="i in 4"
                    :key="i" 
                    :style="{borderColor: 'rgba(18, 200, 104, ' + (1-((i-1)*0.25)) + ')'}"></div>
            </div>
            <p>и монтаж под ключ</p>
        </div>
        <div class="flex-list btns">
            <main-button :color="'var(--var-third-color)'" :width="'375px'">
                Рассчитать стоимость материалов и монтажа
            </main-button>
            <main-button :color="'var(--var-secondary-color)'" :width="'335px'">
                записаться на просмотр объектов
            </main-button>
        </div>
        <div class="block">
            <div class="pointer"><img src="@/assets/svg/pointer.svg" alt="pointer" /></div>
            <p>
                <span>Ответьте на несколько вопросов и получите</span>
                 сметную стоимость и 3 подарка за экономию нашего времени
            </p>
        </div>
    </div>
</template>

<script>
import MainButton from "../UI/MainButton.vue";

export default {
  components: { MainButton }, 

}
</script>

<style lang="scss" scoped>
.container{
    width: 728px;
}
.text{
    width: 88.6%;
    font-weight: 300;
    font-size: 55px;
    line-height: 85px;
}
.subtitle{
    width: 54.5%;
    font-size: 32px;
    line-height: 39px;

    padding-top: 19px;
    padding-bottom: 45px;
}
.dots{
    width: 58px;
}
.dot{
    width: 9.21px;
    height: 9.21px;
    border-radius: 50%;

    border: 1.5px solid;
}
.block{
    margin-top: 36px;
    width: 276px;
    display: flex;
    gap: 16px;
    
    &>p{
        font-size: 14px;
        line-height: 22px;
        /* or 157% */

        text-align: center;
        letter-spacing: 0.02em;
    }
}

@media (max-width: 1100px){
    .container{
        width: 70%;
    }
    .subtitle{
        width: 70%;
    }

}

@media (max-width: 1000px){
    .btns{
        flex-direction: column;
        gap: 30px;
        align-items: center;
    }
    .block{
        padding-top: 24px;
        margin: auto;
    }
}

@media (max-width: 850px){
    .subtitle, .text{
        width: 90%;
        text-align: center;
    }
    
}

@media (max-width: 700px) {
    .text{
        font-size: 42px;
        line-height: 60px;
    }
    .subtitle{
        font-size: 28px;
        line-height: 36px;
    }
    
}
</style>