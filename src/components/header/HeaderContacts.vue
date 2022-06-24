<template>
    <div class="contacts">
        <div class="top-text flex-list">
            <little-dot :color="'#FFFFFF'" />
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
    methods: {
        ...mapActions(['setPopUp']),
    }
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
</style>