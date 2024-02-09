import './styles/main.scss';
console.log('Как интересно!');
const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';
const root = document.querySelector('#root');
root.append(heading);
