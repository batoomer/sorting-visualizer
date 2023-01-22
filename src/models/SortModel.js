import bubbleSort from "../algorithms/bubbleSort";
import insertionSort from "../algorithms/insertionSort";
import selectionSort from "../algorithms/selectionSort";

/**
 * Represents the model for sorting algorithms
 */
class SortModel{
    /**
     * Initializes the size of the data array, generates a random array of integers and creates an empty array for animation.
     */
    constructor(){
        this.size = 100;
        this.data = this.#generateRandomArray(this.size, 5, 2*this.size);

        this.animation = [];
    };

    /**
     * 
     * @returns {Array} the data array
     */
    getData(){
        return this.data;
    };

    /**
     * Sets a new size, creates a new random array and creates a new empty animation array
     * 
     * @param {Number} value new size of the array
     */
    set_size(value){
        this.size = value;
        this.shuffle();
        this.animation = [];
        
    };

    /**
     * Shuffles the data and sets the animation array to an empty array
     */
    shuffle(){
        this.data = this.#generateRandomArray(this.size, 1, 2*this.size);
        this.animation = [];
    };

    /**
     * Takes in an algorithm as a string and uses a switch statement to determine which sorting algorithm to use.
     * Exectues the chosen algorithm and stores the animation.
     * 
     * @param {String} algorithm Title of the algorithm
     */
    sort(algorithm){
        let sorter;
        switch (algorithm){
            case 'Bubble Sort': {
                sorter = bubbleSort;
                break;
            }

            case 'Selection Sort': {
                sorter = selectionSort;
                break;
            }

            case 'Insertion Sort': {
                sorter = insertionSort;
            }

            default: {
                console.log('Invalid Algorithm');
                break;
            }
        }
        
        this.animation = sorter(this.data);
    };

    /**
     * Generates a random array of integers with a specified length, minimum and maximum value.
     * 
     * @param {Number} length Length of the array
     * @param {Number} min minimum integer value
     * @param {Number} max maximum integer value
     * @returns {Array} New Array of integers
     */
    #generateRandomArray(length, min, max){
        return Array.from({length}, () => Math.floor(Math.random()*(max-min+1)+min));
    };



};

export default SortModel;