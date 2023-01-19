import './sort-page.css';

class SortPage {
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

    create (){
        this.#createHeader();
        this.createVisualizer();
        this.#createArticle();
        return this.page;
    };

    #createHeader(){
        const header = document.createElement('header');
        header.classList.add('sort-page__header');
        header.innerHTML = `<h2 class='sort-page__title'>${this.title}</h2>`;
        this.pageContainer.appendChild(header);
    };

    createVisualizer(){
        throw new Error('createVisualizer() method must be overriden in subclasses');
    };
    
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

    #createDescripton(article){
        const section = this.#createPageSection('sort-page__description', 'Description')

       for (const idx in this.description) {
            const paragraph = document.createElement('p');
            paragraph.textContent = this.description[idx];
            section.appendChild(paragraph);
        };

        article.appendChild(section);
    };


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