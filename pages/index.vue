<script setup>
const { locale } = useI18n()
const data = await queryContent(locale.value).where({ lang: locale.value }).findOne()

</script>

<template>
  <div class="container">
    <Card :card="data"/>
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
