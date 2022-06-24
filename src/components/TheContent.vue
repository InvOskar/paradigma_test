<template>
    <div class="content">
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
.content{
  display: flex;
  gap: 70px;
}
</style>