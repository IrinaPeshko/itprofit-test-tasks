import {
  clearError,
  showError,
  validateEmail,
  validatePhone,
  validateRequired,
} from '../../utils/validation';
import Inputmask from 'inputmask';

export function createFormField(name, type, placeholder, inputType) {
  const fieldWrapper = document.createElement('div');
  fieldWrapper.className = 'field__wrapper';

  const label = document.createElement('label');
  label.className = 'form__label';
  label.setAttribute('for', name);

  const requiredSpan = document.createElement('span');
  requiredSpan.className = 'field__required';
  requiredSpan.textContent = ' *';

  label.append(placeholder, requiredSpan);

  const inputWrapper = document.createElement('span');
  inputWrapper.className = 'form__input-wrapper';

  let input;
  if (inputType === 'textarea') {
    input = document.createElement('textarea');
    input.rows = 4;
    input.classList.add('form__textarea');
  } else {
    input = document.createElement('input');
    input.type = type;
  }

  if (name === 'phone') {
    Inputmask('+375 (99) 999-99-99').mask(input);
  }

  input.classList.add('form__input');
  input.id = name;
  input.name = name;
  input.placeholder = placeholder;
  input.addEventListener('input', () => {
    if (!validateRequired(input)) {
      showError(input, 'This field is required');
    } else if (input.type === 'email' && !validateEmail(input)) {
      showError(input, 'Please enter a valid email address');
    } else if (input.id === 'phone' && !validatePhone(input)) {
      showError(input, 'Please enter a valid phone number');
    } else {
      clearError(input);
    }
  });

  const messageSpan = document.createElement('span');
  messageSpan.className = 'form__message';

  inputWrapper.append(input, messageSpan);
  fieldWrapper.append(label, inputWrapper);

  return fieldWrapper;
}
