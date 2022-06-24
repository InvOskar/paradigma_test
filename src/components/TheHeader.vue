<template>
    <div class="container">
        <header-line />
        <div class="flex-list header">
            <header-text />
            <header-download />
            <header-logo />
            <header-social />
            <header-contacts />
        </div>
    </div>
</template>

<script>
import HeaderLogo from './header/HeaderLogo.vue'
import HeaderText from './header/HeaderText.vue'
import HeaderDownload from './header/HeaderDownload.vue'
import HeaderContacts from './header/HeaderContacts.vue'
import HeaderSocial from './header/HeaderSocial.vue'
import HeaderLine from './header/HeaderLine.vue'

export default {
    components: {
        HeaderLogo,
        HeaderText,
        HeaderDownload,
        HeaderContacts,
        HeaderSocial,
        HeaderLine
    }
}
</script>

<style lang="scss" scoped>
.container{
    margin-top: 37px;
    height: 150px;
}
.header{
    height: 148px;
}
</style>