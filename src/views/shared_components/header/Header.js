import sunIcon from '../../../images/sun-icon.svg';
import moonIcon from '../../../images/moon-icon.svg';
import ToggleButton from '../toogle_button/ToggleButton';

import './header.css';


class Header {
    
    constructor(){
        this.rootElement = document.firstElementChild;
        
        // Create the Header Element with container div child.
        this.header = document.createElement('header');
        const container = document.createElement('div');
        container.classList.add('container', 'header__container');
        this.header.appendChild(container);
    };

     /**
     * Creates the header element and returns it.
     * 
     * @returns HTMLElement Header element
     */
     create(){
        // Create The Title
        this.#createHeaderTitle();
        
        // Create Settings Container With The Settings
        this.#createSettingsContainer();

        return this.header;
    };

    #createHeaderTitle() {
        const title = document.createElement('h1');
        title.classList.add('header__title');
        title.textContent = 'Sorting Visualizer';
        this.header.firstElementChild.appendChild(title);
    };

    #createSettingsContainer() {
        const settings = document.createElement('div');
        settings.classList.add('header__settings');
        this.header.firstElementChild.appendChild(settings);

        // Create Burger Menu
        this.#createBurgerMenu(settings);

        // Add a ToggleButton For Changing the Theme
        this.#createThemeButton(settings);
    };

    #createThemeButton(settings) {
        const firstIcon = { src: sunIcon, alt: 'Light Theme' };
        const secondIcon = { src: moonIcon, alt: 'Dark Theme' };
        const themeButton = new ToggleButton(
            'header__btn',
            firstIcon,
            secondIcon,
            () => { this.rootElement.classList.toggle('dark-theme'); }).create();

        settings.appendChild(themeButton);
    };

    #createBurgerMenu(settings){
        // Create Button
        const burgerBtn = document.createElement('button');
        burgerBtn.classList.add('header__btn', 'header__burger-menu');
        // Add on click listener to open the navbar
        burgerBtn.onclick = () => {
            const navbar = document.querySelector('.navbar');
            navbar.classList.add('active');
        }

        // Add three divs to construct the bars
        for (let i=0; i<=2; i++){
            const bar = document.createElement('div');
            bar.classList.add('header__burger-bar');
            burgerBtn.appendChild(bar);
        };

        settings.appendChild(burgerBtn);
    };
  
};

export default Header;