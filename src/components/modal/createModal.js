import '../../styles/modal.scss';
import alien from '../../assets/images/alien.png'
export function createModalBtn() {
  const openModalButton = document.createElement('button');
  openModalButton.id = 'openModalButton';
  openModalButton.className = 'button';
  openModalButton.innerText = 'Open modal';

  openModalButton.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
  return openModalButton;
}

export function createModal() {
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal__container';
  modalContainer.id = 'modal';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal__content';

  const modalMessage = document.createElement('div');
  modalMessage.innerHTML = `
    <p class= "modal__text">Congratulations! You've just discovered a secret modal window. Close to save the world from aliens!</p>
    <img class = "modal__image" src="${alien}" alt="alien">
  `

  const closeModalButton = document.createElement('span');
  closeModalButton.id = 'closeModalButton';
  closeModalButton.className = 'modal__close';
  closeModalButton.innerHTML = '&times;';
  closeModalButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  modalContent.append(closeModalButton, modalMessage);
  modalContainer.append(modalContent);
  return modalContainer;
}
