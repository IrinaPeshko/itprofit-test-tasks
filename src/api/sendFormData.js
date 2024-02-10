import { showMessages } from './showMessages';

export function sendFormData(data) {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:10000'
      : 'https://itprofit-test-tasks.onrender.com';
  fetch(`${baseUrl}/api/registration`, {
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
