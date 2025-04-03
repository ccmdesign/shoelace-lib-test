<script setup>
const router = useRouter();
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath();

const onLocaleChanged = (code) => {
  router.push({ path: switchLocalePath(code) })
}
</script>

<template>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <div class="language-switcher">
        <select :value="locale" @change="onLocaleChanged($event.target.value)">
          <option v-for="lang of locales" :key="lang.code" :value="lang.code">
            {{  lang.code.toUpperCase() }}
          </option>
        </select>
        <ThemeSwitcher />
      </div>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background-color: #333;
  color: white;
  padding: 10px;

  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
    justify-content: flex-end;

    li {
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}

.language-switcher {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
}

.language-switcher select {
  background-color: #444;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
      
</style>