import githubLogo from '../../../images/github-mark.svg';

import './footer.css';

class Footer {
    constructor(){
        this.year = new Date().getFullYear();
        this.footer = document.createElement('footer');
        this.footer.innerHTML = `
        <div class="container">
            <small>Copyright &copy; ${this.year}, Batouchan Omer
                <a href="https://github.com/batoomer" target="_blank">
                    <img class="icon" src=${githubLogo} alt="GitHub Mark" />
                </a>
            </small>
        </div>`;
    };

    /**
     * Creates the footer element and returns it.
     * 
     * @returns {HTMLElement} Footer Element
     */
    create(){
        return this.footer;
    };
}


export default Footer;