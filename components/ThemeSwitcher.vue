<script setup lang="ts">
import { useThemeStore } from '~/store/theme'
const store = useThemeStore()
const actionLabel = computed(() => {
  return store.theme === 'light' ? 'dark' : 'light'
})
</script>
<template>
  <div>
    <span @click="store.toggleTheme">{{ actionLabel.toUpperCase() }}</span>
  </div>
</template>
<style scoped lang="scss">
  span {
  background-color: #444;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>