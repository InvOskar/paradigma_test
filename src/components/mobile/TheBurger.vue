<template>
    <ul class="hamburger" @click="setMobileHeader()" :class="{open: mobileHeader}">
        <li></li>
        <li></li>
        <li></li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["setMobileHeader"]),
    },
    computed: {
        ...mapGetters(["mobileHeader"]),
    },
}
</script>

<style lang="scss" scoped>
.hamburger {
    cursor: pointer;
    list-style: none;

    height: 24px;
    width: 30px;

    position: relative;
    top: 20px;

    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}

.hamburger li {
    background-color: var(--var-main-color);
    border-radius: 4px;

    display: block;
    height: 4px;
    width: 100%;

    position: absolute;

    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .15s ease-in-out;
    -moz-transition: .15s ease-in-out;
    -o-transition: .15s ease-in-out;
    transition: .15s ease-in-out;
} 

.hamburger li:nth-child(1) {
    top: 0;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

.hamburger li:nth-child(2) {
    top: 9px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

.hamburger li:nth-child(3) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
}

.hamburger.open li:nth-child(1) {
    top: -1px;
    left: 4px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

.hamburger.open li:nth-child(2) {
    opacity: 0;
    width: 0;
}

.hamburger.open li:nth-child(3) {
    top: 20px;
    left: 4px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

@media (max-width: 400px) {
    .hamburger {
        height: 15px;
        width: 20px;
        top: 24.5px;
    }
    .hamburger li {
        border-radius: 2.13px;
        height: 2.13px;
    }
    .hamburger li:nth-child(2) {
        top: 6.44px;
    }
    .hamburger li:nth-child(3) {
        top: 12.88px;
    }
    .hamburger.open li:nth-child(1) {
        left: 2.13px;
    }
    .hamburger.open li:nth-child(3) {
        top: 12.87px;
        left: 2.13px;
    }
}

</style>