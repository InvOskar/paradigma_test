<template>
    <div class="main">
        <the-nav-bar />
        <the-header />
    </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: { TheNavBar, TheHeader },

}
</script>

<style lang="scss" scoped>
.main{
    margin: auto;
    width: 81.77%;
    padding-top: 43px;
}
</style>