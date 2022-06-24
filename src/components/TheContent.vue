<template>
    <div class="container flex-list">
        <bullets-block />
        <main-content />
    </div>
</template>

<script>
import BulletsBlock from './content/BulletsBlock.vue'
import MainContent from './content/MainContent.vue'
export default {
  components: { BulletsBlock, MainContent },

}
</script>

<style lang="scss" scoped>
.container{
  
}
</style>