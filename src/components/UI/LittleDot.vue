<template>
    <div class="dot" :style="{background: color}">

    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.dot{
    width: 4px;
    height: 4px;
    border-radius: 50%;
}
</style>