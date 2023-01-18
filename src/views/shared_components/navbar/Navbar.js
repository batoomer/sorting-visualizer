import { inPlaceNavLinks } from "../../../data/navigaton-data";
import closeIcon from "../../../images/close-icon.svg";
import './navbar.css';

class Navbar {
    constructor(className){
        this.navbar = document.createElement('nav');
        this.navbar.classList.add('navbar', this.className);
        const listContainer = document.createElement('ul');
        listContainer.classList.add('navbar__list');
        this.navbar.appendChild(listContainer);
    }

    create(){
        this.#creatCloseContainer();
        this.#createHomeLink();
        this.#createSeparator();
        this.#createSectionLinks('In-Place Algorithms', inPlaceNavLinks);
        this.#createSeparator();
        return this.navbar;
    };

    #createHomeLink() {
        // Create li element
        const listItem = document.createElement('li');
        
        // li element contents
        // Link to Home Page
        const titleElement = document.createElement('h3');
        titleElement.classList.add('navbar__subtitle');

        const homeLink = document.createElement('a');
        homeLink.textContent = 'Home';
        homeLink.href = '/';
        homeLink.classList.add('navbar__link', 'navbar__home-link');
        
        titleElement.appendChild(homeLink);

        // Add the contents to the li element
        listItem.appendChild(titleElement);
        
        // Add the li element to the list
        this.navbar.firstElementChild.append(listItem);
    };

    #createSeparator(){
        // Create li element
        const listItem = document.createElement('li');
        
         // li element contents
         // span element to draw a vertical separator line
        const separator = document.createElement('span');
        separator.classList.add('navbar__separator');

         // Add the contents to the li element
        listItem.appendChild(separator);

        // Add the li element to the list
        this.navbar.firstElementChild.append(listItem);
    };

    #createSectionLinks(title, links){
         // Create li element
        const mainListItem = document.createElement('li');
        
        // Li Element Contents
        // Create Title
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        titleElement.classList.add('navbar__subtitle');
        
        //Create a sublist
        const linkList = document.createElement('ul');
        linkList.classList.add('navbar__sublist');

        // Iterate trough links array
        links.forEach(link => {
             // Create li element for the sublist
            const listItem = document.createElement('li');
            listItem.classList.add('navbar__list-item');
            
            // Sublist Li Element Contents
            // Create Link to the target page
            const linkElement = document.createElement('a');
            linkElement.textContent = link.name;
            linkElement.href = link.url;
            linkElement.classList.add('navbar__link');
            // Add Contents to the Sublist li element
            listItem.appendChild(linkElement);

            // Add the li to the sublist
            linkList.appendChild(listItem);
        });

        // Add Contents to the li element
        mainListItem.append(titleElement, linkList)

        // Add the li element to the list
        this.navbar.firstElementChild.append(mainListItem);
    };

    #creatCloseContainer(){
        // Create container to hold the button
        const container = document.createElement('div');
        container.classList.add('navbar__close-container');
        
        // Create button
        const button = document.createElement('button');
        button.classList.add('navbar__close-btn');
        // Add button on click event to close the navbar
        button.onclick = () => {this.navbar.classList.remove('active')};

        // Create Close Icon
        const closeImage = new Image();
        closeImage.classList.add('icon' ,'navbar__close-icon');
        closeImage.src = closeIcon;
        closeImage.alt = 'Close Navbar';
        
        button.appendChild(closeImage);
        container.appendChild(button);

        // Append container to the navbar
        this.navbar.appendChild(container);
    };
};

export default Navbar