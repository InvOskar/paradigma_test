<template>
    <div class="text" v-if="windowWidth > 600">
        <p><span>Кровельные и фасадные материалы</span> в Тюмени и области.</p>
        <p>Профессиональный монтаж с 2010 года.</p>
    </div>
    <div class="text" v-else>
        <p><span>Кровельные и фасадные материалы</span> в Тюмени и области. Профессиональный монтаж с 2010 года.</p>
    </div>
</template>

<script>
export default {
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
}
</script>

<style lang="scss" scoped>
.text{
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 18px;

    width: 13%;
    max-width: 205px;
    
    font-size: 12px;
    line-height: 18px;

    &>span{
        line-height: 20px;
    }
}

@media (max-width: 1000px){
    .text{
        width: auto;
    }    
}

@media (max-width: 600px){
    .text{
        font-size: 12px;
        line-height: 18px;
        width: 100%;
    }
}

@media (max-width: 400px){
    .text{
        font-size: 8px;
        line-height: 14px;
    }
}
</style>