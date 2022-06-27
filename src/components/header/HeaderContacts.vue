<template>
    <div class="contacts">
        <div class="top-text flex-list">
            <little-dot :color="getColor()" />
            <p><span>Пн-Пт</span> 9:00 - 18:00, <span>Сб</span> 10:00 - 18:00</p>
        </div>
        <p class="phone-number">8 (800) 222-54-60</p>
        <p class="bottom-text pulse-animation"><span style="color: var(--var-third-color);" @click="setPopUp(true)">Позвоните мне</span></p>
    </div>
</template>

<script>
import LittleDot from '../UI/LittleDot.vue'
import { mapActions } from 'vuex'
export default {
    components: { LittleDot },
    data(){
        return {
            windowWidth: null,
        }
    },
    mounted() {
        this.windowWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        });
    },
    methods: {
        ...mapActions(['setPopUp']),
        getColor() {
            if (this.windowWidth > 600) {
                return '#FFFFFF';
            } else {
                return 'var(--var-third-color)';
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.contacts{
    display: grid;
    grid-gap: 6px;

    max-width: 243px;
    width: 15.5%;
}
p{
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.02em;
}
.top-text{
    justify-content: space-evenly;

    &>p{
        margin-left: 10px;
    }
}
.phone-number{
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.05em;
}
.bottom-text{
    width: 105px;
    margin: auto;
    letter-spacing: 0.04em;
    color: var(--var-third-color);
    border-bottom: 1px dotted var(--var-third-color);
}

@media (max-width: 1000px) {
    .contacts{
        width: auto;
    }
    
}

@media (max-width: 600px) {
    p{
        font-size: 12px;
        line-height: 15px;
    }
    .phone-number{
        font-size: 18px;
        line-height: 22px;
    }
    
}

@media (max-width: 400px) {
    .contacts{
        padding: 10px 22px 0;
    }
    p{
        font-size: 7px;
        line-height: 9px;
    }
    .phone-number{
        font-size: 14px;
        line-height: 17px;
    }
    .bottom-text{
        font-size: 10px;
        line-height: 12px;

        width: 88px;
    }
}

@media (max-width: 325px) {
    .contacts{
        padding: 10px 14px 0;
    }
    .top-text{
        justify-content: space-evenly;

        &>p{
            margin-left: 3px;
        }
    }
    .phone-number{
        font-size: 12px;
        line-height: 15px;
    }
}
</style>