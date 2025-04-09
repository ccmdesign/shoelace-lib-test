import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const themes = computed(() => {
    return ['light', 'dark', 'custom-001']
  })

  const selectedTheme = ref('custom-001')
  
  const toggleTheme = (pay: string) => {
    selectedTheme.value = pay
    document.documentElement.setAttribute('data-theme', selectedTheme.value)
  }

  return { themes, selectedTheme, toggleTheme }
})