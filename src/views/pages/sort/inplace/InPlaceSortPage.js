import InPlaceVisualizer from "../../../shared_components/inplace_visualizer/InPlaceVisualizer";
import SortPage from "../SortPage";

/**
 * InPlaceSortPage class is a subclass of SortPage class. It is used to create a page for displaying In-Place sorting algorithms
 * @extends SortPage
 */
class InPlaceSortPage extends SortPage {
    /**
     * 
     * @param {Object} algorithmData - An object containing data about the algorithm 
     */
    constructor(algorithmData){
        super(algorithmData);
        this.visualizer = new InPlaceVisualizer(algorithmData.title);
    };

    /**
     * Creates the visualizer and appends it to the page container
    */
    createVisualizer(){
        this.visualizer = this.visualizer.create();
        this.visualizer.classList.add('sort-page__visualizer-container');
        this.pageContainer.appendChild(this.visualizer);
       
    };
    
};


export default InPlaceSortPage;