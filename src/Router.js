import { bubbleSortInfo, insertionSortInfo, quickSortInfo, selectionSortInfo } from "./data/sorting-algorithm-data";
import HomePage from "./views/pages/home/HomePage";
import InPlaceSortPage from "./views/pages/sort/inplace/InPlaceSortPage";

/**
 * Handles the client-side routing for the application
 * by handling the hashchange event and creating new pages
 * based on the current path
 */
class Router{
    
    /**
     * Constructor for Router class
     */
    constructor(){
        // Store the current path to prevent creating new pages for the same path
        this.currentPath = null;
    };

    /**
     * Initializes the Router by adding the hashchange event listener
     * and handling the initial route change
     */
    init() {
        // Listen for changes to the hash fragment of the URL
        window.addEventListener('hashchange', () => {
            this.handleRouteChange();
        });

        this.handleRouteChange();
    };

    /**
     * Handles the route change by extracting the path from the
     * window.location.hash, creating a new page based on the path,
     * and replacing the current main element with the new page
     */
    handleRouteChange(){
        // If the hash fragment is empty or just "#", default to the home page
        if (window.location.hash === '' || window.location.hash === '#') {
            window.location.hash = '/';
        };

        // Get the current path from the hash fragment
        const path = window.location.hash.slice(1);

        // If the current path is different from the new path
        if (path !== this.currentPath){
            // Store the new path as the current path
            this.currentPath = path;
            
            // Get the main element from the DOM
            const main = document.querySelector('.page');
            
            // Replace the main element with the new page
            main.replaceWith(this.createNewPage(path));
            
            // Scroll to the top of the page
            window.scrollTo(0, 0);
        };   
    };

    /**
     * Create a new page based on the path
     * @param {string} path - The path to create a new page for
     * @return {HTMLElement} The new page
     */
    createNewPage(path) {
        switch(path) {
            case '/': return new HomePage().create();
            case '/bubble-sort': return new InPlaceSortPage(bubbleSortInfo).create();
            case '/selection-sort': return new InPlaceSortPage(selectionSortInfo).create();
            case '/insertion-sort': return new InPlaceSortPage(insertionSortInfo).create();
            case '/quick-sort': return new InPlaceSortPage(quickSortInfo).create();
        };
    }
};

export default Router;