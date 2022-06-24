<template>
    <div class="text">
        <p><span>Кровельные и фасадные материалы</span> в Тюмени и области.</p>
        <p>Профессиональный монтаж с 2010 года.</p>
    </div>
</template>

<script>
export default {

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
</style>