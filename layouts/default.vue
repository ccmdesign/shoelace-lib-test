<script setup lang="ts">
import { useThemeStore } from '~/store/theme'
const store = useThemeStore()
const { locale } = useI18n()

</script>
<template>
  <Html :class="`sl-theme-${store.theme}`" :lang="locale">
    <div>
      <NavBar />
      <slot />
    </div>
  </Html>

</template>
<style scoped lang="scss">

</style>