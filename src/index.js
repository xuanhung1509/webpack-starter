import './index.scss';
import logoImg from './assets/laughing.svg';

const joke = document.querySelector('.joke');
const button = document.querySelector('button');
const logo = document.querySelector('#logo');
logo.src = logoImg;

const generateJoke = async () => {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  joke.textContent = data.joke;
};

button.addEventListener('click', generateJoke);

generateJoke();
