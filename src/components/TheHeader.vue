<template>
    <div class="container flex-list">
        <header-text />
        <header-download />
        <header-logo />
        <header-social />
        <header-contacts />
    </div>
</template>

<script>
import HeaderLogo from './header/HeaderLogo.vue'
import HeaderText from './header/HeaderText.vue'
import HeaderDownload from './header/HeaderDownload.vue'
import HeaderContacts from './header/HeaderContacts.vue'
import HeaderSocial from './header/HeaderSocial.vue'

export default {
    components: {
        HeaderLogo,
        HeaderText,
        HeaderDownload,
        HeaderContacts,
        HeaderSocial
    }
}
</script>

<style lang="scss" scoped>
.container{
    border-top: 1px solid rgba(28, 28, 28, 0.07);
    margin-top: 37px;
    height: 148px;
}
</style>