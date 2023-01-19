import './home-page.css';

class HomePage {

    constructor(){
        this.main = document.createElement('main');
        this.main.classList.add('page', 'home-page');
        const container = document.createElement('div');
        container.classList.add('container', 'home-page__container');
        this.main.appendChild(container)
    }

    create() {
       

        this.#createArrayBars();

        const heading = document.createElement('h1');
        heading.innerHTML = 'Sorting Algorithms <br> Visualizer';
        this.main.firstElementChild.appendChild(heading);

        
        return this.main;
    };

    #createArrayBars() {
        const arrayBarContainer = document.createElement('div');
        arrayBarContainer.classList.add('home-page__bars-container');
        for (let i=0; i<=10; i++){
            const container = document.createElement('div');
            container.style.height = `${5 + i*9.5}%`;
            container.style.width = '10%';
            arrayBarContainer.appendChild(container);
        };
        this.main.firstElementChild.appendChild(arrayBarContainer);
    }
}

export default HomePage;