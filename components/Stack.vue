<script setup>

const SPACE_OPTIONS = {
  sm: "var(--sl-spacing-small)",
  md: "var(--sl-spacing-medium)",
  lg: "var(--sl-spacing-large)",
  xl: "var(--sl-spacing-xlarge)",
}

const props = defineProps({
  space: {
    type: String,
    default: "lg",
  },
});

const space = computed(() => {
  return SPACE_OPTIONS[props.space]
})

</script>

<template>
  <div class="stack" :space="space">
    <slot></slot>
  </div>
</template>

<style>

.stack {
  --space: v-bind(space);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
}

.stack > * {
  margin-top: 0;
  margin-bottom: 0;
} 

.stack > * + * {
  margin-top: var(--space);
}
</style>
