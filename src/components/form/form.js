export function createContactForm() {
    const form = document.createElement('form');
    form.className = 'contact-form';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Name';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'E-mail';

    const phone = document.createElement('input');
    phone.type = 'number';
    phone.name = 'phone';
    phone.placeholder = 'Phone';

    const message = document.createElement('input');
    message.type = 'text';
    message.name = 'message';
    message.placeholder = 'Message';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    form.append(nameInput, emailInput, phone, message, submitButton);

    return form;
}
