import '../../styles/form.scss';

export function createContactForm() {
  const formContainer = document.createElement('div');
  formContainer.className = 'form__container';

  const form = document.createElement('form');
  form.classList.add('form');

  const nameField = createFormField('name', 'text', 'Name', 'input');
  const emailField = createFormField('email', 'email', 'E-mail', 'input');
  const phoneField = createFormField('phone', 'text', 'Phone', 'input');
  const messageField = createFormField(
    'message',
    'text',
    'Message',
    'textarea'
  );

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  submitButton.className = 'button form__button_submit';

  form.append(nameField, emailField, phoneField, messageField, submitButton);
  formContainer.append(form);

  return formContainer;
}

function createFormField(name, type, placeholder, inputType) {
  const fieldWrapper = document.createElement('div');
  fieldWrapper.className = 'field__wrapper';

  const label = document.createElement('label');
  label.className = 'form__label';
  label.setAttribute('for', name);
  label.textContent = placeholder;

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

  input.classList.add('form__input');
  input.id = name;
  input.name = name;
  input.placeholder = placeholder;

  const messageSpan = document.createElement('span');
  messageSpan.className = 'form__message';
  messageSpan.setAttribute('aria-live', 'polite');

  inputWrapper.append(input, messageSpan);
  fieldWrapper.append(label, inputWrapper);

  return fieldWrapper;
}
