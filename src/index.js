import './styles/main.scss';
import { createForm } from './components/form/createForm';

console.log('Как интересно!');

const container = document.createElement('div');
container.className = 'app__container';

const heading = document.createElement('h1');
heading.textContent = 'Form';
heading.className = 'app__heading';

const form = createForm();

const root = document.querySelector('#root');
root.append(container);
container.append(heading, form);
