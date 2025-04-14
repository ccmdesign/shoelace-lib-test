const useFormValidate = () => {
  // Form state
  const state = reactive({
    email: '',
    name: '',
    bio: '',
    date: '',

  })

  const errors = reactive({
    email: '',
    name: '',
    bio: '',
    date: '',
  })

  const validateForm = () => {
    let isValid = true
    
    // Reset errors
    errors.email = ''
    errors.name = ''
    errors.bio = ''
    errors.date = ''
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(state.email)) {
      errors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!state.name) {
      errors.name = 'Name is required'
      isValid = false
    }

    if (!state.date) {
      errors.date = 'Date is required'
      isValid = false
    }
      
    return isValid
  }

  const clearForm = () => {
    state.email = ''
    state.name = ''
    state.bio = ''
    state.date = ''
  }

  return { state, errors, validateForm, clearForm }
}

export default useFormValidate