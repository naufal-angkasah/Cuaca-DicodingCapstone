import 'regenerator-runtime';
import './styles/main.css';
import './styles/article.css';
import './styles/main-responsive.css';
import './styles/about.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import DrawerApp from './script/views/drawer.js';
import main from './script/views/main';


const navbarElement = document.querySelector('#navbar-id');
const skipLink = document.querySelector('.skip-to-content');
const mainContent = document.querySelector('#content-id');

const apps = new DrawerApp({
    button: document.querySelector('#navigation-drawer-id'),
    navbar: document.querySelector('#navbar-container-id'),
    content: document.querySelector('#content-id'),
});

skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    mainContent.scrollIntoView({ behavior: 'smooth' });
    skipLink.blur();
});

window.addEventListener('scroll', () => {
    const scrollOnPage = window.pageYOffset;
  
    if (scrollOnPage > 0) {
      navbarElement.style.backgroundColor = '#25282d';
      navbarElement.style.position = 'fixed';
    } else {
      navbarElement.style.backgroundColor = 'transparent';
      navbarElement.style.position = 'absolute';
    }
});

window.addEventListener('hashchange', () => {
    apps.renderPage();
});
  
  window.addEventListener('load', () => {
    apps.renderPage();
});

document.addEventListener('DOMContentLoaded', main);