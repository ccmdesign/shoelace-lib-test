<script setup>
const { locale } = useI18n()
const data = await queryContent(locale.value).where({ lang: locale.value }).findOne()

</script>

<template>
  <section class="base-section">
    <h3>Testing typography</h3>
    <div class="grid" style="--_grid-gap: 1rem;">
      <sl-card>Test</sl-card>
      <sl-card>Test</sl-card>
      <sl-card>Test</sl-card>
      <sl-card>Test</sl-card>
      <sl-card>Test</sl-card>
      <sl-card>Test</sl-card>
    </div>
  </section>

  <sl-tab-group>
    <sl-tab slot="nav" panel="general">General</sl-tab>
    <sl-tab slot="nav" panel="custom">Custom</sl-tab>
    <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
    <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

    <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
    <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
    <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
    <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
  </sl-tab-group>
</template>

<style scoped>

</style>
