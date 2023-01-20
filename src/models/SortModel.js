import bubbleSort from "../algorithms/bubbleSort";

class SortModel{

    constructor(){
        this.size = 100;
        this.data = this.#generateRandomArray(this.size, 5, 2*this.size);

        this.animation = [];
    };

    getData(){
        return this.data;
    };

    set_size(value){
        this.size = value;
        this.shuffle();
        this.animation = [];
        
    };

    shuffle(){
        this.data = this.#generateRandomArray(this.size, 1, 2*this.size);
        this.animation = [];
    };

    sort(algorithm){
        const sorter = bubbleSort;
        this.animation = sorter(this.data);
    };

    #generateRandomArray(length, min, max){
        return Array.from({length}, () => Math.floor(Math.random()*(max-min+1)+min));
    };



};

export default SortModel;