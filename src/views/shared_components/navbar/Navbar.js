import { inPlaceNavLinks } from "../../../data/navigaton-data";
import closeIcon from "../../../images/close-icon.svg";
import './navbar.css';

/**
 * Navbar class is used to create and manage the navigation bar.
 */
class Navbar {
    /**
     * Initializes an empty navbar element with a container for a list of links.
    */  
    constructor(){
        this.navbar = document.createElement('nav');
        this.navbar.classList.add('navbar');
        const listContainer = document.createElement('ul');
        listContainer.classList.add('navbar__list');
        this.navbar.appendChild(listContainer);
    }

    /**
     * Creates the navbar element and returns it.
     * This method calls other internal methods to construct the navbar with all its contents.
     * @returns {HTMLElement} Navbar Element
     */
    create(){
        this.#creatCloseContainer();
        this.#createHomeLink();
        this.#createSeparator();
        this.#createSectionLinks('In-Place Algorithms', inPlaceNavLinks);
        this.#createSeparator();
        return this.navbar;
    };

    /**
     * Creates a list item element, a title element, and a link element for the home page. 
     * It appends the link to the title element, the title element to the list item element 
     * and the list item element to the navbar.
     */
    #createHomeLink() {
        const listItem = document.createElement('li');
        const titleElement = document.createElement('h3');
        titleElement.classList.add('navbar__subtitle');
        const homeLink = document.createElement('a');
        homeLink.textContent = 'Home';
        // Link to Home Page
        homeLink.href = '#/';
        homeLink.onclick = (e) => {this.#handleNavigationClick(e)};
        homeLink.classList.add('navbar__link', 'navbar__home-link', 'active');
        titleElement.appendChild(homeLink);
        listItem.appendChild(titleElement);
        
        this.navbar.firstElementChild.append(listItem);
    };

    /**
     * Creates a list item element and a span element to act as a separator. 
     * It appends the span element to the list item element, and the list item to the navbar.
     */
    #createSeparator(){
        const listItem = document.createElement('li');
         // span element to draw a vertical separator line
        const separator = document.createElement('span');
        separator.classList.add('navbar__separator');
        listItem.appendChild(separator);
        this.navbar.firstElementChild.append(listItem);
    };

    /**
     * Creates a section of links within the Navbar.
     * It takes in a title and an array of links as parameters.
     * It creates a main list item, a title element and a sublist element.
     * It then iterates through the links array, creating a list item and a link element for each.
     * The link element's text content is set to the name of the link, the href is set to the url of the link.
     * The onclick event is set to call the handleNavigationClick method.
     * The list item and link element are then appended to the sublist.
     * The title element, sublist element and the main list item are then appended to the Navbar.
     * 
     * @param {string} title - The title of the section of links
     * @param {Array} links - An array of link objects containing a name and url property
     */
    #createSectionLinks(title, links){
        const mainListItem = document.createElement('li');
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        titleElement.classList.add('navbar__subtitle');
        
        const linkList = document.createElement('ul');
        linkList.classList.add('navbar__sublist');

        links.forEach(link => {
            const listItem = document.createElement('li');
            listItem.classList.add('navbar__list-item');
            
            const linkElement = document.createElement('a');
            linkElement.textContent = link.name;
            linkElement.href = link.url;
            linkElement.classList.add('navbar__link');
            linkElement.onclick = (e) => {this.#handleNavigationClick(e);};
            listItem.appendChild(linkElement);

            linkList.appendChild(listItem);
        });

        mainListItem.append(titleElement, linkList)
        this.navbar.firstElementChild.append(mainListItem);
    };

    /**
     * Handles the click event on the navigation links.
     * It removes the active class from the current active link and adds it to the clicked link.
     * It also closes the navbar if it is open.
     * 
     * @param {Event} e - the click event object
    */
    #handleNavigationClick(e) {
        this.navbar.classList.remove('active');
        const activeLink = document.querySelector('.navbar__link.active');
        if (e.target !== activeLink){
            activeLink.classList.remove('active');
            e.target.classList.add('active');
        };
    }

    /**
     * Creates the close container for the navbar, including the close button and icon.
     */
    #creatCloseContainer(){
        const container = document.createElement('div');
        container.classList.add('navbar__close-container');
        
        const button = document.createElement('button');
        button.classList.add('navbar__close-btn');
        button.onclick = () => {this.#handleCloseButtonClick()};

        const closeImage = new Image();
        closeImage.classList.add('icon' ,'navbar__close-icon');
        closeImage.src = closeIcon;
        closeImage.alt = 'Close Navbar';
        
        button.appendChild(closeImage);
        container.appendChild(button);

        this.navbar.appendChild(container);
    };

    /**
     * Handles the click event on the close button.
     * It also closes the navbar if it is open by removing the active class.
    */
    #handleCloseButtonClick() {
        this.navbar.classList.remove('active');
    }
};

export default Navbar