import './styles.css';

import initial from "./homePage.js";
import loadMenu from './menuPage.js';

initial();

const homeBtn = document.querySelector('button[aria-label="Go to Home page"]');
const menuBtn = document.querySelector('button[aria-label="Go to Menu page"]');
const aboutBtn = document.querySelector('button[aria-label="Go to About page"]');
homeBtn.addEventListener('click', () => initial())
menuBtn.addEventListener('click', () => loadMenu())