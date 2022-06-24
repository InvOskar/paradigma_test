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

</style>