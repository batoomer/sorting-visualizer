import githubLogo from '../../../images/github-mark.svg';

import './footer.css';

/**
 * Class representing the footer component
 */
class Footer {
    constructor(){
        // Get the current year
        this.year = new Date().getFullYear();

        // Create the footer element
        this.footer = document.createElement('footer');
        
    };

    /**
     * Creates the footer element and returns it.
     * 
     * @returns {HTMLElement} Footer Element
     */
    create(){
        // Add the HTML content to the footer element
        this.footer.innerHTML = `
        <div class="container">
            <small>Copyright &copy; ${this.year}, Batouchan Omer
                <a href="https://github.com/batoomer" target="_blank">
                    <img class="icon" src=${githubLogo} alt="GitHub Mark" />
                </a>
            </small>
        </div>`;
        return this.footer;
    };
}


export default Footer;