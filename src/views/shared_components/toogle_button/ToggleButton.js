import './toggle_button.css';


/**
The ToggleButton class creates a toggle button element with two icons that can be toggled between.
*/
class ToggleButton {

    /**
     * 
     * @param {string} className -  CSS classname to be added to the toggle button element.
     * @param {Object} firstIcon - The first icon to be displayed on the button. Should be an object with src and alt fields.
     * @param {Object} secondIcon - The second icon to be displayed on the button. Should be an object with src and alt fields.
     * @param {Function} onClick - The callback function to be invoked when the button is clicked.
     */
    constructor(className, firstIcon, secondIcon, onClick){
        this.firstIcon = firstIcon;
        this.secondIcon = secondIcon;
        this.button = document.createElement('button');
        this.button.classList.add('toggle-btn', className);
        this.onClickEvent = onClick;
    };

    /**
     * Creates the button element with the icons and onclick event
     * 
     * @returns {HTMLElement} The created button element
     */
    create(){
        // Create the icons
        this.#createIcons();

        // Add the click event on the button
        this.button.onclick = () => {this.#handleClickEvent()};

        return this.button
    };

    /**
    * Creates and appends the primary and secondary icons to the button element.
    * The primary icon is displayed by default, while the secondary icon is hidden.
    */
    #createIcons(){
        const primaryIcon = new Image();
        primaryIcon.classList.add('icon');
        primaryIcon.src = this.firstIcon.src;
        primaryIcon.alt = this.firstIcon.alt;
        this.button.appendChild(primaryIcon);

        const secondaryIcon = new Image();
        secondaryIcon.classList.add('icon', 'hidden');
        secondaryIcon.src = this.secondIcon.src;
        secondaryIcon.alt = this.secondIcon.alt;
        this.button.appendChild(secondaryIcon);
    };


    /**
     * Handles the click event of the button.
     * Toggles the visibility of the two icons and calls the onClickEvent function
     */
    #handleClickEvent() {
        this.button.firstElementChild.classList.toggle('hidden');
        this.button.lastElementChild.classList.toggle('hidden');
        this.onClickEvent();
    };
};


export default ToggleButton;