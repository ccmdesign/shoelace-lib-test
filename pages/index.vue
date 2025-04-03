<script setup>
const { locale } = useI18n()
const route = useRoute()
const data = await queryContent(locale.value, 'post').find()

</script>

<template>
  <div class="container">
    <Card :card="data[0]"/>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
}
</style>
