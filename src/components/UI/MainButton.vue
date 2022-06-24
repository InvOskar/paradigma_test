<template>
    <div class="button flex-list" :style="{background: color, width: width}">
        <p><slot></slot></p>
        <img src="@/assets/svg/arrow.svg" alt="->">
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            required: true,
        },
        width: {
            type: String,
            required: true,
        },
    },
    
}
</script>

<style lang="scss" scoped>
.button{
    justify-content: space-evenly;

    height: 100px;
    border-radius: 500px;
    box-shadow: inset 0px 0px 22px rgba(255, 255, 255, 0.25);

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
}
p{
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
</style>