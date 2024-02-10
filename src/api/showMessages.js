export function showMessages(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  const modalContent = document.querySelector('.modal__content');
  modalMessage.innerHTML = `<p class= "modal__text">${message}</p>`;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  if (message === 'Bad request') {
    modalContent.classList.add('modal-error');
    modalContent.classList.remove('modal-success');
  } else if (message === 'You are registered') {
    modalContent.classList.remove('modal-error');
    modalContent.classList.add('modal-success');
  }
}
