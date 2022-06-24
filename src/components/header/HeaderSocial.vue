<template>
    <div class="social">
        <div class="text flex-list">
            <little-dot :color="'var(--var-third-color)'" />
            <p>Отвечаем <span>онлайн</span></p>
        </div>
        <div class="flex-list">
            <img v-for="social in socials"
                :key="social" 
                :src="require(`@/assets/svg/${social}.svg`)" 
                :alt="social.name"
                class="pulse-animation" />
        </div>
    </div>
</template>

<script>
import LittleDot from '../UI/LittleDot.vue'

export default {
    components: { LittleDot },
    data() {
        return {
            socials: ['whatsapp', 'viber', 'telegram'],
        }
    }
}
</script>

<style lang="scss" scoped>
.social{
    display: grid;
    grid-gap: 16.58px;
    
    width: 10.1%;
    max-width: 160px;
}
.text{
    justify-content: space-evenly;
}
p{
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
}
</style>