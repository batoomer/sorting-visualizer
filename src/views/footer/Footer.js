import githubLogo from '../../images/github-mark.svg';

import './footer.css';

class Footer {
    /**
     * Initializes a HTML footer element
     */
    constructor(){
        this.footer = document.createElement('footer');
    };

    /**
     * Creates the innerHTML of the footer element and returns it.
     * 
     * @returns {HTMLElement} Footer Element
     */
    create(){

        this.footer.innerHTML = `
            <div class="container">
                <small>Copyright 2023, &copy; Batouchan Omer
                    <a href="https://github.com/batoomer" target="_blank">
                        <img class="icon" src=${githubLogo} alt="GitHub Mark" />
                    </a>
                </small>
            </div>
        `;

        return this.footer;
    };
}


export default Footer;