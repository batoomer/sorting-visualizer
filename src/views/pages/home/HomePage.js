import './home-page.css';

/**
 * HomePage class is responsible for creating the home page.
 */
class HomePage {

     /**
     * Initialize the main container of the home page and add the necessary classes
     */
    constructor(){
        this.main = document.createElement('main');
        this.main.classList.add('page', 'home-page');
        const container = document.createElement('div');
        container.classList.add('container', 'home-page__container');
        this.main.appendChild(container)
    }


    destroy(){
        
    }

    /**
     * Create the home page and return the main element
     */
    create() {
       
        // Create Array Bars
        this.#createArrayBars();

        // Create the Title
        const heading = document.createElement('h1');
        heading.innerHTML = 'Sorting Algorithms <br> Visualizer';
        this.main.firstElementChild.appendChild(heading);

        
        return this.main;
    };

    /**
     * Create the array bars displayed on the home page
     */
    #createArrayBars() {
        // Initialize a div element and add the necessary class
        const arrayBarContainer = document.createElement('div');
        arrayBarContainer.classList.add('home-page__bars-container');

        // Append 10 div elements setting their heights and widths
        for (let i=0; i<=10; i++){
            const container = document.createElement('div');
            container.style.height = `${5 + i*9.5}%`;
            container.style.width = '10%';
            arrayBarContainer.appendChild(container);
        };

        // Append the array bars to the first child of the main element.
        this.main.firstElementChild.appendChild(arrayBarContainer);
    }
}

export default HomePage;