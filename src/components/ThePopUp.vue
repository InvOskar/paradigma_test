<template>
    <div class="pop-up">
        <close-button @click="setPopUp(false)"/>
        <div class="content">
            <p class="title">Быстро оставить заявку</p>
            <p class="subtitle">Введите номер, мы позвоним вам в течение 10 минут в рабочее время</p>
            <p class="description">Пн–Пт 9:00 - 18:00, Сб 10:00 - 18:00</p>
            <div class="number-input">
                <p class="description">Введите номер телефона</p>
                <input type="tel" placeholder="+7 (_ _ _) _ _ _-_ _-_ _" v-model="phone" @focus="onFocus"/>
            </div>
            <div class="button flex-list" @click="sendPhone()">
                <p>Позвони мне</p>
                <img src="@/assets/svg/arrow.svg" alt="arrow" />
            </div>
            <div class="condition flex-list">
                <check-box v-model="isAccept"/>
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
    data() {
        return {
            phone: null,
            isAccept: false,
        }
    },
    methods: {
        ...mapActions(["setPopUp"]),
        sendPhone() {
            if (this.isAccept && this.phone.length==16) {
                this.setPopUp(false);
                alert("Заявка отправлена, мы скоро свяжемся с вами по номеру телефона: " + this.phone);
            }
        },
        onFocus() {
            this.phone = '+7';
        }
    },
    watch: {
        phone(newValue) {
            if (newValue.length > 0) {
                this.phone = newValue.replace(/[^\d+_()-]/g, '');
            }
            if(newValue.length == 2){
                this.phone += '(';
            }
            if(newValue.length == 6){
                this.phone += ')';
            }
            if(newValue.length == 10 || newValue.length == 13){
                this.phone += '-';
            }
            if(newValue.length > 16){
                this.phone = newValue.slice(0, 16);
            }
        }
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
    
    text-align: center;
    font-weight: 400;
}
.content{
    padding: 70px 97px 93px;
}
.title{
    font-weight: 500;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 0.02em;
}
.subtitle{
    font-size: 16px;
    line-height: 24px;

    color: #000000;

    margin-top: 14px;
}
.description{
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
.button{
    width: 356px;
    height: 85px;

    background: var(--var-secondary-color);
    margin-top: 24px;

    &>img{
        transform: rotate(45deg);
    }
}
.condition{
    margin-top: 19px;
    padding-left: 20px;
    gap: 19px;

    text-align: left;

    &>p{
        font-weight: 500;
        font-size: 12px;
        line-height: 21px;

        &>span{
            color: var(--var-secondary-color);
            cursor: pointer;
        }
    }
}
</style>