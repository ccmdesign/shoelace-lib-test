<script setup lang="ts">
import { useThemeStore } from '~/store/theme'
const store = useThemeStore()

</script>
<template>
  <Html :class="`sl-theme-${store.theme}`">
    <div>
      <NavBar />
      <slot />
    </div>
  </Html>

</template>
<style scoped lang="scss">

</style>