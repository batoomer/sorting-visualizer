import './sort-page.css';

/**
 * The class creates a sort page with a header, visualizer, and article sections.
 */
class SortPage {
    /**
     * 
     * @param {Object} param0 An object with properties title, description, complexity, and pseudocode
     */
    constructor({title, description, complexity, pseudocode}) {
        this.title = title;
        this.description = description;
        this.complexity = complexity;
        this.pseudocode = pseudocode;

        this.page = document.createElement('main');
        this.page.classList.add('page', 'sort-page');
        this.pageContainer = document.createElement('div');
        this.pageContainer.classList.add('container', 'sort-page__container')
        this.page.appendChild(this.pageContainer);
    };

    /**
     * Creates the page and calls other methods to create the different sections of the page.
     * 
     * @returns {HTMLElement} main
     */
    create (){
        this.#createHeader();
        this.createVisualizer();
        this.#createArticle();
        return this.page;
    };

    /**
     * Creates the header section of the page with the title of the sort algorithm.
     */
    #createHeader(){
        const header = document.createElement('header');
        header.classList.add('sort-page__header');
        header.innerHTML = `<h2 class='sort-page__title'>${this.title}</h2>`;
        this.pageContainer.appendChild(header);
    };

    /**
     * An abstract method that needs to be overriden in subclasses.
     * 
     * @abstract
     */
    createVisualizer(){
        throw new Error('createVisualizer() method must be overriden in subclasses');
    };
    
    /**
     * Creates the article section of the page with a description, complexity, and pseudocode of the sort algorithm.
     */
    #createArticle(){
        const article = document.createElement('article');
        article.classList.add('sort-page__article');
        const container = document.createElement('div');
        container.classList.add('container');
        article.appendChild(container);

        this.#createDescripton(container);
        this.#createComplexity(container);
        this.#createPseudocode(container);

        this.page.appendChild(article);
    }

    /**
     * Creates the Description section in the article section.
     * 
     * @param {HTMLEelement} article the article element to apppend to.
     */
    #createDescripton(article){
        const section = this.#createPageSection('sort-page__description', 'Description')

       for (const idx in this.description) {
            const paragraph = document.createElement('p');
            paragraph.textContent = this.description[idx];
            section.appendChild(paragraph);
        };

        article.appendChild(section);
    };

    /**
     * Creates the Complexity section in the article section.
     * 
     * @param {HTMLEelement} article the article element to apppend to.
     */
    #createComplexity(article){
        const section = this.#createPageSection('sort-page__complexity', 'Complexity')

        const paragraph = document.createElement('p');
        paragraph.textContent = 'The Time and Space Comlexities are shown in the table below.';
        section.appendChild(paragraph);

        const table = document.createElement('table');
        table.classList.add('sort-page__complexity-table');
        table.innerHTML = `
            <tr><th rowspan="3">Time Complexity</th><th>Best</th><td>${this.complexity.bestTime}</td></tr>
            <tr><th>Average</th><td>${this.complexity.avgTime}</td></tr>
            <tr><th>Worst</th> <td>${this.complexity.worstTime}</td></tr>
            <tr><th colspan="2">Space Complexity</th><td>${this.complexity.spaceComplexity}</td></tr>
        `;

        section.appendChild(table);

        article.appendChild(section);
    };

    /**
     * Creates the Pseudocode section in the article section.
     * 
     * @param {HTMLEelement} article the article element to apppend to.
     */
    #createPseudocode(article){
        const section = this.#createPageSection('sort-page__pseudocode', 'Pseudocode')
        
        const paragraph = document.createElement('p');
        paragraph.textContent = 'In pseudocode the algorithm can be expressed as shown bellow.';
        section.appendChild(paragraph);

        const pre = document.createElement('pre');
        pre.innerHTML = `<code>${this.pseudocode}</code>`
        section.appendChild(pre);

        article.appendChild(section);
    };

    /**
     * Helper method that creates a section element with a given class and title.
     * 
     * @param {String} className A class name for the section
     * @param {String} title A title for the section
     * @returns {HTMLElement} section
     */
    #createPageSection(className, title){
        const section = document.createElement('section');
        section.classList.add(className);

        const heading = document.createElement('h3');
        heading.textContent = title;
        section.appendChild(heading);

        return section;
    };

};

export default SortPage;