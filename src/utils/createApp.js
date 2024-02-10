import { createForm } from '../components/form/createForm';

export function createApp() {
  const container = document.createElement('div');
  container.className = 'app__container';

  const heading = document.createElement('h1');
  heading.textContent = 'Form';
  heading.className = 'app__heading';

  const form = createForm();

  container.append(heading, form);

  return container;
}
