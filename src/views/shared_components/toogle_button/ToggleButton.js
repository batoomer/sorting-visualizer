import './toggle_button.css';

class ToggleButton {
    constructor(className, firstIcon, secondIcon, onClick){
        this.firstIcon = firstIcon;
        this.secondIcon = secondIcon;
        this.button = document.createElement('button');
        this.button.classList.add('toggle-btn', className);
        this.onClickEvent = onClick;
    };

    create(){
        // Create the icons
        this.#createIcons();

        this.button.onclick = () => {this.#handleClickEvent()};

        return this.button
    };


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

    #handleClickEvent() {
        this.button.firstElementChild.classList.toggle('hidden');
        this.button.lastElementChild.classList.toggle('hidden');
        this.onClickEvent();
    };
};


export default ToggleButton;