<script setup lang="ts">
import { useThemeStore } from '~/store/theme'
const { themes, selectedTheme, toggleTheme } = useThemeStore()

</script>
<template>
  <sl-select :value="selectedTheme" @change="toggleTheme($event.target.value)" size="small">
    <sl-option v-for="item of themes" :key="item" :value="item" size="small">{{  item.toUpperCase() }}</sl-option>
  </sl-select>
</template>
<style scoped lang="scss">

</style>