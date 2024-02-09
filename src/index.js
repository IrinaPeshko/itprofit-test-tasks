import './styles/main.scss';
import { createContactForm } from './components/form/form';

console.log('Как интересно!');

const container = document.createElement('div');
container.className = 'app__container';

const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

const form = createContactForm();

const root = document.querySelector('#root');
root.append(container);
container.append(heading, form);
