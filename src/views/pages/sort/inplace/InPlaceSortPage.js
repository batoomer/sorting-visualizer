import InPlaceVisualizer from "../../../shared_components/inplace_visualizer/InPlaceVisualizer";
import SortPage from "../SortPage";

class InPlaceSortPage extends SortPage {
    constructor(algorithmData){
        super(algorithmData);
        this.visualizer = new InPlaceVisualizer();
    };

    createVisualizer(){
        this.visualizer = this.visualizer.create();
        this.visualizer.classList.add('sort-page__visualizer-container');
        this.pageContainer.appendChild(this.visualizer);
       
    };
    
};


export default InPlaceSortPage;