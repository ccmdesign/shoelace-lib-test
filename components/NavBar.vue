<script setup>
const router = useRouter();
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath();

const onLocaleChanged = (code) => {
  router.push({ path: switchLocalePath(code) })
}
</script>

<template>
  <nav class="cluster">
    <sl-button variant="text" size="medium" href="#">Home</sl-button>
    <sl-button variant="text" size="medium" href="#">About</sl-button>
    <sl-button variant="text" size="medium" href="#">Contact</sl-button>
    <sl-select :value="locale" @change="onLocaleChanged($event.target.value)" data-split size="small">
      <sl-option v-for="lang of locales" :key="lang.code" :value="lang.code" size="small">Test {{ lang.code.toUpperCase() }}</sl-option>
    </sl-select>
    <ThemeSwitcher />
  </nav>
</template>

<style scoped lang="scss">
// nav {
//   background-color: var(--custom-color-primary, #333);
//   color: white;
//   padding: 10px;

//   ul {
//     list-style-type: none;
//     display: flex;
//     gap: 20px;
//     justify-content: flex-end;

//     li {
//       a {
//         color: white;
//         text-decoration: none;
//       }
//     }
//   }
// }

// .language-switcher {
//   margin-left: auto;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// }

// .language-switcher select {
//   background-color: #444;
//   color: white;
//   border: none;
//   padding: 5px;
//   border-radius: 5px;
//   cursor: pointer;
// }
      
</style>