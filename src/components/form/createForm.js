import { sendFormData } from '../../api/sendFormData';
import '../../styles/form.scss';
import { validateForm } from '../../utils/validation';
import { createModal, createModalBtn } from '../modal/createModal';
import { createFormField } from './createFormField';

export function createForm() {
  const formContainer = document.createElement('div');
  formContainer.className = 'form__container';

  const form = document.createElement('form');
  form.classList.add('form');
  form.id = 'form';

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
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
      sendFormData(data);
    }
  });

  const modal = createModal();
  const modalBtn = createModalBtn();
  formContainer.append(modal, form, modalBtn);
  return formContainer;
}
