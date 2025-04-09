<script setup lang="ts">
import { useThemeStore } from '~/store/theme'
const { themes, selectedTheme, toggleTheme } = useThemeStore()

</script>
<template>
  <div>
    <!-- <span @click="store.toggleTheme">{{ actionLabel.toUpperCase() }}</span> -->
    <select :value="selectedTheme" @change="toggleTheme($event.target.value)">
      <option v-for="item of themes" :key="item" :value="item">
        {{  item.toUpperCase() }}
      </option>
    </select>
  </div>
</template>
<style scoped lang="scss">
select {
  text-align: center;
  background-color: #444;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>