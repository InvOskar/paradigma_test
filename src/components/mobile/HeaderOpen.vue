<template>
    <div class="opened flex-list">
        <the-nav-bar />
        <header-text />
        <header-download />
        <header-social />
    </div>
</template>

<script>
import HeaderSocial from '../header/HeaderSocial.vue'
import HeaderText from '../header/HeaderText.vue'
import HeaderDownload from '../header/HeaderDownload.vue'
import TheNavBar from "../TheNavBar.vue"

export default {
    components: { TheNavBar, HeaderSocial, HeaderText, HeaderDownload },

}
</script>

<style lang="scss" scoped>
.opened{
    position: relative;
    flex-direction: column;
    gap: 16px;
}
</style>