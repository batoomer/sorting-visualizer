import sunIcon from '../../../images/sun-icon.svg';
import moonIcon from '../../../images/moon-icon.svg';
import ToggleButton from '../toogle_button/ToggleButton';

import './header.css';


/**
 * Class representing the Header component
 */
class Header {
    
    /**
     * Initialize the header element, container element and the root element.
     */
    constructor(){
        // Reference to the root element
        this.rootElement = document.firstElementChild;
        
        // Create the Header Element with a container div child.
        this.header = document.createElement('header');
        const container = document.createElement('div');
        container.classList.add('container', 'header__container');
        this.header.appendChild(container);
    };

    
     /**
     * Creates the header element and returns it.
     * 
     * @returns {HTMLElement} Header Element
     */
     create(){
        // Create The Title
        this.#createHeaderTitle();
        
        // Create settings container containing the settings
        this.#createSettingsContainer();

        return this.header;
    };

    /**
     * Creates the title element and appends it to the container element
     */
    #createHeaderTitle() {
        const title = document.createElement('h1');
        title.classList.add('header__title');
        title.textContent = 'Sorting Visualizer';
        this.header.firstElementChild.appendChild(title);
    };

    /**
     * Creates the settings container and adds it to the header element
     * and creates the burger menu and theme button inside it
     */
    #createSettingsContainer() {
        const settings = document.createElement('div');
        settings.classList.add('header__settings');
        this.header.firstElementChild.appendChild(settings);

        // Create Burger Menu
        this.#createBurgerMenu(settings);

        // Create Toggle button for toggling between dark and light theme
        this.#createThemeButton(settings);
    };


    /**
    * Creates the theme toggle button and adds it to the settings container.
    *
    * @param {HTMLElement} settings - The element that the theme toggle button will be added to.
    */
    #createThemeButton(settings) {
        const firstIcon = { src: sunIcon, alt: 'Light Theme' };
        const secondIcon = { src: moonIcon, alt: 'Dark Theme' };
        const themeButton = new ToggleButton(
            'header__btn',
            firstIcon,
            secondIcon,
            () => { this.#handleThemeButtonClick() }).create();

        settings.appendChild(themeButton);
    };

     /**
     * Handles the click event on the theme toggle button.
     * Toggles the dark-theme class on the root element to switch between themes.
     */
    #handleThemeButtonClick() {
        this.rootElement.classList.toggle('dark-theme');
    }

    /**
     * Creates the burger menu button and adds it to the settings container.
     *
     * @param {HTMLElement} settings - The element that the burger menu button will be added to.
     */
    #createBurgerMenu(settings){
        // Create Button
        const burgerBtn = document.createElement('button');
        burgerBtn.classList.add('header__btn', 'header__burger-menu');
        // Add on click listener to open the navbar
        burgerBtn.onclick = () => {this.#handleBurgerMenuClick();}

        // Add three divs to construct the bars
        for (let i=0; i<=2; i++){
            const bar = document.createElement('div');
            bar.classList.add('header__burger-bar');
            burgerBtn.appendChild(bar);
        };

        settings.appendChild(burgerBtn);
    };

    /**
     * Handles the click event on the burger menu button.
     * Toggles the active class on the navbar to open it.
     */
    #handleBurgerMenuClick() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.add('active');
    }
  
};

export default Header;