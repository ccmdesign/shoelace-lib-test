<script setup>

import useFormValidate from '../composables/useFormValidate'
const { state, errors, validateForm, clearForm } = useFormValidate()

const progressControl = ref()
const showAlert = ref(false)

const handleFormSubmit = async () => {
  if (!validateForm()) return

  showAlert.value = true
  clearForm()
}

watch(() => state, (newState) => {

  const filledFields = Object.values(newState).filter(value => value !== '').length
  const totalFields = Object.keys(newState).length
  progressControl.value = (filledFields / totalFields) * 100

}, { deep: true })


</script>

<template>

  <form @submit.prevent="handleFormSubmit">
    <sl-input label="Name" placeholder="Name" v-model="state.name"></sl-input>
    <p v-if="errors.name" class="error-msg">{{ errors.name }}</p>

    <sl-input label="E-mail" type="email" placeholder="Email" v-model="state.email"></sl-input>
    <p v-if="errors.email" class="error-msg">{{ errors.email }}</p>

    <sl-textarea label="Bio" help-text="Tell us something about yourself" v-model="state.bio"></sl-textarea>

    <sl-input type="date" placeholder="Date" v-model="state.date"></sl-input>
    <p v-if="errors.date" class="error-msg">{{ errors.date }}</p>
    
    <div class="action-section">
      <sl-button class="clear-btn" @click="clearForm">clear</sl-button>
      <sl-button type="submit" variant="primary">Submit</sl-button>
    </div>
  </form>
  <Transition name="fade">
    <sl-progress-bar v-if="progressControl > 0" :value="progressControl" label="Upload progress"></sl-progress-bar>
  </Transition>

  <sl-alert :open="showAlert" closable variant="success">
    <sl-icon slot="icon" name="check2-circle"></sl-icon>
    Thank you to sign the newsletter.
  </sl-alert>

</template>


<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: calc(50vw - 30px);
}

.fade-enter-active {
  transition: all 0.4s ease-out;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.error-msg {
  color: red;
  font-size: 12px;
  margin: 0;

}

.action-section {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.clear-btn::part(base):hover {
  background-color: var(--custom-color-secondary-300);
}


</style>