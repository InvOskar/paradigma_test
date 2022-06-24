<template>
    <div class="container">
        <header-line />
        <div class="flex-list header">
            <header-text />
            <header-download v-if="windowWidth > 1000"/>
            <header-logo />
            <header-social v-if="windowWidth > 1000"/>
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
    },
    data(){
        return {
            windowWidth: null,
        }
    },
    mounted() {
        this.windowWidth = window.innerWidth;
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
        });
    },
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

@media (max-width: 1000px) {
    .header{
        justify-content: space-evenly;
    }
}
</style>