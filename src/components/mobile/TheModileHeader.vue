<template>
    <div class="mobile-header">
        <div class="header">
            <img src="@/assets/images/LogoLittle.png" alt="logo" />
            <header-contacts/>
            <the-burger />
        </div>
        <header-open v-if="mobileHeader"/>
    </div>
</template>

<script>
import HeaderContacts from '../header/HeaderContacts.vue'
import TheBurger from './TheBurger.vue'
import HeaderOpen from './HeaderOpen.vue'
import { mapGetters } from 'vuex'

export default {
    components: { TheBurger, HeaderContacts, HeaderOpen },
    computed: {
        ...mapGetters(["mobileHeader"])
    }

}
</script>

<style lang="scss" scoped>
.mobile-header{
    display: flex;
    flex-direction: column;
}
.header {
    height: 64px;
    width: 100%;

    display: flex;
    justify-content: space-between;
}
img{
    float: top;
    height: 52px;
}

@media (max-width: 325px) {
    img{
        height: 40px;
    }
    
}
</style>