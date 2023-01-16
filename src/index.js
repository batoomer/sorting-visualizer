import Footer from './views/footer/Footer';
import Header from './views/header/Header';
import Main from './views/main/Main';
import './styles/index.css';


const body = document.body;

const header = new Header();
body.appendChild(header.create());

const main = new Main();
body.appendChild(main.create());

const footer = new Footer()
body.appendChild(footer.create());