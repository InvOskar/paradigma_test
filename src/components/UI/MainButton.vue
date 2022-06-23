<template>
    <div class="button flex-list" :style="{background: color}">
        <p>{{ text }}</p>
        <img src="@/assets/svg/arrow.svg" alt="->">
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type:  String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        }
    },
    
}
</script>

<style lang="scss" scoped>
.button{
    justify-content: space-evenly;

    width: 335px;
    height: 100px;
    border-radius: 500px;
    box-shadow: inset 0px 0px 22px rgba(255, 255, 255, 0.25);
}
p{
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