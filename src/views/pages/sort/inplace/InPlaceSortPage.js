import SortPage from "../SortPage";

class InPlaceSortPage extends SortPage {
    constructor(algorithmData){
        super(algorithmData);
    };

    createVisualizer(){
        this.visualizer = document.createElement('div');
        this.visualizer.classList.add('sort-page__visualizer-container');
        this.pageContainer.appendChild(this.visualizer);
    };
    
};


export default InPlaceSortPage;