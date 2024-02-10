import { showMessages } from './showMessages';

export function sendFormData(data) {
  fetch('http://localhost:9090/api/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'error') {
        showMessages(data.message);
      } else {
        showMessages(data.message);
        clearFormFields();
      }
    })
    .catch((error) => console.error('Error:', error));
}

function clearFormFields() {
  const form = document.getElementById('form');
  form.reset();
}
