<template>
    <div class="pop-up">
        <close-button @click="setPopUp(false)"/>
        <div class="content">
            <p class="title">Быстро оставить заявку</p>
            <p class="subtitle">Введите номер, мы позвоним вам в течение 10 минут в рабочее время</p>
            <p class="description">Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00</p>
            <div class="number-input">
                <p class="description">Введите номер телефона</p>
                <input placeholder="+7 (_ _ _) _ _-_ _-_ _"/>
            </div>
            <div class="btn flex-list">
                <p>Позвони мне</p>
                <img src="@/assets/svg/arrow.svg" alt="arrow" />
            </div>
            <div class="condition flex-list">
                <check-box />
                <p>Нажимая кнопку вы соглашаетесь  с условиями <br>
                <span>Политики конфиденциальности</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import CloseButton from "@/components/UI/CloseButton.vue";
import CheckBox from "@/components/UI/CheckBox.vue";
import { mapActions } from "vuex";
export default {
    components: { CloseButton, CheckBox },
    methods: {
        ...mapActions(["setPopUp"])
    }
}
</script>

<style lang="scss" scoped>
.pop-up{
    width: 550px;
    height: 650px;

    background: url('@/assets/images/PopUpBG.png');
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 35px;
}
.content{
    padding: 70px 97px 93px;
}
.title{
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    /* or 100% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
}
.subtitle{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    text-align: center;
    color: #000000;

    margin-top: 14px;
}
.description{
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;

    color: #000000;

    opacity: 0.75;

    margin-top: 24px;
}
.number-input{
    margin-top: 28px;

    &>p{
        text-align: left;
        padding-left: 50px;
    }

    &>input { 
        width: 356px;
        height: 85px;

        margin-top: 12px;

        background: #FFFFFF;
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
        border-radius: 500px;

        border:none;

        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        /* or 111% */

        display: flex;
        align-items: center;
        letter-spacing: 0.02em;

        padding-left: 50px;  

        &::placeholder{
            color: #A7A7A7;
        }
    }
}
.btn{
    width: 356px;
    height: 85px;

    margin-top: 24px;

    justify-content: space-evenly;
    box-shadow: inset 0px 0px 22px rgba(255, 255, 255, 0.25);
    background: var(--var-secondary-color);
    border-radius: 500px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    &>p{
        width: 57%;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        /* or 157% */

        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        color: #FFFFFF;
    }

    &>img{
        transform: rotate(45deg);
    }
}
.condition{
    margin-top: 19px;
    padding-left: 20px;
    gap: 19px;

    &>p{
        font-weight: 500;
        font-size: 12px;
        line-height: 21px;

        &>span{
            color: var(--var-secondary-color)
        }
    }
}
</style>