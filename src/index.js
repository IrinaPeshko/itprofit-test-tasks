import './styles/main.scss';
import { createApp } from './utils/createApp';

const App = createApp()
const root = document.querySelector('#root');
root.append(App);

