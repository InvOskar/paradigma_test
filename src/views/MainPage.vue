<template>
    <div class="main">
        <div v-if="windowWidth > 600">
            <the-nav-bar />
            <the-header />
        </div>
        <the-modile-header v-else />
        <the-content />
    </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheContent from '@/components/TheContent.vue'
import TheModileHeader from '@/components/mobile/TheModileHeader.vue'

export default {
    components: { TheNavBar, TheHeader, TheContent, TheModileHeader },
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
.main{
    margin: auto;
    width: 81.77%;
    padding-top: 43px;
}

@media (max-width: 1500px){
    .main{
        width: 98%;
    }
}

@media (max-width: 600px){
    .main{
        padding-top: 0;
        width: 86.25%;
    }
}
</style>