import Footer from "./views/shared_components/footer/Footer";
import Header from "./views/shared_components/header/Header";
import Navbar from "./views/shared_components/navbar/Navbar";
import Router from "./Router";


/**
 * App class is the entry point of the application
 * it creates the header, navbar, main and footer components
 * and appends them to the body element.
 * it also creates and initializes the router
 */
class App{
    /**
     * Constructor for App class.
     */
    constructor(){
        this.header = new Header();
        this.navbar = new Navbar();
        this.main = document.createElement('main');
        this.main.classList.add('page');
        this.footer = new Footer();
        this.router = new Router();

        this.#addGlobalStates();
    };

    /**
     * Appends the created components to the body
     * and calls the init method of the router
     */
    run(){
        document.body.append(
            this.header.create(),
            this.navbar.create(),
            this.main,
            this.footer.create()
        );
        this.router.init();
    }

    /**
     * Saves the theme state on beforeunload event
     * and applies the theme state on page load
     */
    #addGlobalStates(){
        // Save the theme state on beforeunload event
        window.addEventListener("beforeunload", () => {
            if (document.documentElement.classList.contains("dark-theme")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });

        // Apply the theme state on page load
        window.addEventListener("load", () => {
            const theme = localStorage.getItem("theme");
            if (theme === "dark") {
                document.documentElement.classList.add("dark-theme");
            } else {
                document.documentElement.classList.remove("dark-theme");
            }
        });
    }
};



export default App;