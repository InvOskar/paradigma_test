<template>
    <div class="download flex-list">
        <div class="icon pulse-animation"><span>Pdf</span></div>
        <p><span>Скачать прайс-каталог</span></p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.download{
    width: 14%;
    max-width: 220px;

    &>p{
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.04em;

        border-bottom: 1px dotted var(--var-third-color);

        &:hover{
            cursor: pointer;
        }
    }
}
.icon{
    width: 43.85px;
    height: 43.85px;

    background: #FFFFFF;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
    border-radius: 50%;

    text-align: center;
    
    &>span{
        display: block;
        width: 43.85px;
        height: 43.85px;

        color: var(--var-third-color);
        font-size: 11px;
        line-height: 13px;
        letter-spacing: 0.04em;

        margin-top: 15px;
    }
}
</style>