<template>
    <div class="container">
        <div class="bullet">
                <p>
                    <span class="bold">Гарантия от 50 лет</span>
                     на материалы и 5 лет на монтаж
                </p>
                <img src="@/assets/images/shadow.png">
        </div>
        <div class="bullet">
                <p>
                    <span class="bold">Сметы точны</span>
                     до копейки
                </p>
                <img src="@/assets/images/shadow.png">
        </div>
        <div class="bullet">
                <p>
                    <span class="bold">Поэтапная оплата,</span>
                     кредит или рассрочка
                </p>
                <img src="@/assets/images/shadow.png">
        </div>
        <div class="bullet">
                <p>
                    <span class="bold">Наши крыши в каждом поселке</span>
                     и дачном сщщбществе региона
                </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    margin-top: 52px;
    width: 225px;
    height: 626.5px;

    background: url('@/assets/images/BulletsBG.png');

    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    &>div{
        position: relative;
    }
    &>div:first-child{
        padding-top: 63px;
        margin-top: 0;
        top: 0;
    }
    &>div:nth-child(2){
        top: -11px;
    }
    &>div:nth-child(3){
        top: -22px;
    }
    &>div:nth-child(4){
        top: -33px;
    }
}
.bullet{
    width: 143px;

    font-size: 14px;
    line-height: 22px;
    text-align: center;

    &>p{
        padding-bottom: 15px;

    }

    &:hover{
        cursor: pointer;
        transform: scale(1.3) translateY(10px);
        transition: all 0.5s ease-in-out;
    }
}
.bold{
    font-weight: 700;
}
</style>