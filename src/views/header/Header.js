import sunIcon from '../../images/sun-icon.svg';
import moonIcon from '../../images/moon-icon.svg';

import './header.css';
class Header {

    /**
     * Initializes a HTML header element
     */
    constructor(){
        this.header = document.createElement('header');
    }

    #clickThemeButton(themeButton){
        // Toggle the dark-theme class
        document.firstElementChild.classList.toggle('dark-theme');
        // Add the hidden class to the correct theme icon
        if (document.firstElementChild.classList.contains('dark-theme')){
            themeButton.firstElementChild.classList.remove('hidden');
            themeButton.lastElementChild.classList.add('hidden');
        }else{
            themeButton.firstElementChild.classList.add('hidden');
            themeButton.lastElementChild.classList.remove('hidden');
        };
    }

    /**
     * Creates a theme button for toggling light/dark theme.
     * 
     * @returns HTMLElement Theme Button
     */
    #createThemeButton(){
        const themeButton = document.createElement('button');
        themeButton.classList.add('header__theme-btn');
        
        // Add the on click event
        themeButton.onclick = () => {this.#clickThemeButton(themeButton)};
        themeButton.innerHTML = `
            <img class="icon" src="${moonIcon}" alt="Light Theme"/>
            <img class="icon" src="${sunIcon}" alt="Dark Theme"/>
        `;
        
        // Hide the inactive theme icon 
        if (document.firstElementChild.classList.contains('dark-theme')){
            themeButton.firstElementChild.classList.remove('hidden');
            themeButton.lastElementChild.classList.add('hidden');
        }else{
            themeButton.firstElementChild.classList.add('hidden');
            themeButton.lastElementChild.classList.remove('hidden');
        }; 


        return themeButton;
    };

    /**
     * Fills the innerHTML of the header element and returns the header element.
     * 
     * @returns HTMLElement Header element
     */
    create(){
        this.header.innerHTML = `
            <div class="container header__container">
                <div class='header__settings'>
                </div>
                <h1 class='header__title'>Sorting Visualizer</h1>
            </div>
        `;

        // Add the header settings buttons
        const headerSettings = this.header.querySelector('.header__settings');
        headerSettings.appendChild(this.#createThemeButton());

        return this.header;
    }
};

export default Header;