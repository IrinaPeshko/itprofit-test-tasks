export function validateForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');

  const fields = [name, email, phone, message];

  let isValid = true;

  fields.forEach((field) => {
    if (!validateRequired(field)) {
      showError(field, 'This field is required');
      isValid = false;
    } else {
      clearError(field);
    }

    if (field.type === 'email' && !validateEmail(field)) {
      showError(field, 'Please enter a valid email address');
      isValid = false;
    }
  });

  return isValid;
}

export function validateRequired(input) {
  return input.value.trim() !== '';
}

export function validateEmail(email) {
  const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regExp.test(email.value.trim());
}

export function showError(input, message) {
  const errorDisplay = input.nextElementSibling;
  errorDisplay.textContent = message;
  errorDisplay.classList.add('error');
  input.classList.add('invalid');
}

export function clearError(input) {
  const errorDisplay = input.nextElementSibling;
  errorDisplay.textContent = '';
  errorDisplay.classList.remove('error');
  input.classList.remove('invalid');
}
