/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/pages/home/home-page.css":
/*!********************************************!*\
  !*** ./src/views/pages/home/home-page.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/pages/sort/sort-page.css":
/*!********************************************!*\
  !*** ./src/views/pages/sort/sort-page.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/shared_components/footer/footer.css":
/*!*******************************************************!*\
  !*** ./src/views/shared_components/footer/footer.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/shared_components/header/header.css":
/*!*******************************************************!*\
  !*** ./src/views/shared_components/header/header.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/shared_components/inplace_visualizer/inplace-visualizer.css":
/*!*******************************************************************************!*\
  !*** ./src/views/shared_components/inplace_visualizer/inplace-visualizer.css ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/shared_components/navbar/navbar.css":
/*!*******************************************************!*\
  !*** ./src/views/shared_components/navbar/navbar.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/shared_components/toogle_button/toggle_button.css":
/*!*********************************************************************!*\
  !*** ./src/views/shared_components/toogle_button/toggle_button.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_shared_components_footer_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/shared_components/footer/Footer */ "./src/views/shared_components/footer/Footer.js");
/* harmony import */ var _views_shared_components_header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/shared_components/header/Header */ "./src/views/shared_components/header/Header.js");
/* harmony import */ var _views_shared_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/shared_components/navbar/Navbar */ "./src/views/shared_components/navbar/Navbar.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Router */ "./src/Router.js");






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
        this.header = new _views_shared_components_header_Header__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.navbar = new _views_shared_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.main = document.createElement('main');
        this.main.classList.add('page');
        this.footer = new _views_shared_components_footer_Footer__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.router = new _Router__WEBPACK_IMPORTED_MODULE_3__["default"]();

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_sorting_algorithm_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/sorting-algorithm-data */ "./src/data/sorting-algorithm-data.js");
/* harmony import */ var _views_pages_home_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/pages/home/HomePage */ "./src/views/pages/home/HomePage.js");
/* harmony import */ var _views_pages_sort_inplace_InPlaceSortPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/pages/sort/inplace/InPlaceSortPage */ "./src/views/pages/sort/inplace/InPlaceSortPage.js");




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
            case '/': return new _views_pages_home_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"]().create();
            case '/bubble-sort': return new _views_pages_sort_inplace_InPlaceSortPage__WEBPACK_IMPORTED_MODULE_2__["default"](_data_sorting_algorithm_data__WEBPACK_IMPORTED_MODULE_0__.bubbleSortInfo).create();
            case '/selection-sort': return new _views_pages_sort_inplace_InPlaceSortPage__WEBPACK_IMPORTED_MODULE_2__["default"](_data_sorting_algorithm_data__WEBPACK_IMPORTED_MODULE_0__.selectionSortInfo).create();
            case '/insertion-sort': return new _views_pages_sort_inplace_InPlaceSortPage__WEBPACK_IMPORTED_MODULE_2__["default"](_data_sorting_algorithm_data__WEBPACK_IMPORTED_MODULE_0__.insertionSortInfo).create();
            case '/quick-sort': return new _views_pages_sort_inplace_InPlaceSortPage__WEBPACK_IMPORTED_MODULE_2__["default"](_data_sorting_algorithm_data__WEBPACK_IMPORTED_MODULE_0__.quickSortInfo).create();
        };
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);

/***/ }),

/***/ "./src/algorithms/bubbleSort.js":
/*!**************************************!*\
  !*** ./src/algorithms/bubbleSort.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bubbleSort)
/* harmony export */ });
function bubbleSort(data){
    // Variable to store the animations
    let animations = [];

    for (let i = 0; i < data.length; i++){
        for(let j=0; j< data.length; j++){
            if (data[j] > data[j+1]){
                animations.push([j,j+1]);
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            };
        };
    };
    return animations;
};

/***/ }),

/***/ "./src/algorithms/insertionSort.js":
/*!*****************************************!*\
  !*** ./src/algorithms/insertionSort.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertionSort)
/* harmony export */ });
function insertionSort(data){
    // Variable to store the animations
    let animations = [];

    for (let i = 1; i<data.length; i++){
        let j = i;
        while (j>0){
            
            if (data[j-1] >= data[j]){
                animations.push([j,j-1]);
                let temp = data[j];
                data[j] = data[j-1];
                data[j-1] = temp;

            };

            j--;
        };
    }
    return animations;
};

/***/ }),

/***/ "./src/algorithms/quickSort.js":
/*!*************************************!*\
  !*** ./src/algorithms/quickSort.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ quickSort)
/* harmony export */ });
function quickSort(data){
    let animation = [];

    __quickSort(data, 0, data.length - 1, animation)

    console.log(animation)
    console.log(data)
    return animation
}

const __quickSort = (data, left, right, animation) => {
    if (left < right){
        let p = __hoare_partition(data, left, right, animation)
        __quickSort(data, left, p, animation);
        __quickSort(data, p+1, right, animation);
    };
};



const __hoare_partition = (data, left, right, animation) => {
    let p_idx = Math.floor((right+left)/2);
    let pivot = data[p_idx];

    let l_idx = left - 1;
    let r_idx = right + 1;

    while (true) {
        
        l_idx++;
        while (data[l_idx] < pivot){
            l_idx++;
        };

        r_idx--;
        while(data[r_idx] > pivot){
            r_idx--;
        };

        if (l_idx >= r_idx){
            return r_idx
        };

        animation.push([l_idx, r_idx]);
        let temp = data[l_idx];
        data[l_idx] = data[r_idx];
        data[r_idx] = temp;
    };
}

/***/ }),

/***/ "./src/algorithms/selectionSort.js":
/*!*****************************************!*\
  !*** ./src/algorithms/selectionSort.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectionSort)
/* harmony export */ });
function selectionSort(data){
    let animation = [];

    for (let i=0; i< data.length-1; i++){
        
        let minIndex = i;
        
        for (let j=i+1; j< data.length; j++){
            if (data[j] < data[minIndex]){
                minIndex = j;
            };
        };

        if (minIndex != i){
            animation.push([i, minIndex]);
            let temp = data[i];
            data[i] = data[minIndex];
            data[minIndex] = temp;
        };
    };

    return animation
}

/***/ }),

/***/ "./src/data/navigaton-data.js":
/*!************************************!*\
  !*** ./src/data/navigaton-data.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inPlaceNavLinks": () => (/* binding */ inPlaceNavLinks)
/* harmony export */ });

/**
 * An array of objects, containing data for navigation links of in-place sorting algorithm.
 */
const inPlaceNavLinks = [
    {
        name: 'Bubble Sort',
        url: '#/bubble-sort'
    },

    {
        name: 'Selection Sort',
        url: '#/selection-sort'
    },

    {
        name: 'Insertion Sort',
        url: '#/insertion-sort'
    },

    {
        name: 'Quick Sort',
        url: '#/quick-sort'
    },
];

/***/ }),

/***/ "./src/data/sorting-algorithm-data.js":
/*!********************************************!*\
  !*** ./src/data/sorting-algorithm-data.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bubbleSortInfo": () => (/* binding */ bubbleSortInfo),
/* harmony export */   "insertionSortInfo": () => (/* binding */ insertionSortInfo),
/* harmony export */   "quickSortInfo": () => (/* binding */ quickSortInfo),
/* harmony export */   "selectionSortInfo": () => (/* binding */ selectionSortInfo)
/* harmony export */ });
/**
 * Objects containing information about the respective sorting algorithms. Each object contains the following properties:
 * 
 * title: a string representing the title/name of the sorting algorithm.
 * description: an array of strings providing a brief overview of the sorting algorithm.
 * complexity: an object providing the time and space complexities of the sorting algorithm.
 * pseudocode: a string containing a representation of the sorting algorithm in pseudocode format.
 */

const bubbleSortInfo = {
    title: 'Bubble Sort',
    description: [
        `Bubble sort is a basic sorting method that repeatedly goes through the list, comparing adjacent items and switching them if 
        they are not in the correct order. This process is repeated until no more swaps are required, indicating the list is sorted. 
        The name "bubble sort" comes from the way smaller or larger elements "rise" to the top of the list.`,
        `Bubble sort has a time complexity of O(n^2), which makes it less efficient for larger lists. However, it is easy to understand 
        and implement, making it a popular choice for beginners learning about sorting algorithms. Despite its inefficiency, 
        bubble sort can be useful in certain cases where the list is small or the data is already partially sorted.`,
        `Bubble sort is not the only sorting algorithm that uses the "compare and swap" approach. There are other algorithms like Insertion 
        sort and Selection sort which also use this approach but have different ways of selecting the element to compare and swap.`
    ],

    complexity: {
        bestTime: `Ω(n)`,
        avgTime: `Θ(n<sup>2</sup>)`,
        worstTime: `O(n<sup>2</sup>)`,
        spaceComplexity: 'O(1)',
    },

    pseudocode: `<span class="keyword">procedure</span> bubbleSort( A : list of sortable items )
    n =  <span class="function">length(</span>A<span class="function">)</span>
    <span class="keyword">repeat</span> 
        swapped = <span class="value">false</span>
        <span class="keyword">for</span> i = <span class="value">1</span> <span class="keyword">to</span> n-<span class="value">1</span> inclusive <span class="keyword">do</span>
            <span class="comment">/* if this pair is out of order */</span>
            <span class="keyword">if</span> A[i-<span class="value">1</span>] > A[i] <span class="keyword">then</span>
                <span class="comment">/* swap them and remember something changed */</span>
                <span class="function">swap(</span> A[i-<span class="value">1</span>], A[i] <span class="function">)</span>
                swapped = <span class="value">true</span>
            <span class="keyword">end if</span>
        <span class="keyword">end for</span>
    <span class="keyword">until not</span> swapped
<span class="keyword">end procedure</span>`,
};

const selectionSortInfo = {
    title: 'Selection Sort',
    description: [
        `Selection sort is a simple sorting algorithm that repeatedly selects the smallest element from the unsorted portion of the list and places 
        it at the beginning of the sorted portion of the list. This process is repeated until all elements have been moved to the sorted portion of 
        the list. Selection sort is a comparison-based sorting algorithm.`,
        `Selection sort has a time complexity of O(n^2) which makes it less efficient for larger lists. It performs well on small lists or data sets 
        and is often used as a simple sorting algorithm for educational purposes.`,
        `However, it has its own advantages over other sorting algorithms like it's easy to understand and implement, it's in-place sorting algorithm,
        which means it doesn't require any additional memory space. It's also useful in certain cases where the data is already partially sorted.`
    ],

    complexity: {
        bestTime: `Ω(n<sup>2</sup>)`,
        avgTime: `Θ(n<sup>2</sup>)`,
        worstTime: `O(n<sup>2</sup>)`,
        spaceComplexity: 'O(1)',
    },

    pseudocode: `<span class="keyword">procedure</span> selectionSort( A : list of sortable items )
    n =  <span class="function">length(</span>A<span class="function">)</span>
    <span class="keyword">for</span> i = <span class="value">0</span>  <span class="keyword">to</span> n - <span class="value">1</span>
        minIndex = i
        <span class="keyword">for</span> j = i + <span class="value">1</span>  <span class="keyword">to</span> n - <span class="value">1</span>
            <span class="keyword">if</span> A[j] < A[minIndex]
                minIndex = j
            <span class="keyword">end if</span>
        <span class="keyword">end for</span>
        <span class="keyword">swap</span> A[i] <span class="keyword">with</span> A[minIndex]
    <span class="keyword">end for</span>
<span class="keyword">end procedure</span>`
};

const insertionSortInfo = {
    title: 'Insertion Sort',
    description: [
        `Insertion sort is a simple sorting algorithm that builds the final sorted list one item at a time. It starts with an empty sorted list 
        and repeatedly takes the next unsorted item and inserts it into the correct position within the sorted list. This process is repeated until 
        all items have been inserted into the sorted list. It's similar to how we sort a deck of cards by picking one card at a time and inserting it 
        into the correct position in the deck.`,

        `Insertion sort is a comparison-based sorting algorithm and has a time complexity of O(n^2) which makes it less efficient for larger lists. 
        However, it performs well on small lists or data sets and is efficient for data sets that are already partially sorted or have some elements 
        sorted in reverse order. It's also an in-place sorting algorithm, which means it doesn't require any additional memory space.`
    ],

    complexity: {
        bestTime: `Ω(n)`,
        avgTime: `Θ(n<sup>2</sup>)`,
        worstTime: `O(n<sup>2</sup>)`,
        spaceComplexity: 'O(1)',
    },

    pseudocode: `<span class="keyword">procedure</span> insertionSort( A : list of sortable items )
    n =  <span class="function">length(</span>A<span class="function">)</span>
    <span class="keyword">for</span> i = <span class="value">1</span>  <span class="keyword">to</span> n - <span class="value">1</span>
        j = i
        <span class="keyword">while</span> j >= <span class="value">0</span>
            <span class="keyword">if</span> A[j] <= A[j-<span class="value">1</span>]
                <span class="keyword">swap</span> A[j] <span class="keyword">with</span> A[j-<span class="value">1</span>]
            <span class="keyword">end if</span>
            j = j - <span class="value">1</span>
        <span class="keyword">end while</span>
    <span class="keyword">end for</span>
<span class="keyword">end procedure</span>`
};

const quickSortInfo = {
    title: 'Quick Sort',
    description: [
        `Quick sort is a popular and efficient sorting algorithm that uses a divide-and-conquer strategy to sort a given data set. It starts by selecting a "pivot" 
        element from the data set, and partitioning the other elements into two groups: those less than the pivot and those greater than the pivot. The pivot is then 
        in its final position in the sorted data set. The process is then repeated recursively on the two partitioned groups until the entire data set is sorted.`,

        `One of the advantages of quick sort is its efficiency, with an average time complexity of O(n log n). Additionally, it has the ability to perform well even 
        in cases where the input data is already partially sorted or contains many duplicates. However, quick sort also has some drawbacks. One potential issue is that 
        it can have a worst-case time complexity of O(n^2) if the pivot is chosen poorly, such as always selecting the first or last element in the partition. To mitigate this, 
        there are pivot selection strategies, such as choosing the median or a random element, that can be used to improve the performance of the algorithm`,

        `The Hoare partition scheme is a method used in the quick sort algorithm to partition an array into two sub-arrays. The Hoare partition scheme uses two indices, a 
        left index and a right index, to traverse the array and partition it based on a chosen pivot element. The pivot element is usually the middle element of the array, 
        but it can also be chosen randomly or using other methods. The left index starts at the first element of the array and moves towards the right, while the right index 
        starts at the last element of the array and moves towards the left. The two indices swap elements that are on the wrong side of the pivot until they meet in the middle, 
        at which point the array is partitioned and the pivot element is in its final position.`
    ],

    complexity: {
        bestTime: `Ω(nlogn)`,
        avgTime: `Θ(nlogn)`,
        worstTime: `O(n<sup>2</sup>)`,
        spaceComplexity: 'O(logn)',
    },

    pseudocode: `<span class="keyword">procedure</span> quickSort(A : list of sortable items, left : int, right : int)
    <span class="keyword">if</span> left < right
        p = <span class="function">hoare_partition(</span>A, left, right<span class="function">)</span>
        <span class="function">quickSort(</span>A, left, p<span class="function">)</span>
        <span class="function">quickSort(</span>A, p+<span class="value">1</span>, right<span class="function">)</span>
    <span class="keyword">end if</span>
<span class="keyword">end procedure</span>


<span class="keyword">procedure</span> hoare_partition(A : list of sortable items, left : int, right : int)
    pivot = A[(left + right) / <span class="value">2</span>]
    i = left - <span class="value">1</span>
    j = right + <span class="value">1</span>
    <span class="keyword">while</span> <span class="value">true</span>
        <span class="keyword">repeat</span>
            i = i + <span class="value">1</span>
        <span class="keyword">until</span> A[i] >= pivot
        <span class="keyword">repeat</span>
            j = j - <span class="value">1</span>
        <span class="keyword">until</span> A[j] <= pivot
        <span class="keyword">if</span> i >= j
            <span class="keyword">return</span> j
        <span class="keyword">end if</span>
        <span class="keyword">swap</span> A[i] <span class="keyword">with</span> A[j]
<span class="keyword">end procedure</span>`
}



/***/ }),

/***/ "./src/models/SortModel.js":
/*!*********************************!*\
  !*** ./src/models/SortModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _algorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../algorithms/bubbleSort */ "./src/algorithms/bubbleSort.js");
/* harmony import */ var _algorithms_insertionSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithms/insertionSort */ "./src/algorithms/insertionSort.js");
/* harmony import */ var _algorithms_quickSort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/quickSort */ "./src/algorithms/quickSort.js");
/* harmony import */ var _algorithms_selectionSort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/selectionSort */ "./src/algorithms/selectionSort.js");





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
                sorter = _algorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_0__["default"];
                break;
            }

            case 'Selection Sort': {
                sorter = _algorithms_selectionSort__WEBPACK_IMPORTED_MODULE_3__["default"];
                break;
            }

            case 'Insertion Sort': {
                sorter = _algorithms_insertionSort__WEBPACK_IMPORTED_MODULE_1__["default"];
                break;
            }

            case 'Quick Sort': {
                sorter = _algorithms_quickSort__WEBPACK_IMPORTED_MODULE_2__["default"];
                break;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortModel);

/***/ }),

/***/ "./src/views/pages/home/HomePage.js":
/*!******************************************!*\
  !*** ./src/views/pages/home/HomePage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.css */ "./src/views/pages/home/home-page.css");


/**
 * HomePage class is responsible for creating the home page.
 */
class HomePage {

     /**
     * Initialize the main container of the home page and add the necessary classes
     */
    constructor(){
        this.main = document.createElement('main');
        this.main.classList.add('page', 'home-page');
        const container = document.createElement('div');
        container.classList.add('container', 'home-page__container');
        this.main.appendChild(container)
    }

    /**
     * Create the home page and return the main element
     */
    create() {
       
        // Create Array Bars
        this.#createArrayBars();

        // Create the Title
        const heading = document.createElement('h1');
        heading.innerHTML = 'Sorting Algorithms <br> Visualizer';
        this.main.firstElementChild.appendChild(heading);

        
        return this.main;
    };

    /**
     * Create the array bars displayed on the home page
     */
    #createArrayBars() {
        // Initialize a div element and add the necessary class
        const arrayBarContainer = document.createElement('div');
        arrayBarContainer.classList.add('home-page__bars-container');

        // Append 10 div elements setting their heights and widths
        for (let i=0; i<=10; i++){
            const container = document.createElement('div');
            container.style.height = `${5 + i*9.5}%`;
            container.style.width = '10%';
            arrayBarContainer.appendChild(container);
        };

        // Append the array bars to the first child of the main element.
        this.main.firstElementChild.appendChild(arrayBarContainer);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/views/pages/sort/SortPage.js":
/*!******************************************!*\
  !*** ./src/views/pages/sort/SortPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sort_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort-page.css */ "./src/views/pages/sort/sort-page.css");


/**
 * The class creates a sort page with a header, visualizer, and article sections.
 */
class SortPage {
    /**
     * 
     * @param {Object} param0 An object with properties title, description, complexity, and pseudocode
     */
    constructor({title, description, complexity, pseudocode}) {
        this.title = title;
        this.description = description;
        this.complexity = complexity;
        this.pseudocode = pseudocode;

        this.page = document.createElement('main');
        this.page.classList.add('page', 'sort-page');
        this.pageContainer = document.createElement('div');
        this.pageContainer.classList.add('container', 'sort-page__container')
        this.page.appendChild(this.pageContainer);
    };

    /**
     * Creates the page and calls other methods to create the different sections of the page.
     * 
     * @returns {HTMLElement} main
     */
    create (){
        this.#createHeader();
        this.createVisualizer();
        this.#createArticle();
        return this.page;
    };

    /**
     * Creates the header section of the page with the title of the sort algorithm.
     */
    #createHeader(){
        const header = document.createElement('header');
        header.classList.add('sort-page__header');
        header.innerHTML = `<h2 class='sort-page__title'>${this.title}</h2>`;
        this.pageContainer.appendChild(header);
    };

    /**
     * An abstract method that needs to be overriden in subclasses.
     * 
     * @abstract
     */
    createVisualizer(){
        throw new Error('createVisualizer() method must be overriden in subclasses');
    };
    
    /**
     * Creates the article section of the page with a description, complexity, and pseudocode of the sort algorithm.
     */
    #createArticle(){
        const article = document.createElement('article');
        article.classList.add('sort-page__article');
        const container = document.createElement('div');
        container.classList.add('container');
        article.appendChild(container);

        this.#createDescripton(container);
        this.#createComplexity(container);
        this.#createPseudocode(container);

        this.page.appendChild(article);
    }

    /**
     * Creates the Description section in the article section.
     * 
     * @param {HTMLEelement} article the article element to apppend to.
     */
    #createDescripton(article){
        const section = this.#createPageSection('sort-page__description', 'Description')

       for (const idx in this.description) {
            const paragraph = document.createElement('p');
            paragraph.textContent = this.description[idx];
            section.appendChild(paragraph);
        };

        article.appendChild(section);
    };

    /**
     * Creates the Complexity section in the article section.
     * 
     * @param {HTMLEelement} article the article element to apppend to.
     */
    #createComplexity(article){
        const section = this.#createPageSection('sort-page__complexity', 'Complexity')

        const paragraph = document.createElement('p');
        paragraph.textContent = 'The Time and Space Comlexities are shown in the table below.';
        section.appendChild(paragraph);

        const table = document.createElement('table');
        table.classList.add('sort-page__complexity-table');
        table.innerHTML = `
            <tr><th rowspan="3">Time Complexity</th><th>Best</th><td>${this.complexity.bestTime}</td></tr>
            <tr><th>Average</th><td>${this.complexity.avgTime}</td></tr>
            <tr><th>Worst</th> <td>${this.complexity.worstTime}</td></tr>
            <tr><th colspan="2">Space Complexity</th><td>${this.complexity.spaceComplexity}</td></tr>
        `;

        section.appendChild(table);

        article.appendChild(section);
    };

    /**
     * Creates the Pseudocode section in the article section.
     * 
     * @param {HTMLEelement} article the article element to apppend to.
     */
    #createPseudocode(article){
        const section = this.#createPageSection('sort-page__pseudocode', 'Pseudocode')
        
        const paragraph = document.createElement('p');
        paragraph.textContent = 'In pseudocode the algorithm can be expressed as shown bellow.';
        section.appendChild(paragraph);

        const pre = document.createElement('pre');
        pre.innerHTML = `<code>${this.pseudocode}</code>`
        section.appendChild(pre);

        article.appendChild(section);
    };

    /**
     * Helper method that creates a section element with a given class and title.
     * 
     * @param {String} className A class name for the section
     * @param {String} title A title for the section
     * @returns {HTMLElement} section
     */
    #createPageSection(className, title){
        const section = document.createElement('section');
        section.classList.add(className);

        const heading = document.createElement('h3');
        heading.textContent = title;
        section.appendChild(heading);

        return section;
    };

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortPage);

/***/ }),

/***/ "./src/views/pages/sort/inplace/InPlaceSortPage.js":
/*!*********************************************************!*\
  !*** ./src/views/pages/sort/inplace/InPlaceSortPage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_components_inplace_visualizer_InPlaceVisualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared_components/inplace_visualizer/InPlaceVisualizer */ "./src/views/shared_components/inplace_visualizer/InPlaceVisualizer.js");
/* harmony import */ var _SortPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SortPage */ "./src/views/pages/sort/SortPage.js");



/**
 * InPlaceSortPage class is a subclass of SortPage class. It is used to create a page for displaying In-Place sorting algorithms
 * @extends SortPage
 */
class InPlaceSortPage extends _SortPage__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * 
     * @param {Object} algorithmData - An object containing data about the algorithm 
     */
    constructor(algorithmData){
        super(algorithmData);
        this.visualizer = new _shared_components_inplace_visualizer_InPlaceVisualizer__WEBPACK_IMPORTED_MODULE_0__["default"](algorithmData.title);
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InPlaceSortPage);

/***/ }),

/***/ "./src/views/shared_components/footer/Footer.js":
/*!******************************************************!*\
  !*** ./src/views/shared_components/footer/Footer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/github-mark.svg */ "./src/images/github-mark.svg");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.css */ "./src/views/shared_components/footer/footer.css");




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
                    <img class="icon" src=${_images_github_mark_svg__WEBPACK_IMPORTED_MODULE_0__} alt="GitHub Mark" />
                </a>
            </small>
        </div>`;
        return this.footer;
    };
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/views/shared_components/header/Header.js":
/*!******************************************************!*\
  !*** ./src/views/shared_components/header/Header.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_sun_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/sun-icon.svg */ "./src/images/sun-icon.svg");
/* harmony import */ var _images_moon_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/moon-icon.svg */ "./src/images/moon-icon.svg");
/* harmony import */ var _toogle_button_ToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toogle_button/ToggleButton */ "./src/views/shared_components/toogle_button/ToggleButton.js");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.css */ "./src/views/shared_components/header/header.css");







/**
 * Class representing the Header component
 */
class Header {
    
    /**
     * Initialize the header element, container element and the root element.
     */
    constructor(){
        // Reference to the root element
        this.rootElement = document.firstElementChild;
        
        // Create the Header Element with a container div child.
        this.header = document.createElement('header');
        const container = document.createElement('div');
        container.classList.add('container', 'header__container');
        this.header.appendChild(container);
    };

    
     /**
     * Creates the header element and returns it.
     * 
     * @returns {HTMLElement} Header Element
     */
     create(){
        // Create The Title
        this.#createHeaderTitle();
        
        // Create settings container containing the settings
        this.#createSettingsContainer();

        return this.header;
    };

    /**
     * Creates the title element and appends it to the container element
     */
    #createHeaderTitle() {
        const title = document.createElement('h1');
        title.classList.add('header__title');
        title.textContent = 'Sorting Visualizer';
        this.header.firstElementChild.appendChild(title);
    };

    /**
     * Creates the settings container and adds it to the header element
     * and creates the burger menu and theme button inside it
     */
    #createSettingsContainer() {
        const settings = document.createElement('div');
        settings.classList.add('header__settings');
        this.header.firstElementChild.appendChild(settings);

        // Create Burger Menu
        this.#createBurgerMenu(settings);

        // Create Toggle button for toggling between dark and light theme
        this.#createThemeButton(settings);
    };


    /**
    * Creates the theme toggle button and adds it to the settings container.
    *
    * @param {HTMLElement} settings - The element that the theme toggle button will be added to.
    */
    #createThemeButton(settings) {
        const firstIcon = { src: _images_sun_icon_svg__WEBPACK_IMPORTED_MODULE_0__, alt: 'Light Theme' };
        const secondIcon = { src: _images_moon_icon_svg__WEBPACK_IMPORTED_MODULE_1__, alt: 'Dark Theme' };
        const themeButton = new _toogle_button_ToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"](
            'header__btn',
            firstIcon,
            secondIcon,
            () => { this.#handleThemeButtonClick() }).create();

        settings.appendChild(themeButton);
    };

     /**
     * Handles the click event on the theme toggle button.
     * Toggles the dark-theme class on the root element to switch between themes.
     */
    #handleThemeButtonClick() {
        this.rootElement.classList.toggle('dark-theme');
    }

    /**
     * Creates the burger menu button and adds it to the settings container.
     *
     * @param {HTMLElement} settings - The element that the burger menu button will be added to.
     */
    #createBurgerMenu(settings){
        // Create Button
        const burgerBtn = document.createElement('button');
        burgerBtn.classList.add('header__btn', 'header__burger-menu');
        // Add on click listener to open the navbar
        burgerBtn.onclick = () => {this.#handleBurgerMenuClick();}

        // Add three divs to construct the bars
        for (let i=0; i<=2; i++){
            const bar = document.createElement('div');
            bar.classList.add('header__burger-bar');
            burgerBtn.appendChild(bar);
        };

        settings.appendChild(burgerBtn);
    };

    /**
     * Handles the click event on the burger menu button.
     * Toggles the active class on the navbar to open it.
     */
    #handleBurgerMenuClick() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.add('active');
    }
  
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/views/shared_components/inplace_visualizer/InPlaceVisualizer.js":
/*!*****************************************************************************!*\
  !*** ./src/views/shared_components/inplace_visualizer/InPlaceVisualizer.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_SortModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/SortModel */ "./src/models/SortModel.js");
/* harmony import */ var _toogle_button_ToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toogle_button/ToggleButton */ "./src/views/shared_components/toogle_button/ToggleButton.js");
/* harmony import */ var _images_play_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/play-icon.svg */ "./src/images/play-icon.svg");
/* harmony import */ var _images_pause_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/pause-icon.svg */ "./src/images/pause-icon.svg");
/* harmony import */ var _images_shuffle_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/shuffle-icon.svg */ "./src/images/shuffle-icon.svg");
/* harmony import */ var _inplace_visualizer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inplace-visualizer.css */ "./src/views/shared_components/inplace_visualizer/inplace-visualizer.css");








class InPlaceVisualizer{

    constructor(algorithm){
        this.algorithm = algorithm;
        this.sortModel = new _models_SortModel__WEBPACK_IMPORTED_MODULE_0__["default"]()
        this.running = false;
        this.speed = 1;
        
        this.visualizerContainer = document.createElement('section');
        this.visualizerContainer.classList.add('inplace-visualizer__container');
    }


    create(){ 
        const arrayBarContainer = this.#createArrayBarsContainer();
        this.#createSettings(arrayBarContainer);
          
        return this.visualizerContainer;
    };

    #createArrayBarsContainer() {
        const arrayBarContainer = document.createElement('div');
        arrayBarContainer.classList.add('array-bar__container');

        this.#createArrayBars(arrayBarContainer);

        this.visualizerContainer.appendChild(arrayBarContainer);

        return arrayBarContainer;
    };

    #createArrayBars(arrayBarContainer) {
        const data = this.sortModel.getData();
        data.forEach((element, index) => {
            const arrayBar = document.createElement('div');
            arrayBar.dataset.arrayBarIndex = index;
            arrayBar.style.height = `${100 * element / Math.max(...data)}%`;
            arrayBar.style.width = `${100 / data.length}%`;
            arrayBarContainer.appendChild(arrayBar);
            
        });
    };

    #createSettings(arrayBarContainer){
        const settingsContainer = document.createElement('div');
        settingsContainer.classList.add('inplace-visualizer__settings');

        // Shuffle Button
        let settingsWrapper = document.createElement('div');
        settingsWrapper.classList.add('array-bars__setting-wrapper');
        const shuffleButtonLabel = document.createElement('label');
        shuffleButtonLabel.htmlFor = 'inplace-visualizer__shuffle-btn';
        shuffleButtonLabel.textContent = 'Shuffle';
        const suffleButton = document.createElement('button');
        suffleButton.classList.add('inplace-visualizer__shuffle-btn');
        suffleButton.innerHTML = `<img class='icon' src=${_images_shuffle_icon_svg__WEBPACK_IMPORTED_MODULE_4__} alt='Shuffle Array' />`;
        suffleButton.onclick = () => {this.#shuffleArrayBars(arrayBarContainer)}
        settingsWrapper.append(suffleButton, shuffleButtonLabel);
        settingsContainer.appendChild(settingsWrapper);

        // Size Slider
        settingsWrapper = document.createElement('div');
        settingsWrapper.classList.add('array-bars__setting-wrapper');
        const sizeSliderLabel = document.createElement('label');
        sizeSliderLabel.htmlFor = 'array-bars__size-slider';
        sizeSliderLabel.textContent = 'Array Size: ';
        const sizeSliderValueDisplay = document.createElement('span');
        sizeSliderValueDisplay.textContent = `${this.sortModel.getData().length}`;
        sizeSliderLabel.appendChild(sizeSliderValueDisplay);
        const sizeSlider = document.createElement('input');
        sizeSlider.id = 'array-bars__size-slider';
        sizeSlider.type = 'range';
        sizeSlider.min = '50';
        sizeSlider.max = '1000';
        sizeSlider.value = this.sortModel.getData().length;
        sizeSlider.oninput = (e) => {this.#resizeArrayBars(e, arrayBarContainer, sizeSliderValueDisplay)};
        sizeSlider.onchange = (e) => {sizeSliderValueDisplay.innerHTML = e.target.value};
        settingsWrapper.append(sizeSlider, sizeSliderLabel);
        settingsContainer.appendChild(settingsWrapper);

        // Speed Slider
        settingsWrapper = document.createElement('div');
        settingsWrapper.classList.add('array-bars__setting-wrapper');
        const delaySliderLabel = document.createElement('label');
        delaySliderLabel.htmlFor = 'array-bars__delay-slider';
        delaySliderLabel.textContent = 'Speed: ';
        const delaySliderValueDisplay = document.createElement('span');
        delaySliderValueDisplay.textContent = `${this.speed}`;
        delaySliderLabel.appendChild(delaySliderValueDisplay);
        const delaySlider = document.createElement('input');
        delaySlider.id = 'array-bars__delay-slider';
        delaySlider.type = 'range';
        delaySlider.min = '1';
        delaySlider.max = '10';
        delaySlider.value = 1;
        delaySlider.oninput = (e) => {delaySliderValueDisplay.innerHTML = e.target.value; this.speed=e.target.value};
        delaySlider.onchange = (e) => {delaySliderValueDisplay.innerHTML = e.target.value};
        settingsWrapper.append(delaySlider , delaySliderLabel);
        settingsContainer.appendChild(settingsWrapper);

        // Start Stop Button
        settingsWrapper = document.createElement('div');
        settingsWrapper.classList.add('array-bars__setting-wrapper');
        const startStopButtonLabel = document.createElement('label');
        startStopButtonLabel.htmlFor =  'array-bars__start-stop-btn';
        startStopButtonLabel.textContent = 'Start';
        const firstIcon = {src: _images_play_icon_svg__WEBPACK_IMPORTED_MODULE_2__, alt:'Start Sort'};
        const secondIcon = {src: _images_pause_icon_svg__WEBPACK_IMPORTED_MODULE_3__, alt:'Stop Sort'};
        const startStopButton = new _toogle_button_ToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"](
            'array-bars__start-stop-btn',
            firstIcon,
            secondIcon,
            () => {this.#handleStartStopButton(startStopButtonLabel);}
        ).create();
        settingsWrapper.append(startStopButton, startStopButtonLabel);
        settingsContainer.appendChild(settingsWrapper);

        this.visualizerContainer.appendChild(settingsContainer);
    };

    async #handleStartStopButton(startStopButtonLabel) {
        
        if (this.running){
            this.#enableSettings();
            this.running = false;
            startStopButtonLabel.textContent = 'Start';
        }else{  
            this.#disableSettings();
            this.running = true;
            startStopButtonLabel.textContent = 'Stop';
            await this.#startSort();
            if (!this.sortModel.animation.length){
                document.querySelector('.array-bars__start-stop-btn').click();
                
            };
        }
        
    }

    async #startSort(){
        if (!this.sortModel.animation.length){
            this.sortModel.sort(this.algorithm);
        };

        while (this.sortModel.animation.length && this.running === true){
           
            const swapIdxs = this.sortModel.animation.shift();
            await this.#swapArrayBars(...swapIdxs);
            await this.sleep(10);

        };
    };

    #disableSettings(){
        const shuffleBtn = document.querySelector('.inplace-visualizer__shuffle-btn');
        shuffleBtn.disabled = true;
        shuffleBtn.parentElement.classList.add('disabled');
        const sizeSlider = document.querySelector('#array-bars__size-slider')
        sizeSlider.disabled = true;
        sizeSlider.parentElement.classList.add('disabled');
    };

    #enableSettings(){
        const shuffleBtn = document.querySelector('.inplace-visualizer__shuffle-btn');
        shuffleBtn.disabled = false;
        shuffleBtn.parentElement.classList.remove('disabled');
        const sizeSlider = document.querySelector('#array-bars__size-slider')
        sizeSlider.disabled = false;
        sizeSlider.parentElement.classList.remove('disabled');
    }

    async #swapArrayBars(i,j){
        let delay = (1000)/(10**this.speed);

        const bar1 = document.querySelector(`[data-array-bar-index="${i}"]`);
        const bar2 = document.querySelector(`[data-array-bar-index="${j}"]`);

        let initBackGround = bar1.style.background;
        
        bar1.style.background = 'red';
        bar2.style.background = 'greenyellow'
        await this.sleep(delay/10);

        let temp = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = temp;

        bar1.style.background = 'greenyellow';
        bar2.style.background = 'red';
        await this.sleep(delay/10);
        bar1.style.background = initBackGround;
        bar2.style.background = initBackGround;
        
    };

     
    #resizeArrayBars(e, arrayBarContainer, sizeSliderValueDisplay){
        this.sortModel.set_size(e.target.value);
        sizeSliderValueDisplay.innerHTML = e.target.value;
        arrayBarContainer.innerHTML = '';
        this.#createArrayBars(arrayBarContainer)
    ;}

    #shuffleArrayBars(arrayBarContainer){
        this.sortModel.shuffle();
        const data = this.sortModel.getData();
        const arrayBars = arrayBarContainer.children
        
        for (let i =0; i<arrayBars.length; i++){
            const arrayBar = arrayBars[i];
            arrayBar.style.height = `${100 *  data[arrayBar.dataset.arrayBarIndex]/ Math.max(...data)}%`
        };
    };

    sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InPlaceVisualizer);

/***/ }),

/***/ "./src/views/shared_components/navbar/Navbar.js":
/*!******************************************************!*\
  !*** ./src/views/shared_components/navbar/Navbar.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_navigaton_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/navigaton-data */ "./src/data/navigaton-data.js");
/* harmony import */ var _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/close-icon.svg */ "./src/images/close-icon.svg");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.css */ "./src/views/shared_components/navbar/navbar.css");




/**
 * Navbar class is used to create and manage the navigation bar.
 */
class Navbar {
    /**
     * Initializes an empty navbar element with a container for a list of links.
    */  
    constructor(){
        this.navbar = document.createElement('nav');
        this.navbar.classList.add('navbar');
        const listContainer = document.createElement('ul');
        listContainer.classList.add('navbar__list');
        this.navbar.appendChild(listContainer);
    }

    /**
     * Creates the navbar element and returns it.
     * This method calls other internal methods to construct the navbar with all its contents.
     * @returns {HTMLElement} Navbar Element
     */
    create(){
        this.#creatCloseContainer();
        this.#createHomeLink();
        this.#createSeparator();
        this.#createSectionLinks('In-Place Algorithms', _data_navigaton_data__WEBPACK_IMPORTED_MODULE_0__.inPlaceNavLinks);
        this.#createSeparator();
        return this.navbar;
    };

    /**
     * Creates a list item element, a title element, and a link element for the home page. 
     * It appends the link to the title element, the title element to the list item element 
     * and the list item element to the navbar.
     */
    #createHomeLink() {
        const listItem = document.createElement('li');
        const titleElement = document.createElement('h3');
        titleElement.classList.add('navbar__subtitle');
        const homeLink = document.createElement('a');
        homeLink.textContent = 'Home';
        // Link to Home Page
        homeLink.href = '#/';
        homeLink.onclick = (e) => {this.#handleNavigationClick(e)};
        homeLink.classList.add('navbar__link', 'navbar__home-link', 'active');
        titleElement.appendChild(homeLink);
        listItem.appendChild(titleElement);
        
        this.navbar.firstElementChild.append(listItem);
    };

    /**
     * Creates a list item element and a span element to act as a separator. 
     * It appends the span element to the list item element, and the list item to the navbar.
     */
    #createSeparator(){
        const listItem = document.createElement('li');
         // span element to draw a vertical separator line
        const separator = document.createElement('span');
        separator.classList.add('navbar__separator');
        listItem.appendChild(separator);
        this.navbar.firstElementChild.append(listItem);
    };

    /**
     * Creates a section of links within the Navbar.
     * It takes in a title and an array of links as parameters.
     * It creates a main list item, a title element and a sublist element.
     * It then iterates through the links array, creating a list item and a link element for each.
     * The link element's text content is set to the name of the link, the href is set to the url of the link.
     * The onclick event is set to call the handleNavigationClick method.
     * The list item and link element are then appended to the sublist.
     * The title element, sublist element and the main list item are then appended to the Navbar.
     * 
     * @param {string} title - The title of the section of links
     * @param {Array} links - An array of link objects containing a name and url property
     */
    #createSectionLinks(title, links){
        const mainListItem = document.createElement('li');
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        titleElement.classList.add('navbar__subtitle');
        
        const linkList = document.createElement('ul');
        linkList.classList.add('navbar__sublist');

        links.forEach(link => {
            const listItem = document.createElement('li');
            listItem.classList.add('navbar__list-item');
            
            const linkElement = document.createElement('a');
            linkElement.textContent = link.name;
            linkElement.href = link.url;
            linkElement.classList.add('navbar__link');
            linkElement.onclick = (e) => {this.#handleNavigationClick(e);};
            listItem.appendChild(linkElement);

            linkList.appendChild(listItem);
        });

        mainListItem.append(titleElement, linkList)
        this.navbar.firstElementChild.append(mainListItem);
    };

    /**
     * Handles the click event on the navigation links.
     * It removes the active class from the current active link and adds it to the clicked link.
     * It also closes the navbar if it is open.
     * 
     * @param {Event} e - the click event object
    */
    #handleNavigationClick(e) {
        this.navbar.classList.remove('active');
        const activeLink = document.querySelector('.navbar__link.active');
        if (e.target !== activeLink){
            activeLink.classList.remove('active');
            e.target.classList.add('active');
        };
    }

    /**
     * Creates the close container for the navbar, including the close button and icon.
     */
    #creatCloseContainer(){
        const container = document.createElement('div');
        container.classList.add('navbar__close-container');
        
        const button = document.createElement('button');
        button.classList.add('navbar__close-btn');
        button.onclick = () => {this.#handleCloseButtonClick()};

        const closeImage = new Image();
        closeImage.classList.add('icon' ,'navbar__close-icon');
        closeImage.src = _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
        closeImage.alt = 'Close Navbar';
        
        button.appendChild(closeImage);
        container.appendChild(button);

        this.navbar.appendChild(container);
    };

    /**
     * Handles the click event on the close button.
     * It also closes the navbar if it is open by removing the active class.
    */
    #handleCloseButtonClick() {
        this.navbar.classList.remove('active');
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/views/shared_components/toogle_button/ToggleButton.js":
/*!*******************************************************************!*\
  !*** ./src/views/shared_components/toogle_button/ToggleButton.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toggle_button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle_button.css */ "./src/views/shared_components/toogle_button/toggle_button.css");



/**
The ToggleButton class creates a toggle button element with two icons that can be toggled between.
*/
class ToggleButton {

    /**
     * 
     * @param {string} className -  CSS classname to be added to the toggle button element.
     * @param {Object} firstIcon - The first icon to be displayed on the button. Should be an object with src and alt fields.
     * @param {Object} secondIcon - The second icon to be displayed on the button. Should be an object with src and alt fields.
     * @param {Function} onClick - The callback function to be invoked when the button is clicked.
     */
    constructor(className, firstIcon, secondIcon, onClick){
        this.firstIcon = firstIcon;
        this.secondIcon = secondIcon;
        this.button = document.createElement('button');
        this.button.classList.add('toggle-btn', className);
        this.onClickEvent = onClick;
    };

    /**
     * Creates the button element with the icons and onclick event
     * 
     * @returns {HTMLElement} The created button element
     */
    create(){
        // Create the icons
        this.#createIcons();

        // Add the click event on the button
        this.button.onclick = () => {this.#handleClickEvent()};

        return this.button
    };

    /**
    * Creates and appends the primary and secondary icons to the button element.
    * The primary icon is displayed by default, while the secondary icon is hidden.
    */
    #createIcons(){
        const primaryIcon = new Image();
        primaryIcon.classList.add('icon');
        primaryIcon.src = this.firstIcon.src;
        primaryIcon.alt = this.firstIcon.alt;
        this.button.appendChild(primaryIcon);

        const secondaryIcon = new Image();
        secondaryIcon.classList.add('icon', 'hidden');
        secondaryIcon.src = this.secondIcon.src;
        secondaryIcon.alt = this.secondIcon.alt;
        this.button.appendChild(secondaryIcon);
    };


    /**
     * Handles the click event of the button.
     * Toggles the visibility of the two icons and calls the onClickEvent function
     */
    #handleClickEvent() {
        this.button.firstElementChild.classList.toggle('hidden');
        this.button.lastElementChild.classList.toggle('hidden');
        this.onClickEvent();
    };
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleButton);

/***/ }),

/***/ "./src/images/close-icon.svg":
/*!***********************************!*\
  !*** ./src/images/close-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d3724015a28ada696818.svg";

/***/ }),

/***/ "./src/images/github-mark.svg":
/*!************************************!*\
  !*** ./src/images/github-mark.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6fa18895f6e6c7772cab.svg";

/***/ }),

/***/ "./src/images/moon-icon.svg":
/*!**********************************!*\
  !*** ./src/images/moon-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/31fa37abfab70b95c113.svg";

/***/ }),

/***/ "./src/images/pause-icon.svg":
/*!***********************************!*\
  !*** ./src/images/pause-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ab28330159a1fd94f8fd.svg";

/***/ }),

/***/ "./src/images/play-icon.svg":
/*!**********************************!*\
  !*** ./src/images/play-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3e088359d68d3edc7f4b.svg";

/***/ }),

/***/ "./src/images/shuffle-icon.svg":
/*!*************************************!*\
  !*** ./src/images/shuffle-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2ceceaaa01f075a9d0f4.svg";

/***/ }),

/***/ "./src/images/sun-icon.svg":
/*!*********************************!*\
  !*** ./src/images/sun-icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/29b88d78a92acfecd8e2.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");
 
 

/**
 * The entry point of the application
 * creates an instance of the App class and runs it
 */
const app = new _App__WEBPACK_IMPORTED_MODULE_1__["default"]()
app.run();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2RDtBQUNBO0FBQ0E7QUFDL0I7OztBQUc5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhFQUFNO0FBQ2hDLDBCQUEwQiw4RUFBTTtBQUNoQztBQUNBO0FBQ0EsMEJBQTBCLDhFQUFNO0FBQ2hDLDBCQUEwQiwrQ0FBTTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7QUFJQSxpRUFBZSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFa0c7QUFDakU7QUFDc0I7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrRUFBUTtBQUN6Qyw0Q0FBNEMsaUZBQWUsQ0FBQyx3RUFBYztBQUMxRSwrQ0FBK0MsaUZBQWUsQ0FBQywyRUFBaUI7QUFDaEYsK0NBQStDLGlGQUFlLENBQUMsMkVBQWlCO0FBQ2hGLDJDQUEyQyxpRkFBZSxDQUFDLHVFQUFhO0FBQ3hFO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7OztBQzlFTjtBQUNmO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQyxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTs7QUFFQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoRGU7QUFDZjs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25La0Q7QUFDTTtBQUNS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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRTNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ0o7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFHO0FBQ25CLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz80ZTQyIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy92aWV3cy9wYWdlcy9ob21lL2hvbWUtcGFnZS5jc3M/NDI2MyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3MvcGFnZXMvc29ydC9zb3J0LXBhZ2UuY3NzPzNmNzYiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzP2E1MzMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzPzI1ODkiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL2lucGxhY2VfdmlzdWFsaXplci9pbnBsYWNlLXZpc3VhbGl6ZXIuY3NzPzIyNjAiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY3NzPzlmZmQiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL3Rvb2dsZV9idXR0b24vdG9nZ2xlX2J1dHRvbi5jc3M/MjRkOCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL2FsZ29yaXRobXMvYnViYmxlU29ydC5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvYWxnb3JpdGhtcy9pbnNlcnRpb25Tb3J0LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy9hbGdvcml0aG1zL3F1aWNrU29ydC5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvYWxnb3JpdGhtcy9zZWxlY3Rpb25Tb3J0LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy9kYXRhL25hdmlnYXRvbi1kYXRhLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy9kYXRhL3NvcnRpbmctYWxnb3JpdGhtLWRhdGEuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL21vZGVscy9Tb3J0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3BhZ2VzL2hvbWUvSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3BhZ2VzL3NvcnQvU29ydFBhZ2UuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3BhZ2VzL3NvcnQvaW5wbGFjZS9JblBsYWNlU29ydFBhZ2UuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL2lucGxhY2VfdmlzdWFsaXplci9JblBsYWNlVmlzdWFsaXplci5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvbmF2YmFyL05hdmJhci5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvdG9vZ2xlX2J1dHRvbi9Ub2dnbGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgRm9vdGVyIGZyb20gXCIuL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi92aWV3cy9zaGFyZWRfY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xuXG5cbi8qKlxuICogQXBwIGNsYXNzIGlzIHRoZSBlbnRyeSBwb2ludCBvZiB0aGUgYXBwbGljYXRpb25cbiAqIGl0IGNyZWF0ZXMgdGhlIGhlYWRlciwgbmF2YmFyLCBtYWluIGFuZCBmb290ZXIgY29tcG9uZW50c1xuICogYW5kIGFwcGVuZHMgdGhlbSB0byB0aGUgYm9keSBlbGVtZW50LlxuICogaXQgYWxzbyBjcmVhdGVzIGFuZCBpbml0aWFsaXplcyB0aGUgcm91dGVyXG4gKi9cbmNsYXNzIEFwcHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgQXBwIGNsYXNzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xuICAgICAgICB0aGlzLm5hdmJhciA9IG5ldyBOYXZiYXIoKTtcbiAgICAgICAgdGhpcy5tYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgICAgICB0aGlzLm1haW4uY2xhc3NMaXN0LmFkZCgncGFnZScpO1xuICAgICAgICB0aGlzLmZvb3RlciA9IG5ldyBGb290ZXIoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbiAgICAgICAgdGhpcy4jYWRkR2xvYmFsU3RhdGVzKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhlIGNyZWF0ZWQgY29tcG9uZW50cyB0byB0aGUgYm9keVxuICAgICAqIGFuZCBjYWxscyB0aGUgaW5pdCBtZXRob2Qgb2YgdGhlIHJvdXRlclxuICAgICAqL1xuICAgIHJ1bigpe1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdGhpcy5uYXZiYXIuY3JlYXRlKCksXG4gICAgICAgICAgICB0aGlzLm1haW4sXG4gICAgICAgICAgICB0aGlzLmZvb3Rlci5jcmVhdGUoKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJvdXRlci5pbml0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgdGhlIHRoZW1lIHN0YXRlIG9uIGJlZm9yZXVubG9hZCBldmVudFxuICAgICAqIGFuZCBhcHBsaWVzIHRoZSB0aGVtZSBzdGF0ZSBvbiBwYWdlIGxvYWRcbiAgICAgKi9cbiAgICAjYWRkR2xvYmFsU3RhdGVzKCl7XG4gICAgICAgIC8vIFNhdmUgdGhlIHRoZW1lIHN0YXRlIG9uIGJlZm9yZXVubG9hZCBldmVudFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmstdGhlbWVcIikpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcHBseSB0aGUgdGhlbWUgc3RhdGUgb24gcGFnZSBsb2FkXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gICAgICAgICAgICBpZiAodGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmstdGhlbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IHsgYnViYmxlU29ydEluZm8sIGluc2VydGlvblNvcnRJbmZvLCBxdWlja1NvcnRJbmZvLCBzZWxlY3Rpb25Tb3J0SW5mbyB9IGZyb20gXCIuL2RhdGEvc29ydGluZy1hbGdvcml0aG0tZGF0YVwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL3ZpZXdzL3BhZ2VzL2hvbWUvSG9tZVBhZ2VcIjtcbmltcG9ydCBJblBsYWNlU29ydFBhZ2UgZnJvbSBcIi4vdmlld3MvcGFnZXMvc29ydC9pbnBsYWNlL0luUGxhY2VTb3J0UGFnZVwiO1xuXG4vKipcbiAqIEhhbmRsZXMgdGhlIGNsaWVudC1zaWRlIHJvdXRpbmcgZm9yIHRoZSBhcHBsaWNhdGlvblxuICogYnkgaGFuZGxpbmcgdGhlIGhhc2hjaGFuZ2UgZXZlbnQgYW5kIGNyZWF0aW5nIG5ldyBwYWdlc1xuICogYmFzZWQgb24gdGhlIGN1cnJlbnQgcGF0aFxuICovXG5jbGFzcyBSb3V0ZXJ7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFJvdXRlciBjbGFzc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IHBhdGggdG8gcHJldmVudCBjcmVhdGluZyBuZXcgcGFnZXMgZm9yIHRoZSBzYW1lIHBhdGhcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0aCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBSb3V0ZXIgYnkgYWRkaW5nIHRoZSBoYXNoY2hhbmdlIGV2ZW50IGxpc3RlbmVyXG4gICAgICogYW5kIGhhbmRsaW5nIHRoZSBpbml0aWFsIHJvdXRlIGNoYW5nZVxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgY2hhbmdlcyB0byB0aGUgaGFzaCBmcmFnbWVudCBvZiB0aGUgVVJMXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSb3V0ZUNoYW5nZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhbmRsZVJvdXRlQ2hhbmdlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHJvdXRlIGNoYW5nZSBieSBleHRyYWN0aW5nIHRoZSBwYXRoIGZyb20gdGhlXG4gICAgICogd2luZG93LmxvY2F0aW9uLmhhc2gsIGNyZWF0aW5nIGEgbmV3IHBhZ2UgYmFzZWQgb24gdGhlIHBhdGgsXG4gICAgICogYW5kIHJlcGxhY2luZyB0aGUgY3VycmVudCBtYWluIGVsZW1lbnQgd2l0aCB0aGUgbmV3IHBhZ2VcbiAgICAgKi9cbiAgICBoYW5kbGVSb3V0ZUNoYW5nZSgpe1xuICAgICAgICAvLyBJZiB0aGUgaGFzaCBmcmFnbWVudCBpcyBlbXB0eSBvciBqdXN0IFwiI1wiLCBkZWZhdWx0IHRvIHRoZSBob21lIHBhZ2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnJyB8fCB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyMnKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcGF0aCBmcm9tIHRoZSBoYXNoIGZyYWdtZW50XG4gICAgICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcblxuICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBwYXRoIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXcgcGF0aFxuICAgICAgICBpZiAocGF0aCAhPT0gdGhpcy5jdXJyZW50UGF0aCl7XG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgbmV3IHBhdGggYXMgdGhlIGN1cnJlbnQgcGF0aFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aCA9IHBhdGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEdldCB0aGUgbWFpbiBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIG1haW4gZWxlbWVudCB3aXRoIHRoZSBuZXcgcGFnZVxuICAgICAgICAgICAgbWFpbi5yZXBsYWNlV2l0aCh0aGlzLmNyZWF0ZU5ld1BhZ2UocGF0aCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB9OyAgIFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgcGFnZSBiYXNlZCBvbiB0aGUgcGF0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gVGhlIHBhdGggdG8gY3JlYXRlIGEgbmV3IHBhZ2UgZm9yXG4gICAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFRoZSBuZXcgcGFnZVxuICAgICAqL1xuICAgIGNyZWF0ZU5ld1BhZ2UocGF0aCkge1xuICAgICAgICBzd2l0Y2gocGF0aCkge1xuICAgICAgICAgICAgY2FzZSAnLyc6IHJldHVybiBuZXcgSG9tZVBhZ2UoKS5jcmVhdGUoKTtcbiAgICAgICAgICAgIGNhc2UgJy9idWJibGUtc29ydCc6IHJldHVybiBuZXcgSW5QbGFjZVNvcnRQYWdlKGJ1YmJsZVNvcnRJbmZvKS5jcmVhdGUoKTtcbiAgICAgICAgICAgIGNhc2UgJy9zZWxlY3Rpb24tc29ydCc6IHJldHVybiBuZXcgSW5QbGFjZVNvcnRQYWdlKHNlbGVjdGlvblNvcnRJbmZvKS5jcmVhdGUoKTtcbiAgICAgICAgICAgIGNhc2UgJy9pbnNlcnRpb24tc29ydCc6IHJldHVybiBuZXcgSW5QbGFjZVNvcnRQYWdlKGluc2VydGlvblNvcnRJbmZvKS5jcmVhdGUoKTtcbiAgICAgICAgICAgIGNhc2UgJy9xdWljay1zb3J0JzogcmV0dXJuIG5ldyBJblBsYWNlU29ydFBhZ2UocXVpY2tTb3J0SW5mbykuY3JlYXRlKCk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1YmJsZVNvcnQoZGF0YSl7XG4gICAgLy8gVmFyaWFibGUgdG8gc3RvcmUgdGhlIGFuaW1hdGlvbnNcbiAgICBsZXQgYW5pbWF0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8IGRhdGEubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgaWYgKGRhdGFbal0gPiBkYXRhW2orMV0pe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaChbaixqKzFdKTtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGRhdGFbal07XG4gICAgICAgICAgICAgICAgZGF0YVtqXSA9IGRhdGFbaisxXTtcbiAgICAgICAgICAgICAgICBkYXRhW2orMV0gPSB0ZW1wO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBhbmltYXRpb25zO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnNlcnRpb25Tb3J0KGRhdGEpe1xuICAgIC8vIFZhcmlhYmxlIHRvIHN0b3JlIHRoZSBhbmltYXRpb25zXG4gICAgbGV0IGFuaW1hdGlvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpPGRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgaiA9IGk7XG4gICAgICAgIHdoaWxlIChqPjApe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGF0YVtqLTFdID49IGRhdGFbal0pe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaChbaixqLTFdKTtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGRhdGFbal07XG4gICAgICAgICAgICAgICAgZGF0YVtqXSA9IGRhdGFbai0xXTtcbiAgICAgICAgICAgICAgICBkYXRhW2otMV0gPSB0ZW1wO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBqLS07XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhbmltYXRpb25zO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWlja1NvcnQoZGF0YSl7XG4gICAgbGV0IGFuaW1hdGlvbiA9IFtdO1xuXG4gICAgX19xdWlja1NvcnQoZGF0YSwgMCwgZGF0YS5sZW5ndGggLSAxLCBhbmltYXRpb24pXG5cbiAgICBjb25zb2xlLmxvZyhhbmltYXRpb24pXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gYW5pbWF0aW9uXG59XG5cbmNvbnN0IF9fcXVpY2tTb3J0ID0gKGRhdGEsIGxlZnQsIHJpZ2h0LCBhbmltYXRpb24pID0+IHtcbiAgICBpZiAobGVmdCA8IHJpZ2h0KXtcbiAgICAgICAgbGV0IHAgPSBfX2hvYXJlX3BhcnRpdGlvbihkYXRhLCBsZWZ0LCByaWdodCwgYW5pbWF0aW9uKVxuICAgICAgICBfX3F1aWNrU29ydChkYXRhLCBsZWZ0LCBwLCBhbmltYXRpb24pO1xuICAgICAgICBfX3F1aWNrU29ydChkYXRhLCBwKzEsIHJpZ2h0LCBhbmltYXRpb24pO1xuICAgIH07XG59O1xuXG5cblxuY29uc3QgX19ob2FyZV9wYXJ0aXRpb24gPSAoZGF0YSwgbGVmdCwgcmlnaHQsIGFuaW1hdGlvbikgPT4ge1xuICAgIGxldCBwX2lkeCA9IE1hdGguZmxvb3IoKHJpZ2h0K2xlZnQpLzIpO1xuICAgIGxldCBwaXZvdCA9IGRhdGFbcF9pZHhdO1xuXG4gICAgbGV0IGxfaWR4ID0gbGVmdCAtIDE7XG4gICAgbGV0IHJfaWR4ID0gcmlnaHQgKyAxO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgXG4gICAgICAgIGxfaWR4Kys7XG4gICAgICAgIHdoaWxlIChkYXRhW2xfaWR4XSA8IHBpdm90KXtcbiAgICAgICAgICAgIGxfaWR4Kys7XG4gICAgICAgIH07XG5cbiAgICAgICAgcl9pZHgtLTtcbiAgICAgICAgd2hpbGUoZGF0YVtyX2lkeF0gPiBwaXZvdCl7XG4gICAgICAgICAgICByX2lkeC0tO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChsX2lkeCA+PSByX2lkeCl7XG4gICAgICAgICAgICByZXR1cm4gcl9pZHhcbiAgICAgICAgfTtcblxuICAgICAgICBhbmltYXRpb24ucHVzaChbbF9pZHgsIHJfaWR4XSk7XG4gICAgICAgIGxldCB0ZW1wID0gZGF0YVtsX2lkeF07XG4gICAgICAgIGRhdGFbbF9pZHhdID0gZGF0YVtyX2lkeF07XG4gICAgICAgIGRhdGFbcl9pZHhdID0gdGVtcDtcbiAgICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbGVjdGlvblNvcnQoZGF0YSl7XG4gICAgbGV0IGFuaW1hdGlvbiA9IFtdO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPCBkYXRhLmxlbmd0aC0xOyBpKyspe1xuICAgICAgICBcbiAgICAgICAgbGV0IG1pbkluZGV4ID0gaTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGo9aSsxOyBqPCBkYXRhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGlmIChkYXRhW2pdIDwgZGF0YVttaW5JbmRleF0pe1xuICAgICAgICAgICAgICAgIG1pbkluZGV4ID0gajtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1pbkluZGV4ICE9IGkpe1xuICAgICAgICAgICAgYW5pbWF0aW9uLnB1c2goW2ksIG1pbkluZGV4XSk7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IGRhdGFbaV07XG4gICAgICAgICAgICBkYXRhW2ldID0gZGF0YVttaW5JbmRleF07XG4gICAgICAgICAgICBkYXRhW21pbkluZGV4XSA9IHRlbXA7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBhbmltYXRpb25cbn0iLCJcbi8qKlxuICogQW4gYXJyYXkgb2Ygb2JqZWN0cywgY29udGFpbmluZyBkYXRhIGZvciBuYXZpZ2F0aW9uIGxpbmtzIG9mIGluLXBsYWNlIHNvcnRpbmcgYWxnb3JpdGhtLlxuICovXG5leHBvcnQgY29uc3QgaW5QbGFjZU5hdkxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0J1YmJsZSBTb3J0JyxcbiAgICAgICAgdXJsOiAnIy9idWJibGUtc29ydCdcbiAgICB9LFxuXG4gICAge1xuICAgICAgICBuYW1lOiAnU2VsZWN0aW9uIFNvcnQnLFxuICAgICAgICB1cmw6ICcjL3NlbGVjdGlvbi1zb3J0J1xuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIG5hbWU6ICdJbnNlcnRpb24gU29ydCcsXG4gICAgICAgIHVybDogJyMvaW5zZXJ0aW9uLXNvcnQnXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgbmFtZTogJ1F1aWNrIFNvcnQnLFxuICAgICAgICB1cmw6ICcjL3F1aWNrLXNvcnQnXG4gICAgfSxcbl07IiwiLyoqXG4gKiBPYmplY3RzIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlc3BlY3RpdmUgc29ydGluZyBhbGdvcml0aG1zLiBFYWNoIG9iamVjdCBjb250YWlucyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiBcbiAqIHRpdGxlOiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHRpdGxlL25hbWUgb2YgdGhlIHNvcnRpbmcgYWxnb3JpdGhtLlxuICogZGVzY3JpcHRpb246IGFuIGFycmF5IG9mIHN0cmluZ3MgcHJvdmlkaW5nIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIHNvcnRpbmcgYWxnb3JpdGhtLlxuICogY29tcGxleGl0eTogYW4gb2JqZWN0IHByb3ZpZGluZyB0aGUgdGltZSBhbmQgc3BhY2UgY29tcGxleGl0aWVzIG9mIHRoZSBzb3J0aW5nIGFsZ29yaXRobS5cbiAqIHBzZXVkb2NvZGU6IGEgc3RyaW5nIGNvbnRhaW5pbmcgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgc29ydGluZyBhbGdvcml0aG0gaW4gcHNldWRvY29kZSBmb3JtYXQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGJ1YmJsZVNvcnRJbmZvID0ge1xuICAgIHRpdGxlOiAnQnViYmxlIFNvcnQnLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgIGBCdWJibGUgc29ydCBpcyBhIGJhc2ljIHNvcnRpbmcgbWV0aG9kIHRoYXQgcmVwZWF0ZWRseSBnb2VzIHRocm91Z2ggdGhlIGxpc3QsIGNvbXBhcmluZyBhZGphY2VudCBpdGVtcyBhbmQgc3dpdGNoaW5nIHRoZW0gaWYgXG4gICAgICAgIHRoZXkgYXJlIG5vdCBpbiB0aGUgY29ycmVjdCBvcmRlci4gVGhpcyBwcm9jZXNzIGlzIHJlcGVhdGVkIHVudGlsIG5vIG1vcmUgc3dhcHMgYXJlIHJlcXVpcmVkLCBpbmRpY2F0aW5nIHRoZSBsaXN0IGlzIHNvcnRlZC4gXG4gICAgICAgIFRoZSBuYW1lIFwiYnViYmxlIHNvcnRcIiBjb21lcyBmcm9tIHRoZSB3YXkgc21hbGxlciBvciBsYXJnZXIgZWxlbWVudHMgXCJyaXNlXCIgdG8gdGhlIHRvcCBvZiB0aGUgbGlzdC5gLFxuICAgICAgICBgQnViYmxlIHNvcnQgaGFzIGEgdGltZSBjb21wbGV4aXR5IG9mIE8obl4yKSwgd2hpY2ggbWFrZXMgaXQgbGVzcyBlZmZpY2llbnQgZm9yIGxhcmdlciBsaXN0cy4gSG93ZXZlciwgaXQgaXMgZWFzeSB0byB1bmRlcnN0YW5kIFxuICAgICAgICBhbmQgaW1wbGVtZW50LCBtYWtpbmcgaXQgYSBwb3B1bGFyIGNob2ljZSBmb3IgYmVnaW5uZXJzIGxlYXJuaW5nIGFib3V0IHNvcnRpbmcgYWxnb3JpdGhtcy4gRGVzcGl0ZSBpdHMgaW5lZmZpY2llbmN5LCBcbiAgICAgICAgYnViYmxlIHNvcnQgY2FuIGJlIHVzZWZ1bCBpbiBjZXJ0YWluIGNhc2VzIHdoZXJlIHRoZSBsaXN0IGlzIHNtYWxsIG9yIHRoZSBkYXRhIGlzIGFscmVhZHkgcGFydGlhbGx5IHNvcnRlZC5gLFxuICAgICAgICBgQnViYmxlIHNvcnQgaXMgbm90IHRoZSBvbmx5IHNvcnRpbmcgYWxnb3JpdGhtIHRoYXQgdXNlcyB0aGUgXCJjb21wYXJlIGFuZCBzd2FwXCIgYXBwcm9hY2guIFRoZXJlIGFyZSBvdGhlciBhbGdvcml0aG1zIGxpa2UgSW5zZXJ0aW9uIFxuICAgICAgICBzb3J0IGFuZCBTZWxlY3Rpb24gc29ydCB3aGljaCBhbHNvIHVzZSB0aGlzIGFwcHJvYWNoIGJ1dCBoYXZlIGRpZmZlcmVudCB3YXlzIG9mIHNlbGVjdGluZyB0aGUgZWxlbWVudCB0byBjb21wYXJlIGFuZCBzd2FwLmBcbiAgICBdLFxuXG4gICAgY29tcGxleGl0eToge1xuICAgICAgICBiZXN0VGltZTogYM6pKG4pYCxcbiAgICAgICAgYXZnVGltZTogYM6YKG48c3VwPjI8L3N1cD4pYCxcbiAgICAgICAgd29yc3RUaW1lOiBgTyhuPHN1cD4yPC9zdXA+KWAsXG4gICAgICAgIHNwYWNlQ29tcGxleGl0eTogJ08oMSknLFxuICAgIH0sXG5cbiAgICBwc2V1ZG9jb2RlOiBgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+cHJvY2VkdXJlPC9zcGFuPiBidWJibGVTb3J0KCBBIDogbGlzdCBvZiBzb3J0YWJsZSBpdGVtcyApXG4gICAgbiA9ICA8c3BhbiBjbGFzcz1cImZ1bmN0aW9uXCI+bGVuZ3RoKDwvc3Bhbj5BPHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPik8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+cmVwZWF0PC9zcGFuPiBcbiAgICAgICAgc3dhcHBlZCA9IDxzcGFuIGNsYXNzPVwidmFsdWVcIj5mYWxzZTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+Zm9yPC9zcGFuPiBpID0gPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+IDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnRvPC9zcGFuPiBuLTxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPiBpbmNsdXNpdmUgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZG88L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnRcIj4vKiBpZiB0aGlzIHBhaXIgaXMgb3V0IG9mIG9yZGVyICovPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+aWY8L3NwYW4+IEFbaS08c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj5dID4gQVtpXSA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj50aGVuPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbWVudFwiPi8qIHN3YXAgdGhlbSBhbmQgcmVtZW1iZXIgc29tZXRoaW5nIGNoYW5nZWQgKi88L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPnN3YXAoPC9zcGFuPiBBW2ktPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+XSwgQVtpXSA8c3BhbiBjbGFzcz1cImZ1bmN0aW9uXCI+KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICBzd2FwcGVkID0gPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPnRydWU8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgaWY8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCBmb3I8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+dW50aWwgbm90PC9zcGFuPiBzd2FwcGVkXG48c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgcHJvY2VkdXJlPC9zcGFuPmAsXG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0aW9uU29ydEluZm8gPSB7XG4gICAgdGl0bGU6ICdTZWxlY3Rpb24gU29ydCcsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgYFNlbGVjdGlvbiBzb3J0IGlzIGEgc2ltcGxlIHNvcnRpbmcgYWxnb3JpdGhtIHRoYXQgcmVwZWF0ZWRseSBzZWxlY3RzIHRoZSBzbWFsbGVzdCBlbGVtZW50IGZyb20gdGhlIHVuc29ydGVkIHBvcnRpb24gb2YgdGhlIGxpc3QgYW5kIHBsYWNlcyBcbiAgICAgICAgaXQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgc29ydGVkIHBvcnRpb24gb2YgdGhlIGxpc3QuIFRoaXMgcHJvY2VzcyBpcyByZXBlYXRlZCB1bnRpbCBhbGwgZWxlbWVudHMgaGF2ZSBiZWVuIG1vdmVkIHRvIHRoZSBzb3J0ZWQgcG9ydGlvbiBvZiBcbiAgICAgICAgdGhlIGxpc3QuIFNlbGVjdGlvbiBzb3J0IGlzIGEgY29tcGFyaXNvbi1iYXNlZCBzb3J0aW5nIGFsZ29yaXRobS5gLFxuICAgICAgICBgU2VsZWN0aW9uIHNvcnQgaGFzIGEgdGltZSBjb21wbGV4aXR5IG9mIE8obl4yKSB3aGljaCBtYWtlcyBpdCBsZXNzIGVmZmljaWVudCBmb3IgbGFyZ2VyIGxpc3RzLiBJdCBwZXJmb3JtcyB3ZWxsIG9uIHNtYWxsIGxpc3RzIG9yIGRhdGEgc2V0cyBcbiAgICAgICAgYW5kIGlzIG9mdGVuIHVzZWQgYXMgYSBzaW1wbGUgc29ydGluZyBhbGdvcml0aG0gZm9yIGVkdWNhdGlvbmFsIHB1cnBvc2VzLmAsXG4gICAgICAgIGBIb3dldmVyLCBpdCBoYXMgaXRzIG93biBhZHZhbnRhZ2VzIG92ZXIgb3RoZXIgc29ydGluZyBhbGdvcml0aG1zIGxpa2UgaXQncyBlYXN5IHRvIHVuZGVyc3RhbmQgYW5kIGltcGxlbWVudCwgaXQncyBpbi1wbGFjZSBzb3J0aW5nIGFsZ29yaXRobSxcbiAgICAgICAgd2hpY2ggbWVhbnMgaXQgZG9lc24ndCByZXF1aXJlIGFueSBhZGRpdGlvbmFsIG1lbW9yeSBzcGFjZS4gSXQncyBhbHNvIHVzZWZ1bCBpbiBjZXJ0YWluIGNhc2VzIHdoZXJlIHRoZSBkYXRhIGlzIGFscmVhZHkgcGFydGlhbGx5IHNvcnRlZC5gXG4gICAgXSxcblxuICAgIGNvbXBsZXhpdHk6IHtcbiAgICAgICAgYmVzdFRpbWU6IGDOqShuPHN1cD4yPC9zdXA+KWAsXG4gICAgICAgIGF2Z1RpbWU6IGDOmChuPHN1cD4yPC9zdXA+KWAsXG4gICAgICAgIHdvcnN0VGltZTogYE8objxzdXA+Mjwvc3VwPilgLFxuICAgICAgICBzcGFjZUNvbXBsZXhpdHk6ICdPKDEpJyxcbiAgICB9LFxuXG4gICAgcHNldWRvY29kZTogYDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnByb2NlZHVyZTwvc3Bhbj4gc2VsZWN0aW9uU29ydCggQSA6IGxpc3Qgb2Ygc29ydGFibGUgaXRlbXMgKVxuICAgIG4gPSAgPHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPmxlbmd0aCg8L3NwYW4+QTxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj4pPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmZvcjwvc3Bhbj4gaSA9IDxzcGFuIGNsYXNzPVwidmFsdWVcIj4wPC9zcGFuPiAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+dG88L3NwYW4+IG4gLSA8c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj5cbiAgICAgICAgbWluSW5kZXggPSBpXG4gICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmZvcjwvc3Bhbj4gaiA9IGkgKyA8c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj4gIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnRvPC9zcGFuPiBuIC0gPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5pZjwvc3Bhbj4gQVtqXSA8IEFbbWluSW5kZXhdXG4gICAgICAgICAgICAgICAgbWluSW5kZXggPSBqXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgaWY8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCBmb3I8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnN3YXA8L3NwYW4+IEFbaV0gPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+d2l0aDwvc3Bhbj4gQVttaW5JbmRleF1cbiAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgZm9yPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIHByb2NlZHVyZTwvc3Bhbj5gXG59O1xuXG5leHBvcnQgY29uc3QgaW5zZXJ0aW9uU29ydEluZm8gPSB7XG4gICAgdGl0bGU6ICdJbnNlcnRpb24gU29ydCcsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgICAgYEluc2VydGlvbiBzb3J0IGlzIGEgc2ltcGxlIHNvcnRpbmcgYWxnb3JpdGhtIHRoYXQgYnVpbGRzIHRoZSBmaW5hbCBzb3J0ZWQgbGlzdCBvbmUgaXRlbSBhdCBhIHRpbWUuIEl0IHN0YXJ0cyB3aXRoIGFuIGVtcHR5IHNvcnRlZCBsaXN0IFxuICAgICAgICBhbmQgcmVwZWF0ZWRseSB0YWtlcyB0aGUgbmV4dCB1bnNvcnRlZCBpdGVtIGFuZCBpbnNlcnRzIGl0IGludG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gd2l0aGluIHRoZSBzb3J0ZWQgbGlzdC4gVGhpcyBwcm9jZXNzIGlzIHJlcGVhdGVkIHVudGlsIFxuICAgICAgICBhbGwgaXRlbXMgaGF2ZSBiZWVuIGluc2VydGVkIGludG8gdGhlIHNvcnRlZCBsaXN0LiBJdCdzIHNpbWlsYXIgdG8gaG93IHdlIHNvcnQgYSBkZWNrIG9mIGNhcmRzIGJ5IHBpY2tpbmcgb25lIGNhcmQgYXQgYSB0aW1lIGFuZCBpbnNlcnRpbmcgaXQgXG4gICAgICAgIGludG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gaW4gdGhlIGRlY2suYCxcblxuICAgICAgICBgSW5zZXJ0aW9uIHNvcnQgaXMgYSBjb21wYXJpc29uLWJhc2VkIHNvcnRpbmcgYWxnb3JpdGhtIGFuZCBoYXMgYSB0aW1lIGNvbXBsZXhpdHkgb2YgTyhuXjIpIHdoaWNoIG1ha2VzIGl0IGxlc3MgZWZmaWNpZW50IGZvciBsYXJnZXIgbGlzdHMuIFxuICAgICAgICBIb3dldmVyLCBpdCBwZXJmb3JtcyB3ZWxsIG9uIHNtYWxsIGxpc3RzIG9yIGRhdGEgc2V0cyBhbmQgaXMgZWZmaWNpZW50IGZvciBkYXRhIHNldHMgdGhhdCBhcmUgYWxyZWFkeSBwYXJ0aWFsbHkgc29ydGVkIG9yIGhhdmUgc29tZSBlbGVtZW50cyBcbiAgICAgICAgc29ydGVkIGluIHJldmVyc2Ugb3JkZXIuIEl0J3MgYWxzbyBhbiBpbi1wbGFjZSBzb3J0aW5nIGFsZ29yaXRobSwgd2hpY2ggbWVhbnMgaXQgZG9lc24ndCByZXF1aXJlIGFueSBhZGRpdGlvbmFsIG1lbW9yeSBzcGFjZS5gXG4gICAgXSxcblxuICAgIGNvbXBsZXhpdHk6IHtcbiAgICAgICAgYmVzdFRpbWU6IGDOqShuKWAsXG4gICAgICAgIGF2Z1RpbWU6IGDOmChuPHN1cD4yPC9zdXA+KWAsXG4gICAgICAgIHdvcnN0VGltZTogYE8objxzdXA+Mjwvc3VwPilgLFxuICAgICAgICBzcGFjZUNvbXBsZXhpdHk6ICdPKDEpJyxcbiAgICB9LFxuXG4gICAgcHNldWRvY29kZTogYDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnByb2NlZHVyZTwvc3Bhbj4gaW5zZXJ0aW9uU29ydCggQSA6IGxpc3Qgb2Ygc29ydGFibGUgaXRlbXMgKVxuICAgIG4gPSAgPHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPmxlbmd0aCg8L3NwYW4+QTxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj4pPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmZvcjwvc3Bhbj4gaSA9IDxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPiAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+dG88L3NwYW4+IG4gLSA8c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj5cbiAgICAgICAgaiA9IGlcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+d2hpbGU8L3NwYW4+IGogPj0gPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5pZjwvc3Bhbj4gQVtqXSA8PSBBW2otPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+XVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnN3YXA8L3NwYW4+IEFbal0gPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+d2l0aDwvc3Bhbj4gQVtqLTxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPl1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCBpZjwvc3Bhbj5cbiAgICAgICAgICAgIGogPSBqIC0gPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCB3aGlsZTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgZm9yPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIHByb2NlZHVyZTwvc3Bhbj5gXG59O1xuXG5leHBvcnQgY29uc3QgcXVpY2tTb3J0SW5mbyA9IHtcbiAgICB0aXRsZTogJ1F1aWNrIFNvcnQnLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgIGBRdWljayBzb3J0IGlzIGEgcG9wdWxhciBhbmQgZWZmaWNpZW50IHNvcnRpbmcgYWxnb3JpdGhtIHRoYXQgdXNlcyBhIGRpdmlkZS1hbmQtY29ucXVlciBzdHJhdGVneSB0byBzb3J0IGEgZ2l2ZW4gZGF0YSBzZXQuIEl0IHN0YXJ0cyBieSBzZWxlY3RpbmcgYSBcInBpdm90XCIgXG4gICAgICAgIGVsZW1lbnQgZnJvbSB0aGUgZGF0YSBzZXQsIGFuZCBwYXJ0aXRpb25pbmcgdGhlIG90aGVyIGVsZW1lbnRzIGludG8gdHdvIGdyb3VwczogdGhvc2UgbGVzcyB0aGFuIHRoZSBwaXZvdCBhbmQgdGhvc2UgZ3JlYXRlciB0aGFuIHRoZSBwaXZvdC4gVGhlIHBpdm90IGlzIHRoZW4gXG4gICAgICAgIGluIGl0cyBmaW5hbCBwb3NpdGlvbiBpbiB0aGUgc29ydGVkIGRhdGEgc2V0LiBUaGUgcHJvY2VzcyBpcyB0aGVuIHJlcGVhdGVkIHJlY3Vyc2l2ZWx5IG9uIHRoZSB0d28gcGFydGl0aW9uZWQgZ3JvdXBzIHVudGlsIHRoZSBlbnRpcmUgZGF0YSBzZXQgaXMgc29ydGVkLmAsXG5cbiAgICAgICAgYE9uZSBvZiB0aGUgYWR2YW50YWdlcyBvZiBxdWljayBzb3J0IGlzIGl0cyBlZmZpY2llbmN5LCB3aXRoIGFuIGF2ZXJhZ2UgdGltZSBjb21wbGV4aXR5IG9mIE8obiBsb2cgbikuIEFkZGl0aW9uYWxseSwgaXQgaGFzIHRoZSBhYmlsaXR5IHRvIHBlcmZvcm0gd2VsbCBldmVuIFxuICAgICAgICBpbiBjYXNlcyB3aGVyZSB0aGUgaW5wdXQgZGF0YSBpcyBhbHJlYWR5IHBhcnRpYWxseSBzb3J0ZWQgb3IgY29udGFpbnMgbWFueSBkdXBsaWNhdGVzLiBIb3dldmVyLCBxdWljayBzb3J0IGFsc28gaGFzIHNvbWUgZHJhd2JhY2tzLiBPbmUgcG90ZW50aWFsIGlzc3VlIGlzIHRoYXQgXG4gICAgICAgIGl0IGNhbiBoYXZlIGEgd29yc3QtY2FzZSB0aW1lIGNvbXBsZXhpdHkgb2YgTyhuXjIpIGlmIHRoZSBwaXZvdCBpcyBjaG9zZW4gcG9vcmx5LCBzdWNoIGFzIGFsd2F5cyBzZWxlY3RpbmcgdGhlIGZpcnN0IG9yIGxhc3QgZWxlbWVudCBpbiB0aGUgcGFydGl0aW9uLiBUbyBtaXRpZ2F0ZSB0aGlzLCBcbiAgICAgICAgdGhlcmUgYXJlIHBpdm90IHNlbGVjdGlvbiBzdHJhdGVnaWVzLCBzdWNoIGFzIGNob29zaW5nIHRoZSBtZWRpYW4gb3IgYSByYW5kb20gZWxlbWVudCwgdGhhdCBjYW4gYmUgdXNlZCB0byBpbXByb3ZlIHRoZSBwZXJmb3JtYW5jZSBvZiB0aGUgYWxnb3JpdGhtYCxcblxuICAgICAgICBgVGhlIEhvYXJlIHBhcnRpdGlvbiBzY2hlbWUgaXMgYSBtZXRob2QgdXNlZCBpbiB0aGUgcXVpY2sgc29ydCBhbGdvcml0aG0gdG8gcGFydGl0aW9uIGFuIGFycmF5IGludG8gdHdvIHN1Yi1hcnJheXMuIFRoZSBIb2FyZSBwYXJ0aXRpb24gc2NoZW1lIHVzZXMgdHdvIGluZGljZXMsIGEgXG4gICAgICAgIGxlZnQgaW5kZXggYW5kIGEgcmlnaHQgaW5kZXgsIHRvIHRyYXZlcnNlIHRoZSBhcnJheSBhbmQgcGFydGl0aW9uIGl0IGJhc2VkIG9uIGEgY2hvc2VuIHBpdm90IGVsZW1lbnQuIFRoZSBwaXZvdCBlbGVtZW50IGlzIHVzdWFsbHkgdGhlIG1pZGRsZSBlbGVtZW50IG9mIHRoZSBhcnJheSwgXG4gICAgICAgIGJ1dCBpdCBjYW4gYWxzbyBiZSBjaG9zZW4gcmFuZG9tbHkgb3IgdXNpbmcgb3RoZXIgbWV0aG9kcy4gVGhlIGxlZnQgaW5kZXggc3RhcnRzIGF0IHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBhcnJheSBhbmQgbW92ZXMgdG93YXJkcyB0aGUgcmlnaHQsIHdoaWxlIHRoZSByaWdodCBpbmRleCBcbiAgICAgICAgc3RhcnRzIGF0IHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGFycmF5IGFuZCBtb3ZlcyB0b3dhcmRzIHRoZSBsZWZ0LiBUaGUgdHdvIGluZGljZXMgc3dhcCBlbGVtZW50cyB0aGF0IGFyZSBvbiB0aGUgd3Jvbmcgc2lkZSBvZiB0aGUgcGl2b3QgdW50aWwgdGhleSBtZWV0IGluIHRoZSBtaWRkbGUsIFxuICAgICAgICBhdCB3aGljaCBwb2ludCB0aGUgYXJyYXkgaXMgcGFydGl0aW9uZWQgYW5kIHRoZSBwaXZvdCBlbGVtZW50IGlzIGluIGl0cyBmaW5hbCBwb3NpdGlvbi5gXG4gICAgXSxcblxuICAgIGNvbXBsZXhpdHk6IHtcbiAgICAgICAgYmVzdFRpbWU6IGDOqShubG9nbilgLFxuICAgICAgICBhdmdUaW1lOiBgzpgobmxvZ24pYCxcbiAgICAgICAgd29yc3RUaW1lOiBgTyhuPHN1cD4yPC9zdXA+KWAsXG4gICAgICAgIHNwYWNlQ29tcGxleGl0eTogJ08obG9nbiknLFxuICAgIH0sXG5cbiAgICBwc2V1ZG9jb2RlOiBgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+cHJvY2VkdXJlPC9zcGFuPiBxdWlja1NvcnQoQSA6IGxpc3Qgb2Ygc29ydGFibGUgaXRlbXMsIGxlZnQgOiBpbnQsIHJpZ2h0IDogaW50KVxuICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmlmPC9zcGFuPiBsZWZ0IDwgcmlnaHRcbiAgICAgICAgcCA9IDxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj5ob2FyZV9wYXJ0aXRpb24oPC9zcGFuPkEsIGxlZnQsIHJpZ2h0PHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPik8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj5xdWlja1NvcnQoPC9zcGFuPkEsIGxlZnQsIHA8c3BhbiBjbGFzcz1cImZ1bmN0aW9uXCI+KTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPnF1aWNrU29ydCg8L3NwYW4+QSwgcCs8c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj4sIHJpZ2h0PHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPik8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIGlmPC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIHByb2NlZHVyZTwvc3Bhbj5cblxuXG48c3BhbiBjbGFzcz1cImtleXdvcmRcIj5wcm9jZWR1cmU8L3NwYW4+IGhvYXJlX3BhcnRpdGlvbihBIDogbGlzdCBvZiBzb3J0YWJsZSBpdGVtcywgbGVmdCA6IGludCwgcmlnaHQgOiBpbnQpXG4gICAgcGl2b3QgPSBBWyhsZWZ0ICsgcmlnaHQpIC8gPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjI8L3NwYW4+XVxuICAgIGkgPSBsZWZ0IC0gPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+XG4gICAgaiA9IHJpZ2h0ICsgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+d2hpbGU8L3NwYW4+IDxzcGFuIGNsYXNzPVwidmFsdWVcIj50cnVlPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5yZXBlYXQ8L3NwYW4+XG4gICAgICAgICAgICBpID0gaSArIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj51bnRpbDwvc3Bhbj4gQVtpXSA+PSBwaXZvdFxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5yZXBlYXQ8L3NwYW4+XG4gICAgICAgICAgICBqID0gaiAtIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj51bnRpbDwvc3Bhbj4gQVtqXSA8PSBwaXZvdFxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5pZjwvc3Bhbj4gaSA+PSBqXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5yZXR1cm48L3NwYW4+IGpcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIGlmPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5zd2FwPC9zcGFuPiBBW2ldIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPndpdGg8L3NwYW4+IEFbal1cbjxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCBwcm9jZWR1cmU8L3NwYW4+YFxufVxuXG4iLCJpbXBvcnQgYnViYmxlU29ydCBmcm9tIFwiLi4vYWxnb3JpdGhtcy9idWJibGVTb3J0XCI7XG5pbXBvcnQgaW5zZXJ0aW9uU29ydCBmcm9tIFwiLi4vYWxnb3JpdGhtcy9pbnNlcnRpb25Tb3J0XCI7XG5pbXBvcnQgcXVpY2tTb3J0IGZyb20gXCIuLi9hbGdvcml0aG1zL3F1aWNrU29ydFwiO1xuaW1wb3J0IHNlbGVjdGlvblNvcnQgZnJvbSBcIi4uL2FsZ29yaXRobXMvc2VsZWN0aW9uU29ydFwiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIG1vZGVsIGZvciBzb3J0aW5nIGFsZ29yaXRobXNcbiAqL1xuY2xhc3MgU29ydE1vZGVse1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBzaXplIG9mIHRoZSBkYXRhIGFycmF5LCBnZW5lcmF0ZXMgYSByYW5kb20gYXJyYXkgb2YgaW50ZWdlcnMgYW5kIGNyZWF0ZXMgYW4gZW1wdHkgYXJyYXkgZm9yIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnNpemUgPSAxMDA7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuI2dlbmVyYXRlUmFuZG9tQXJyYXkodGhpcy5zaXplLCA1LCAyKnRoaXMuc2l6ZSk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBbXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHJldHVybnMge0FycmF5fSB0aGUgZGF0YSBhcnJheVxuICAgICAqL1xuICAgIGdldERhdGEoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIG5ldyBzaXplLCBjcmVhdGVzIGEgbmV3IHJhbmRvbSBhcnJheSBhbmQgY3JlYXRlcyBhIG5ldyBlbXB0eSBhbmltYXRpb24gYXJyYXlcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgbmV3IHNpemUgb2YgdGhlIGFycmF5XG4gICAgICovXG4gICAgc2V0X3NpemUodmFsdWUpe1xuICAgICAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gW107XG4gICAgICAgIFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaHVmZmxlcyB0aGUgZGF0YSBhbmQgc2V0cyB0aGUgYW5pbWF0aW9uIGFycmF5IHRvIGFuIGVtcHR5IGFycmF5XG4gICAgICovXG4gICAgc2h1ZmZsZSgpe1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLiNnZW5lcmF0ZVJhbmRvbUFycmF5KHRoaXMuc2l6ZSwgMSwgMip0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IFtdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBpbiBhbiBhbGdvcml0aG0gYXMgYSBzdHJpbmcgYW5kIHVzZXMgYSBzd2l0Y2ggc3RhdGVtZW50IHRvIGRldGVybWluZSB3aGljaCBzb3J0aW5nIGFsZ29yaXRobSB0byB1c2UuXG4gICAgICogRXhlY3R1ZXMgdGhlIGNob3NlbiBhbGdvcml0aG0gYW5kIHN0b3JlcyB0aGUgYW5pbWF0aW9uLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhbGdvcml0aG0gVGl0bGUgb2YgdGhlIGFsZ29yaXRobVxuICAgICAqL1xuICAgIHNvcnQoYWxnb3JpdGhtKXtcbiAgICAgICAgbGV0IHNvcnRlcjtcbiAgICAgICAgc3dpdGNoIChhbGdvcml0aG0pe1xuICAgICAgICAgICAgY2FzZSAnQnViYmxlIFNvcnQnOiB7XG4gICAgICAgICAgICAgICAgc29ydGVyID0gYnViYmxlU29ydDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnU2VsZWN0aW9uIFNvcnQnOiB7XG4gICAgICAgICAgICAgICAgc29ydGVyID0gc2VsZWN0aW9uU29ydDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnSW5zZXJ0aW9uIFNvcnQnOiB7XG4gICAgICAgICAgICAgICAgc29ydGVyID0gaW5zZXJ0aW9uU29ydDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnUXVpY2sgU29ydCc6IHtcbiAgICAgICAgICAgICAgICBzb3J0ZXIgPSBxdWlja1NvcnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBBbGdvcml0aG0nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBzb3J0ZXIodGhpcy5kYXRhKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgcmFuZG9tIGFycmF5IG9mIGludGVnZXJzIHdpdGggYSBzcGVjaWZpZWQgbGVuZ3RoLCBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggTGVuZ3RoIG9mIHRoZSBhcnJheVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtaW4gbWluaW11bSBpbnRlZ2VyIHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heCBtYXhpbXVtIGludGVnZXIgdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IE5ldyBBcnJheSBvZiBpbnRlZ2Vyc1xuICAgICAqL1xuICAgICNnZW5lcmF0ZVJhbmRvbUFycmF5KGxlbmd0aCwgbWluLCBtYXgpe1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RofSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihtYXgtbWluKzEpK21pbikpO1xuICAgIH07XG5cblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0TW9kZWw7IiwiaW1wb3J0ICcuL2hvbWUtcGFnZS5jc3MnO1xuXG4vKipcbiAqIEhvbWVQYWdlIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgaG9tZSBwYWdlLlxuICovXG5jbGFzcyBIb21lUGFnZSB7XG5cbiAgICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgbWFpbiBjb250YWluZXIgb2YgdGhlIGhvbWUgcGFnZSBhbmQgYWRkIHRoZSBuZWNlc3NhcnkgY2xhc3Nlc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgdGhpcy5tYWluLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAnaG9tZS1wYWdlJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ2hvbWUtcGFnZV9fY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRoZSBob21lIHBhZ2UgYW5kIHJldHVybiB0aGUgbWFpbiBlbGVtZW50XG4gICAgICovXG4gICAgY3JlYXRlKCkge1xuICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgQXJyYXkgQmFyc1xuICAgICAgICB0aGlzLiNjcmVhdGVBcnJheUJhcnMoKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIFRpdGxlXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9ICdTb3J0aW5nIEFsZ29yaXRobXMgPGJyPiBWaXN1YWxpemVyJztcbiAgICAgICAgdGhpcy5tYWluLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5tYWluO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIGFycmF5IGJhcnMgZGlzcGxheWVkIG9uIHRoZSBob21lIHBhZ2VcbiAgICAgKi9cbiAgICAjY3JlYXRlQXJyYXlCYXJzKCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIGEgZGl2IGVsZW1lbnQgYW5kIGFkZCB0aGUgbmVjZXNzYXJ5IGNsYXNzXG4gICAgICAgIGNvbnN0IGFycmF5QmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFycmF5QmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZV9fYmFycy1jb250YWluZXInKTtcblxuICAgICAgICAvLyBBcHBlbmQgMTAgZGl2IGVsZW1lbnRzIHNldHRpbmcgdGhlaXIgaGVpZ2h0cyBhbmQgd2lkdGhzXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw9MTA7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHs1ICsgaSo5LjV9JWA7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAlJztcbiAgICAgICAgICAgIGFycmF5QmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBhcnJheSBiYXJzIHRvIHRoZSBmaXJzdCBjaGlsZCBvZiB0aGUgbWFpbiBlbGVtZW50LlxuICAgICAgICB0aGlzLm1haW4uZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoYXJyYXlCYXJDb250YWluZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7IiwiaW1wb3J0ICcuL3NvcnQtcGFnZS5jc3MnO1xuXG4vKipcbiAqIFRoZSBjbGFzcyBjcmVhdGVzIGEgc29ydCBwYWdlIHdpdGggYSBoZWFkZXIsIHZpc3VhbGl6ZXIsIGFuZCBhcnRpY2xlIHNlY3Rpb25zLlxuICovXG5jbGFzcyBTb3J0UGFnZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtMCBBbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHRpdGxlLCBkZXNjcmlwdGlvbiwgY29tcGxleGl0eSwgYW5kIHBzZXVkb2NvZGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih7dGl0bGUsIGRlc2NyaXB0aW9uLCBjb21wbGV4aXR5LCBwc2V1ZG9jb2RlfSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jb21wbGV4aXR5ID0gY29tcGxleGl0eTtcbiAgICAgICAgdGhpcy5wc2V1ZG9jb2RlID0gcHNldWRvY29kZTtcblxuICAgICAgICB0aGlzLnBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIHRoaXMucGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ3NvcnQtcGFnZScpO1xuICAgICAgICB0aGlzLnBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5wYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdzb3J0LXBhZ2VfX2NvbnRhaW5lcicpXG4gICAgICAgIHRoaXMucGFnZS5hcHBlbmRDaGlsZCh0aGlzLnBhZ2VDb250YWluZXIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBwYWdlIGFuZCBjYWxscyBvdGhlciBtZXRob2RzIHRvIGNyZWF0ZSB0aGUgZGlmZmVyZW50IHNlY3Rpb25zIG9mIHRoZSBwYWdlLlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gbWFpblxuICAgICAqL1xuICAgIGNyZWF0ZSAoKXtcbiAgICAgICAgdGhpcy4jY3JlYXRlSGVhZGVyKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlVmlzdWFsaXplcigpO1xuICAgICAgICB0aGlzLiNjcmVhdGVBcnRpY2xlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGhlYWRlciBzZWN0aW9uIG9mIHRoZSBwYWdlIHdpdGggdGhlIHRpdGxlIG9mIHRoZSBzb3J0IGFsZ29yaXRobS5cbiAgICAgKi9cbiAgICAjY3JlYXRlSGVhZGVyKCl7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc29ydC1wYWdlX19oZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9J3NvcnQtcGFnZV9fdGl0bGUnPiR7dGhpcy50aXRsZX08L2gyPmA7XG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdCBtZXRob2QgdGhhdCBuZWVkcyB0byBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3Nlcy5cbiAgICAgKiBcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKi9cbiAgICBjcmVhdGVWaXN1YWxpemVyKCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlVmlzdWFsaXplcigpIG1ldGhvZCBtdXN0IGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzJyk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBhcnRpY2xlIHNlY3Rpb24gb2YgdGhlIHBhZ2Ugd2l0aCBhIGRlc2NyaXB0aW9uLCBjb21wbGV4aXR5LCBhbmQgcHNldWRvY29kZSBvZiB0aGUgc29ydCBhbGdvcml0aG0uXG4gICAgICovXG4gICAgI2NyZWF0ZUFydGljbGUoKXtcbiAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKCdzb3J0LXBhZ2VfX2FydGljbGUnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMuI2NyZWF0ZURlc2NyaXB0b24oY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy4jY3JlYXRlQ29tcGxleGl0eShjb250YWluZXIpO1xuICAgICAgICB0aGlzLiNjcmVhdGVQc2V1ZG9jb2RlKGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5wYWdlLmFwcGVuZENoaWxkKGFydGljbGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIERlc2NyaXB0aW9uIHNlY3Rpb24gaW4gdGhlIGFydGljbGUgc2VjdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0hUTUxFZWxlbWVudH0gYXJ0aWNsZSB0aGUgYXJ0aWNsZSBlbGVtZW50IHRvIGFwcHBlbmQgdG8uXG4gICAgICovXG4gICAgI2NyZWF0ZURlc2NyaXB0b24oYXJ0aWNsZSl7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLiNjcmVhdGVQYWdlU2VjdGlvbignc29ydC1wYWdlX19kZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicpXG5cbiAgICAgICBmb3IgKGNvbnN0IGlkeCBpbiB0aGlzLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0aGlzLmRlc2NyaXB0aW9uW2lkeF07XG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgQ29tcGxleGl0eSBzZWN0aW9uIGluIHRoZSBhcnRpY2xlIHNlY3Rpb24uXG4gICAgICogXG4gICAgICogQHBhcmFtIHtIVE1MRWVsZW1lbnR9IGFydGljbGUgdGhlIGFydGljbGUgZWxlbWVudCB0byBhcHBwZW5kIHRvLlxuICAgICAqL1xuICAgICNjcmVhdGVDb21wbGV4aXR5KGFydGljbGUpe1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gdGhpcy4jY3JlYXRlUGFnZVNlY3Rpb24oJ3NvcnQtcGFnZV9fY29tcGxleGl0eScsICdDb21wbGV4aXR5JylcblxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdUaGUgVGltZSBhbmQgU3BhY2UgQ29tbGV4aXRpZXMgYXJlIHNob3duIGluIHRoZSB0YWJsZSBiZWxvdy4nO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdzb3J0LXBhZ2VfX2NvbXBsZXhpdHktdGFibGUnKTtcbiAgICAgICAgdGFibGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHRyPjx0aCByb3dzcGFuPVwiM1wiPlRpbWUgQ29tcGxleGl0eTwvdGg+PHRoPkJlc3Q8L3RoPjx0ZD4ke3RoaXMuY29tcGxleGl0eS5iZXN0VGltZX08L3RkPjwvdHI+XG4gICAgICAgICAgICA8dHI+PHRoPkF2ZXJhZ2U8L3RoPjx0ZD4ke3RoaXMuY29tcGxleGl0eS5hdmdUaW1lfTwvdGQ+PC90cj5cbiAgICAgICAgICAgIDx0cj48dGg+V29yc3Q8L3RoPiA8dGQ+JHt0aGlzLmNvbXBsZXhpdHkud29yc3RUaW1lfTwvdGQ+PC90cj5cbiAgICAgICAgICAgIDx0cj48dGggY29sc3Bhbj1cIjJcIj5TcGFjZSBDb21wbGV4aXR5PC90aD48dGQ+JHt0aGlzLmNvbXBsZXhpdHkuc3BhY2VDb21wbGV4aXR5fTwvdGQ+PC90cj5cbiAgICAgICAgYDtcblxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRhYmxlKTtcblxuICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBQc2V1ZG9jb2RlIHNlY3Rpb24gaW4gdGhlIGFydGljbGUgc2VjdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0hUTUxFZWxlbWVudH0gYXJ0aWNsZSB0aGUgYXJ0aWNsZSBlbGVtZW50IHRvIGFwcHBlbmQgdG8uXG4gICAgICovXG4gICAgI2NyZWF0ZVBzZXVkb2NvZGUoYXJ0aWNsZSl7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLiNjcmVhdGVQYWdlU2VjdGlvbignc29ydC1wYWdlX19wc2V1ZG9jb2RlJywgJ1BzZXVkb2NvZGUnKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnSW4gcHNldWRvY29kZSB0aGUgYWxnb3JpdGhtIGNhbiBiZSBleHByZXNzZWQgYXMgc2hvd24gYmVsbG93Lic7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgICAgICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICAgICAgcHJlLmlubmVySFRNTCA9IGA8Y29kZT4ke3RoaXMucHNldWRvY29kZX08L2NvZGU+YFxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHByZSk7XG5cbiAgICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBzZWN0aW9uIGVsZW1lbnQgd2l0aCBhIGdpdmVuIGNsYXNzIGFuZCB0aXRsZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIEEgY2xhc3MgbmFtZSBmb3IgdGhlIHNlY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgQSB0aXRsZSBmb3IgdGhlIHNlY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHNlY3Rpb25cbiAgICAgKi9cbiAgICAjY3JlYXRlUGFnZVNlY3Rpb24oY2xhc3NOYW1lLCB0aXRsZSl7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydFBhZ2U7IiwiaW1wb3J0IEluUGxhY2VWaXN1YWxpemVyIGZyb20gXCIuLi8uLi8uLi9zaGFyZWRfY29tcG9uZW50cy9pbnBsYWNlX3Zpc3VhbGl6ZXIvSW5QbGFjZVZpc3VhbGl6ZXJcIjtcbmltcG9ydCBTb3J0UGFnZSBmcm9tIFwiLi4vU29ydFBhZ2VcIjtcblxuLyoqXG4gKiBJblBsYWNlU29ydFBhZ2UgY2xhc3MgaXMgYSBzdWJjbGFzcyBvZiBTb3J0UGFnZSBjbGFzcy4gSXQgaXMgdXNlZCB0byBjcmVhdGUgYSBwYWdlIGZvciBkaXNwbGF5aW5nIEluLVBsYWNlIHNvcnRpbmcgYWxnb3JpdGhtc1xuICogQGV4dGVuZHMgU29ydFBhZ2VcbiAqL1xuY2xhc3MgSW5QbGFjZVNvcnRQYWdlIGV4dGVuZHMgU29ydFBhZ2Uge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhbGdvcml0aG1EYXRhIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgZGF0YSBhYm91dCB0aGUgYWxnb3JpdGhtIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFsZ29yaXRobURhdGEpe1xuICAgICAgICBzdXBlcihhbGdvcml0aG1EYXRhKTtcbiAgICAgICAgdGhpcy52aXN1YWxpemVyID0gbmV3IEluUGxhY2VWaXN1YWxpemVyKGFsZ29yaXRobURhdGEudGl0bGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSB2aXN1YWxpemVyIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBwYWdlIGNvbnRhaW5lclxuICAgICovXG4gICAgY3JlYXRlVmlzdWFsaXplcigpe1xuICAgICAgICB0aGlzLnZpc3VhbGl6ZXIgPSB0aGlzLnZpc3VhbGl6ZXIuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMudmlzdWFsaXplci5jbGFzc0xpc3QuYWRkKCdzb3J0LXBhZ2VfX3Zpc3VhbGl6ZXItY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnZpc3VhbGl6ZXIpO1xuICAgICAgIFxuICAgIH07XG4gICAgXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEluUGxhY2VTb3J0UGFnZTsiLCJpbXBvcnQgZ2l0aHViTG9nbyBmcm9tICcuLi8uLi8uLi9pbWFnZXMvZ2l0aHViLW1hcmsuc3ZnJztcblxuaW1wb3J0ICcuL2Zvb3Rlci5jc3MnO1xuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgZm9vdGVyIGNvbXBvbmVudFxuICovXG5jbGFzcyBGb290ZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCB5ZWFyXG4gICAgICAgIHRoaXMueWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZvb3RlciBlbGVtZW50XG4gICAgICAgIHRoaXMuZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBmb290ZXIgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IEZvb3RlciBFbGVtZW50XG4gICAgICovXG4gICAgY3JlYXRlKCl7XG4gICAgICAgIC8vIEFkZCB0aGUgSFRNTCBjb250ZW50IHRvIHRoZSBmb290ZXIgZWxlbWVudFxuICAgICAgICB0aGlzLmZvb3Rlci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzbWFsbD5Db3B5cmlnaHQgJmNvcHk7ICR7dGhpcy55ZWFyfSwgQmF0b3VjaGFuIE9tZXJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JhdG9vbWVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29uXCIgc3JjPSR7Z2l0aHViTG9nb30gYWx0PVwiR2l0SHViIE1hcmtcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIHJldHVybiB0aGlzLmZvb3RlcjtcbiAgICB9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgc3VuSWNvbiBmcm9tICcuLi8uLi8uLi9pbWFnZXMvc3VuLWljb24uc3ZnJztcbmltcG9ydCBtb29uSWNvbiBmcm9tICcuLi8uLi8uLi9pbWFnZXMvbW9vbi1pY29uLnN2Zyc7XG5pbXBvcnQgVG9nZ2xlQnV0dG9uIGZyb20gJy4uL3Rvb2dsZV9idXR0b24vVG9nZ2xlQnV0dG9uJztcblxuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xuXG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBIZWFkZXIgY29tcG9uZW50XG4gKi9cbmNsYXNzIEhlYWRlciB7XG4gICAgXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgaGVhZGVyIGVsZW1lbnQsIGNvbnRhaW5lciBlbGVtZW50IGFuZCB0aGUgcm9vdCBlbGVtZW50LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgSGVhZGVyIEVsZW1lbnQgd2l0aCBhIGNvbnRhaW5lciBkaXYgY2hpbGQuXG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ2hlYWRlcl9fY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIFxuICAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBoZWFkZXIgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IEhlYWRlciBFbGVtZW50XG4gICAgICovXG4gICAgIGNyZWF0ZSgpe1xuICAgICAgICAvLyBDcmVhdGUgVGhlIFRpdGxlXG4gICAgICAgIHRoaXMuI2NyZWF0ZUhlYWRlclRpdGxlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgc2V0dGluZ3MgY29udGFpbmVyIGNvbnRhaW5pbmcgdGhlIHNldHRpbmdzXG4gICAgICAgIHRoaXMuI2NyZWF0ZVNldHRpbmdzQ29udGFpbmVyKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSB0aXRsZSBlbGVtZW50IGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBjb250YWluZXIgZWxlbWVudFxuICAgICAqL1xuICAgICNjcmVhdGVIZWFkZXJUaXRsZSgpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3RpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1NvcnRpbmcgVmlzdWFsaXplcic7XG4gICAgICAgIHRoaXMuaGVhZGVyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgc2V0dGluZ3MgY29udGFpbmVyIGFuZCBhZGRzIGl0IHRvIHRoZSBoZWFkZXIgZWxlbWVudFxuICAgICAqIGFuZCBjcmVhdGVzIHRoZSBidXJnZXIgbWVudSBhbmQgdGhlbWUgYnV0dG9uIGluc2lkZSBpdFxuICAgICAqL1xuICAgICNjcmVhdGVTZXR0aW5nc0NvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0dGluZ3MuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19zZXR0aW5ncycpO1xuICAgICAgICB0aGlzLmhlYWRlci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChzZXR0aW5ncyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIEJ1cmdlciBNZW51XG4gICAgICAgIHRoaXMuI2NyZWF0ZUJ1cmdlck1lbnUoc2V0dGluZ3MpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBUb2dnbGUgYnV0dG9uIGZvciB0b2dnbGluZyBiZXR3ZWVuIGRhcmsgYW5kIGxpZ2h0IHRoZW1lXG4gICAgICAgIHRoaXMuI2NyZWF0ZVRoZW1lQnV0dG9uKHNldHRpbmdzKTtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAqIENyZWF0ZXMgdGhlIHRoZW1lIHRvZ2dsZSBidXR0b24gYW5kIGFkZHMgaXQgdG8gdGhlIHNldHRpbmdzIGNvbnRhaW5lci5cbiAgICAqXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzZXR0aW5ncyAtIFRoZSBlbGVtZW50IHRoYXQgdGhlIHRoZW1lIHRvZ2dsZSBidXR0b24gd2lsbCBiZSBhZGRlZCB0by5cbiAgICAqL1xuICAgICNjcmVhdGVUaGVtZUJ1dHRvbihzZXR0aW5ncykge1xuICAgICAgICBjb25zdCBmaXJzdEljb24gPSB7IHNyYzogc3VuSWNvbiwgYWx0OiAnTGlnaHQgVGhlbWUnIH07XG4gICAgICAgIGNvbnN0IHNlY29uZEljb24gPSB7IHNyYzogbW9vbkljb24sIGFsdDogJ0RhcmsgVGhlbWUnIH07XG4gICAgICAgIGNvbnN0IHRoZW1lQnV0dG9uID0gbmV3IFRvZ2dsZUJ1dHRvbihcbiAgICAgICAgICAgICdoZWFkZXJfX2J0bicsXG4gICAgICAgICAgICBmaXJzdEljb24sXG4gICAgICAgICAgICBzZWNvbmRJY29uLFxuICAgICAgICAgICAgKCkgPT4geyB0aGlzLiNoYW5kbGVUaGVtZUJ1dHRvbkNsaWNrKCkgfSkuY3JlYXRlKCk7XG5cbiAgICAgICAgc2V0dGluZ3MuYXBwZW5kQ2hpbGQodGhlbWVCdXR0b24pO1xuICAgIH07XG5cbiAgICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIHRoZW1lIHRvZ2dsZSBidXR0b24uXG4gICAgICogVG9nZ2xlcyB0aGUgZGFyay10aGVtZSBjbGFzcyBvbiB0aGUgcm9vdCBlbGVtZW50IHRvIHN3aXRjaCBiZXR3ZWVuIHRoZW1lcy5cbiAgICAgKi9cbiAgICAjaGFuZGxlVGhlbWVCdXR0b25DbGljaygpIHtcbiAgICAgICAgdGhpcy5yb290RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLXRoZW1lJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYnVyZ2VyIG1lbnUgYnV0dG9uIGFuZCBhZGRzIGl0IHRvIHRoZSBzZXR0aW5ncyBjb250YWluZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzZXR0aW5ncyAtIFRoZSBlbGVtZW50IHRoYXQgdGhlIGJ1cmdlciBtZW51IGJ1dHRvbiB3aWxsIGJlIGFkZGVkIHRvLlxuICAgICAqL1xuICAgICNjcmVhdGVCdXJnZXJNZW51KHNldHRpbmdzKXtcbiAgICAgICAgLy8gQ3JlYXRlIEJ1dHRvblxuICAgICAgICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fYnRuJywgJ2hlYWRlcl9fYnVyZ2VyLW1lbnUnKTtcbiAgICAgICAgLy8gQWRkIG9uIGNsaWNrIGxpc3RlbmVyIHRvIG9wZW4gdGhlIG5hdmJhclxuICAgICAgICBidXJnZXJCdG4ub25jbGljayA9ICgpID0+IHt0aGlzLiNoYW5kbGVCdXJnZXJNZW51Q2xpY2soKTt9XG5cbiAgICAgICAgLy8gQWRkIHRocmVlIGRpdnMgdG8gY29uc3RydWN0IHRoZSBiYXJzXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTw9MjsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fYnVyZ2VyLWJhcicpO1xuICAgICAgICAgICAgYnVyZ2VyQnRuLmFwcGVuZENoaWxkKGJhcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0dGluZ3MuYXBwZW5kQ2hpbGQoYnVyZ2VyQnRuKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGJ1cmdlciBtZW51IGJ1dHRvbi5cbiAgICAgKiBUb2dnbGVzIHRoZSBhY3RpdmUgY2xhc3Mgb24gdGhlIG5hdmJhciB0byBvcGVuIGl0LlxuICAgICAqL1xuICAgICNoYW5kbGVCdXJnZXJNZW51Q2xpY2soKSB7XG4gICAgICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFNvcnRNb2RlbCBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1NvcnRNb2RlbFwiO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tIFwiLi4vdG9vZ2xlX2J1dHRvbi9Ub2dnbGVCdXR0b25cIjtcbmltcG9ydCBwbGF5SWNvbiBmcm9tICcuLi8uLi8uLi9pbWFnZXMvcGxheS1pY29uLnN2Zyc7XG5pbXBvcnQgc3RvcEljb24gZnJvbSAnLi4vLi4vLi4vaW1hZ2VzL3BhdXNlLWljb24uc3ZnJztcbmltcG9ydCBzaHVmZmxlSWNvbiBmcm9tICcuLi8uLi8uLi9pbWFnZXMvc2h1ZmZsZS1pY29uLnN2Zyc7XG5pbXBvcnQgJy4vaW5wbGFjZS12aXN1YWxpemVyLmNzcyc7XG5cblxuY2xhc3MgSW5QbGFjZVZpc3VhbGl6ZXJ7XG5cbiAgICBjb25zdHJ1Y3RvcihhbGdvcml0aG0pe1xuICAgICAgICB0aGlzLmFsZ29yaXRobSA9IGFsZ29yaXRobTtcbiAgICAgICAgdGhpcy5zb3J0TW9kZWwgPSBuZXcgU29ydE1vZGVsKClcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxO1xuICAgICAgICBcbiAgICAgICAgdGhpcy52aXN1YWxpemVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICB0aGlzLnZpc3VhbGl6ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wbGFjZS12aXN1YWxpemVyX19jb250YWluZXInKTtcbiAgICB9XG5cblxuICAgIGNyZWF0ZSgpeyBcbiAgICAgICAgY29uc3QgYXJyYXlCYXJDb250YWluZXIgPSB0aGlzLiNjcmVhdGVBcnJheUJhcnNDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy4jY3JlYXRlU2V0dGluZ3MoYXJyYXlCYXJDb250YWluZXIpO1xuICAgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy52aXN1YWxpemVyQ29udGFpbmVyO1xuICAgIH07XG5cbiAgICAjY3JlYXRlQXJyYXlCYXJzQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBhcnJheUJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcnJheUJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhcnJheS1iYXJfX2NvbnRhaW5lcicpO1xuXG4gICAgICAgIHRoaXMuI2NyZWF0ZUFycmF5QmFycyhhcnJheUJhckNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy52aXN1YWxpemVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFycmF5QmFyQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gYXJyYXlCYXJDb250YWluZXI7XG4gICAgfTtcblxuICAgICNjcmVhdGVBcnJheUJhcnMoYXJyYXlCYXJDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc29ydE1vZGVsLmdldERhdGEoKTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJyYXlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFycmF5QmFyLmRhdGFzZXQuYXJyYXlCYXJJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgYXJyYXlCYXIuc3R5bGUuaGVpZ2h0ID0gYCR7MTAwICogZWxlbWVudCAvIE1hdGgubWF4KC4uLmRhdGEpfSVgO1xuICAgICAgICAgICAgYXJyYXlCYXIuc3R5bGUud2lkdGggPSBgJHsxMDAgLyBkYXRhLmxlbmd0aH0lYDtcbiAgICAgICAgICAgIGFycmF5QmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGFycmF5QmFyKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI2NyZWF0ZVNldHRpbmdzKGFycmF5QmFyQ29udGFpbmVyKXtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wbGFjZS12aXN1YWxpemVyX19zZXR0aW5ncycpO1xuXG4gICAgICAgIC8vIFNodWZmbGUgQnV0dG9uXG4gICAgICAgIGxldCBzZXR0aW5nc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0dGluZ3NXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FycmF5LWJhcnNfX3NldHRpbmctd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBzaHVmZmxlQnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzaHVmZmxlQnV0dG9uTGFiZWwuaHRtbEZvciA9ICdpbnBsYWNlLXZpc3VhbGl6ZXJfX3NodWZmbGUtYnRuJztcbiAgICAgICAgc2h1ZmZsZUJ1dHRvbkxhYmVsLnRleHRDb250ZW50ID0gJ1NodWZmbGUnO1xuICAgICAgICBjb25zdCBzdWZmbGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VmZmxlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lucGxhY2UtdmlzdWFsaXplcl9fc2h1ZmZsZS1idG4nKTtcbiAgICAgICAgc3VmZmxlQnV0dG9uLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPSdpY29uJyBzcmM9JHtzaHVmZmxlSWNvbn0gYWx0PSdTaHVmZmxlIEFycmF5JyAvPmA7XG4gICAgICAgIHN1ZmZsZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge3RoaXMuI3NodWZmbGVBcnJheUJhcnMoYXJyYXlCYXJDb250YWluZXIpfVxuICAgICAgICBzZXR0aW5nc1dyYXBwZXIuYXBwZW5kKHN1ZmZsZUJ1dHRvbiwgc2h1ZmZsZUJ1dHRvbkxhYmVsKTtcbiAgICAgICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NXcmFwcGVyKTtcblxuICAgICAgICAvLyBTaXplIFNsaWRlclxuICAgICAgICBzZXR0aW5nc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0dGluZ3NXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FycmF5LWJhcnNfX3NldHRpbmctd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBzaXplU2xpZGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzaXplU2xpZGVyTGFiZWwuaHRtbEZvciA9ICdhcnJheS1iYXJzX19zaXplLXNsaWRlcic7XG4gICAgICAgIHNpemVTbGlkZXJMYWJlbC50ZXh0Q29udGVudCA9ICdBcnJheSBTaXplOiAnO1xuICAgICAgICBjb25zdCBzaXplU2xpZGVyVmFsdWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzaXplU2xpZGVyVmFsdWVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dGhpcy5zb3J0TW9kZWwuZ2V0RGF0YSgpLmxlbmd0aH1gO1xuICAgICAgICBzaXplU2xpZGVyTGFiZWwuYXBwZW5kQ2hpbGQoc2l6ZVNsaWRlclZhbHVlRGlzcGxheSk7XG4gICAgICAgIGNvbnN0IHNpemVTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzaXplU2xpZGVyLmlkID0gJ2FycmF5LWJhcnNfX3NpemUtc2xpZGVyJztcbiAgICAgICAgc2l6ZVNsaWRlci50eXBlID0gJ3JhbmdlJztcbiAgICAgICAgc2l6ZVNsaWRlci5taW4gPSAnNTAnO1xuICAgICAgICBzaXplU2xpZGVyLm1heCA9ICcxMDAwJztcbiAgICAgICAgc2l6ZVNsaWRlci52YWx1ZSA9IHRoaXMuc29ydE1vZGVsLmdldERhdGEoKS5sZW5ndGg7XG4gICAgICAgIHNpemVTbGlkZXIub25pbnB1dCA9IChlKSA9PiB7dGhpcy4jcmVzaXplQXJyYXlCYXJzKGUsIGFycmF5QmFyQ29udGFpbmVyLCBzaXplU2xpZGVyVmFsdWVEaXNwbGF5KX07XG4gICAgICAgIHNpemVTbGlkZXIub25jaGFuZ2UgPSAoZSkgPT4ge3NpemVTbGlkZXJWYWx1ZURpc3BsYXkuaW5uZXJIVE1MID0gZS50YXJnZXQudmFsdWV9O1xuICAgICAgICBzZXR0aW5nc1dyYXBwZXIuYXBwZW5kKHNpemVTbGlkZXIsIHNpemVTbGlkZXJMYWJlbCk7XG4gICAgICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzV3JhcHBlcik7XG5cbiAgICAgICAgLy8gU3BlZWQgU2xpZGVyXG4gICAgICAgIHNldHRpbmdzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZXR0aW5nc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYXJyYXktYmFyc19fc2V0dGluZy13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IGRlbGF5U2xpZGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkZWxheVNsaWRlckxhYmVsLmh0bWxGb3IgPSAnYXJyYXktYmFyc19fZGVsYXktc2xpZGVyJztcbiAgICAgICAgZGVsYXlTbGlkZXJMYWJlbC50ZXh0Q29udGVudCA9ICdTcGVlZDogJztcbiAgICAgICAgY29uc3QgZGVsYXlTbGlkZXJWYWx1ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGRlbGF5U2xpZGVyVmFsdWVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7dGhpcy5zcGVlZH1gO1xuICAgICAgICBkZWxheVNsaWRlckxhYmVsLmFwcGVuZENoaWxkKGRlbGF5U2xpZGVyVmFsdWVEaXNwbGF5KTtcbiAgICAgICAgY29uc3QgZGVsYXlTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkZWxheVNsaWRlci5pZCA9ICdhcnJheS1iYXJzX19kZWxheS1zbGlkZXInO1xuICAgICAgICBkZWxheVNsaWRlci50eXBlID0gJ3JhbmdlJztcbiAgICAgICAgZGVsYXlTbGlkZXIubWluID0gJzEnO1xuICAgICAgICBkZWxheVNsaWRlci5tYXggPSAnMTAnO1xuICAgICAgICBkZWxheVNsaWRlci52YWx1ZSA9IDE7XG4gICAgICAgIGRlbGF5U2xpZGVyLm9uaW5wdXQgPSAoZSkgPT4ge2RlbGF5U2xpZGVyVmFsdWVEaXNwbGF5LmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlOyB0aGlzLnNwZWVkPWUudGFyZ2V0LnZhbHVlfTtcbiAgICAgICAgZGVsYXlTbGlkZXIub25jaGFuZ2UgPSAoZSkgPT4ge2RlbGF5U2xpZGVyVmFsdWVEaXNwbGF5LmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlfTtcbiAgICAgICAgc2V0dGluZ3NXcmFwcGVyLmFwcGVuZChkZWxheVNsaWRlciAsIGRlbGF5U2xpZGVyTGFiZWwpO1xuICAgICAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc1dyYXBwZXIpO1xuXG4gICAgICAgIC8vIFN0YXJ0IFN0b3AgQnV0dG9uXG4gICAgICAgIHNldHRpbmdzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZXR0aW5nc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYXJyYXktYmFyc19fc2V0dGluZy13cmFwcGVyJyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0U3RvcEJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc3RhcnRTdG9wQnV0dG9uTGFiZWwuaHRtbEZvciA9ICAnYXJyYXktYmFyc19fc3RhcnQtc3RvcC1idG4nO1xuICAgICAgICBzdGFydFN0b3BCdXR0b25MYWJlbC50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgICAgIGNvbnN0IGZpcnN0SWNvbiA9IHtzcmM6IHBsYXlJY29uLCBhbHQ6J1N0YXJ0IFNvcnQnfTtcbiAgICAgICAgY29uc3Qgc2Vjb25kSWNvbiA9IHtzcmM6IHN0b3BJY29uLCBhbHQ6J1N0b3AgU29ydCd9O1xuICAgICAgICBjb25zdCBzdGFydFN0b3BCdXR0b24gPSBuZXcgVG9nZ2xlQnV0dG9uKFxuICAgICAgICAgICAgJ2FycmF5LWJhcnNfX3N0YXJ0LXN0b3AtYnRuJyxcbiAgICAgICAgICAgIGZpcnN0SWNvbixcbiAgICAgICAgICAgIHNlY29uZEljb24sXG4gICAgICAgICAgICAoKSA9PiB7dGhpcy4jaGFuZGxlU3RhcnRTdG9wQnV0dG9uKHN0YXJ0U3RvcEJ1dHRvbkxhYmVsKTt9XG4gICAgICAgICkuY3JlYXRlKCk7XG4gICAgICAgIHNldHRpbmdzV3JhcHBlci5hcHBlbmQoc3RhcnRTdG9wQnV0dG9uLCBzdGFydFN0b3BCdXR0b25MYWJlbCk7XG4gICAgICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzV3JhcHBlcik7XG5cbiAgICAgICAgdGhpcy52aXN1YWxpemVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgYXN5bmMgI2hhbmRsZVN0YXJ0U3RvcEJ1dHRvbihzdGFydFN0b3BCdXR0b25MYWJlbCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucnVubmluZyl7XG4gICAgICAgICAgICB0aGlzLiNlbmFibGVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGFydFN0b3BCdXR0b25MYWJlbC50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgICAgIH1lbHNleyAgXG4gICAgICAgICAgICB0aGlzLiNkaXNhYmxlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICBzdGFydFN0b3BCdXR0b25MYWJlbC50ZXh0Q29udGVudCA9ICdTdG9wJztcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuI3N0YXJ0U29ydCgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNvcnRNb2RlbC5hbmltYXRpb24ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyYXktYmFyc19fc3RhcnQtc3RvcC1idG4nKS5jbGljaygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBhc3luYyAjc3RhcnRTb3J0KCl7XG4gICAgICAgIGlmICghdGhpcy5zb3J0TW9kZWwuYW5pbWF0aW9uLmxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLnNvcnRNb2RlbC5zb3J0KHRoaXMuYWxnb3JpdGhtKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aGlsZSAodGhpcy5zb3J0TW9kZWwuYW5pbWF0aW9uLmxlbmd0aCAmJiB0aGlzLnJ1bm5pbmcgPT09IHRydWUpe1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHN3YXBJZHhzID0gdGhpcy5zb3J0TW9kZWwuYW5pbWF0aW9uLnNoaWZ0KCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiNzd2FwQXJyYXlCYXJzKC4uLnN3YXBJZHhzKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMTApO1xuXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgICNkaXNhYmxlU2V0dGluZ3MoKXtcbiAgICAgICAgY29uc3Qgc2h1ZmZsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnBsYWNlLXZpc3VhbGl6ZXJfX3NodWZmbGUtYnRuJyk7XG4gICAgICAgIHNodWZmbGVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBzaHVmZmxlQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgY29uc3Qgc2l6ZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJheS1iYXJzX19zaXplLXNsaWRlcicpXG4gICAgICAgIHNpemVTbGlkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBzaXplU2xpZGVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICB9O1xuXG4gICAgI2VuYWJsZVNldHRpbmdzKCl7XG4gICAgICAgIGNvbnN0IHNodWZmbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wbGFjZS12aXN1YWxpemVyX19zaHVmZmxlLWJ0bicpO1xuICAgICAgICBzaHVmZmxlQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHNodWZmbGVCdG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xuICAgICAgICBjb25zdCBzaXplU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FycmF5LWJhcnNfX3NpemUtc2xpZGVyJylcbiAgICAgICAgc2l6ZVNsaWRlci5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBzaXplU2xpZGVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyAjc3dhcEFycmF5QmFycyhpLGope1xuICAgICAgICBsZXQgZGVsYXkgPSAoMTAwMCkvKDEwKip0aGlzLnNwZWVkKTtcblxuICAgICAgICBjb25zdCBiYXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYXJyYXktYmFyLWluZGV4PVwiJHtpfVwiXWApO1xuICAgICAgICBjb25zdCBiYXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtYXJyYXktYmFyLWluZGV4PVwiJHtqfVwiXWApO1xuXG4gICAgICAgIGxldCBpbml0QmFja0dyb3VuZCA9IGJhcjEuc3R5bGUuYmFja2dyb3VuZDtcbiAgICAgICAgXG4gICAgICAgIGJhcjEuc3R5bGUuYmFja2dyb3VuZCA9ICdyZWQnO1xuICAgICAgICBiYXIyLnN0eWxlLmJhY2tncm91bmQgPSAnZ3JlZW55ZWxsb3cnXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoZGVsYXkvMTApO1xuXG4gICAgICAgIGxldCB0ZW1wID0gYmFyMS5zdHlsZS5oZWlnaHQ7XG4gICAgICAgIGJhcjEuc3R5bGUuaGVpZ2h0ID0gYmFyMi5zdHlsZS5oZWlnaHQ7XG4gICAgICAgIGJhcjIuc3R5bGUuaGVpZ2h0ID0gdGVtcDtcblxuICAgICAgICBiYXIxLnN0eWxlLmJhY2tncm91bmQgPSAnZ3JlZW55ZWxsb3cnO1xuICAgICAgICBiYXIyLnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcbiAgICAgICAgYXdhaXQgdGhpcy5zbGVlcChkZWxheS8xMCk7XG4gICAgICAgIGJhcjEuc3R5bGUuYmFja2dyb3VuZCA9IGluaXRCYWNrR3JvdW5kO1xuICAgICAgICBiYXIyLnN0eWxlLmJhY2tncm91bmQgPSBpbml0QmFja0dyb3VuZDtcbiAgICAgICAgXG4gICAgfTtcblxuICAgICBcbiAgICAjcmVzaXplQXJyYXlCYXJzKGUsIGFycmF5QmFyQ29udGFpbmVyLCBzaXplU2xpZGVyVmFsdWVEaXNwbGF5KXtcbiAgICAgICAgdGhpcy5zb3J0TW9kZWwuc2V0X3NpemUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBzaXplU2xpZGVyVmFsdWVEaXNwbGF5LmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBhcnJheUJhckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGhpcy4jY3JlYXRlQXJyYXlCYXJzKGFycmF5QmFyQ29udGFpbmVyKVxuICAgIDt9XG5cbiAgICAjc2h1ZmZsZUFycmF5QmFycyhhcnJheUJhckNvbnRhaW5lcil7XG4gICAgICAgIHRoaXMuc29ydE1vZGVsLnNodWZmbGUoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc29ydE1vZGVsLmdldERhdGEoKTtcbiAgICAgICAgY29uc3QgYXJyYXlCYXJzID0gYXJyYXlCYXJDb250YWluZXIuY2hpbGRyZW5cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPTA7IGk8YXJyYXlCYXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5QmFyID0gYXJyYXlCYXJzW2ldO1xuICAgICAgICAgICAgYXJyYXlCYXIuc3R5bGUuaGVpZ2h0ID0gYCR7MTAwICogIGRhdGFbYXJyYXlCYXIuZGF0YXNldC5hcnJheUJhckluZGV4XS8gTWF0aC5tYXgoLi4uZGF0YSl9JWBcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgc2xlZXAobXMpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluUGxhY2VWaXN1YWxpemVyOyIsImltcG9ydCB7IGluUGxhY2VOYXZMaW5rcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL25hdmlnYXRvbi1kYXRhXCI7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvY2xvc2UtaWNvbi5zdmdcIjtcbmltcG9ydCAnLi9uYXZiYXIuY3NzJztcblxuLyoqXG4gKiBOYXZiYXIgY2xhc3MgaXMgdXNlZCB0byBjcmVhdGUgYW5kIG1hbmFnZSB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gKi9cbmNsYXNzIE5hdmJhciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYW4gZW1wdHkgbmF2YmFyIGVsZW1lbnQgd2l0aCBhIGNvbnRhaW5lciBmb3IgYSBsaXN0IG9mIGxpbmtzLlxuICAgICovICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICB0aGlzLm5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyX19saXN0Jyk7XG4gICAgICAgIHRoaXMubmF2YmFyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIG5hdmJhciBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbGxzIG90aGVyIGludGVybmFsIG1ldGhvZHMgdG8gY29uc3RydWN0IHRoZSBuYXZiYXIgd2l0aCBhbGwgaXRzIGNvbnRlbnRzLlxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gTmF2YmFyIEVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgdGhpcy4jY3JlYXRDbG9zZUNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLiNjcmVhdGVIb21lTGluaygpO1xuICAgICAgICB0aGlzLiNjcmVhdGVTZXBhcmF0b3IoKTtcbiAgICAgICAgdGhpcy4jY3JlYXRlU2VjdGlvbkxpbmtzKCdJbi1QbGFjZSBBbGdvcml0aG1zJywgaW5QbGFjZU5hdkxpbmtzKTtcbiAgICAgICAgdGhpcy4jY3JlYXRlU2VwYXJhdG9yKCk7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdmJhcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGxpc3QgaXRlbSBlbGVtZW50LCBhIHRpdGxlIGVsZW1lbnQsIGFuZCBhIGxpbmsgZWxlbWVudCBmb3IgdGhlIGhvbWUgcGFnZS4gXG4gICAgICogSXQgYXBwZW5kcyB0aGUgbGluayB0byB0aGUgdGl0bGUgZWxlbWVudCwgdGhlIHRpdGxlIGVsZW1lbnQgdG8gdGhlIGxpc3QgaXRlbSBlbGVtZW50IFxuICAgICAqIGFuZCB0aGUgbGlzdCBpdGVtIGVsZW1lbnQgdG8gdGhlIG5hdmJhci5cbiAgICAgKi9cbiAgICAjY3JlYXRlSG9tZUxpbmsoKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fc3VidGl0bGUnKTtcbiAgICAgICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICAvLyBMaW5rIHRvIEhvbWUgUGFnZVxuICAgICAgICBob21lTGluay5ocmVmID0gJyMvJztcbiAgICAgICAgaG9tZUxpbmsub25jbGljayA9IChlKSA9PiB7dGhpcy4jaGFuZGxlTmF2aWdhdGlvbkNsaWNrKGUpfTtcbiAgICAgICAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2YmFyX19saW5rJywgJ25hdmJhcl9faG9tZS1saW5rJywgJ2FjdGl2ZScpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uYXZiYXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGxpc3QgaXRlbSBlbGVtZW50IGFuZCBhIHNwYW4gZWxlbWVudCB0byBhY3QgYXMgYSBzZXBhcmF0b3IuIFxuICAgICAqIEl0IGFwcGVuZHMgdGhlIHNwYW4gZWxlbWVudCB0byB0aGUgbGlzdCBpdGVtIGVsZW1lbnQsIGFuZCB0aGUgbGlzdCBpdGVtIHRvIHRoZSBuYXZiYXIuXG4gICAgICovXG4gICAgI2NyZWF0ZVNlcGFyYXRvcigpe1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAvLyBzcGFuIGVsZW1lbnQgdG8gZHJhdyBhIHZlcnRpY2FsIHNlcGFyYXRvciBsaW5lXG4gICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc2VwYXJhdG9yLmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fc2VwYXJhdG9yJyk7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG4gICAgICAgIHRoaXMubmF2YmFyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZChsaXN0SXRlbSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZWN0aW9uIG9mIGxpbmtzIHdpdGhpbiB0aGUgTmF2YmFyLlxuICAgICAqIEl0IHRha2VzIGluIGEgdGl0bGUgYW5kIGFuIGFycmF5IG9mIGxpbmtzIGFzIHBhcmFtZXRlcnMuXG4gICAgICogSXQgY3JlYXRlcyBhIG1haW4gbGlzdCBpdGVtLCBhIHRpdGxlIGVsZW1lbnQgYW5kIGEgc3VibGlzdCBlbGVtZW50LlxuICAgICAqIEl0IHRoZW4gaXRlcmF0ZXMgdGhyb3VnaCB0aGUgbGlua3MgYXJyYXksIGNyZWF0aW5nIGEgbGlzdCBpdGVtIGFuZCBhIGxpbmsgZWxlbWVudCBmb3IgZWFjaC5cbiAgICAgKiBUaGUgbGluayBlbGVtZW50J3MgdGV4dCBjb250ZW50IGlzIHNldCB0byB0aGUgbmFtZSBvZiB0aGUgbGluaywgdGhlIGhyZWYgaXMgc2V0IHRvIHRoZSB1cmwgb2YgdGhlIGxpbmsuXG4gICAgICogVGhlIG9uY2xpY2sgZXZlbnQgaXMgc2V0IHRvIGNhbGwgdGhlIGhhbmRsZU5hdmlnYXRpb25DbGljayBtZXRob2QuXG4gICAgICogVGhlIGxpc3QgaXRlbSBhbmQgbGluayBlbGVtZW50IGFyZSB0aGVuIGFwcGVuZGVkIHRvIHRoZSBzdWJsaXN0LlxuICAgICAqIFRoZSB0aXRsZSBlbGVtZW50LCBzdWJsaXN0IGVsZW1lbnQgYW5kIHRoZSBtYWluIGxpc3QgaXRlbSBhcmUgdGhlbiBhcHBlbmRlZCB0byB0aGUgTmF2YmFyLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgc2VjdGlvbiBvZiBsaW5rc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGxpbmtzIC0gQW4gYXJyYXkgb2YgbGluayBvYmplY3RzIGNvbnRhaW5pbmcgYSBuYW1lIGFuZCB1cmwgcHJvcGVydHlcbiAgICAgKi9cbiAgICAjY3JlYXRlU2VjdGlvbkxpbmtzKHRpdGxlLCBsaW5rcyl7XG4gICAgICAgIGNvbnN0IG1haW5MaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fc3VidGl0bGUnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpbmtMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbGlua0xpc3QuY2xhc3NMaXN0LmFkZCgnbmF2YmFyX19zdWJsaXN0Jyk7XG5cbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fbGlzdC1pdGVtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGlua0VsZW1lbnQudGV4dENvbnRlbnQgPSBsaW5rLm5hbWU7XG4gICAgICAgICAgICBsaW5rRWxlbWVudC5ocmVmID0gbGluay51cmw7XG4gICAgICAgICAgICBsaW5rRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2xpbmsnKTtcbiAgICAgICAgICAgIGxpbmtFbGVtZW50Lm9uY2xpY2sgPSAoZSkgPT4ge3RoaXMuI2hhbmRsZU5hdmlnYXRpb25DbGljayhlKTt9O1xuICAgICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xuXG4gICAgICAgICAgICBsaW5rTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1haW5MaXN0SXRlbS5hcHBlbmQodGl0bGVFbGVtZW50LCBsaW5rTGlzdClcbiAgICAgICAgdGhpcy5uYXZiYXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kKG1haW5MaXN0SXRlbSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9uIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLlxuICAgICAqIEl0IHJlbW92ZXMgdGhlIGFjdGl2ZSBjbGFzcyBmcm9tIHRoZSBjdXJyZW50IGFjdGl2ZSBsaW5rIGFuZCBhZGRzIGl0IHRvIHRoZSBjbGlja2VkIGxpbmsuXG4gICAgICogSXQgYWxzbyBjbG9zZXMgdGhlIG5hdmJhciBpZiBpdCBpcyBvcGVuLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgLSB0aGUgY2xpY2sgZXZlbnQgb2JqZWN0XG4gICAgKi9cbiAgICAjaGFuZGxlTmF2aWdhdGlvbkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5uYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19saW5rLmFjdGl2ZScpO1xuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGFjdGl2ZUxpbmspe1xuICAgICAgICAgICAgYWN0aXZlTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGNsb3NlIGNvbnRhaW5lciBmb3IgdGhlIG5hdmJhciwgaW5jbHVkaW5nIHRoZSBjbG9zZSBidXR0b24gYW5kIGljb24uXG4gICAgICovXG4gICAgI2NyZWF0Q2xvc2VDb250YWluZXIoKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2Nsb3NlLWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2Nsb3NlLWJ0bicpO1xuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHt0aGlzLiNoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrKCl9O1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY2xvc2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdpY29uJyAsJ25hdmJhcl9fY2xvc2UtaWNvbicpO1xuICAgICAgICBjbG9zZUltYWdlLnNyYyA9IGNsb3NlSWNvbjtcbiAgICAgICAgY2xvc2VJbWFnZS5hbHQgPSAnQ2xvc2UgTmF2YmFyJztcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUltYWdlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy5uYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGNsb3NlIGJ1dHRvbi5cbiAgICAgKiBJdCBhbHNvIGNsb3NlcyB0aGUgbmF2YmFyIGlmIGl0IGlzIG9wZW4gYnkgcmVtb3ZpbmcgdGhlIGFjdGl2ZSBjbGFzcy5cbiAgICAqL1xuICAgICNoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLm5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJpbXBvcnQgJy4vdG9nZ2xlX2J1dHRvbi5jc3MnO1xuXG5cbi8qKlxuVGhlIFRvZ2dsZUJ1dHRvbiBjbGFzcyBjcmVhdGVzIGEgdG9nZ2xlIGJ1dHRvbiBlbGVtZW50IHdpdGggdHdvIGljb25zIHRoYXQgY2FuIGJlIHRvZ2dsZWQgYmV0d2Vlbi5cbiovXG5jbGFzcyBUb2dnbGVCdXR0b24ge1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtICBDU1MgY2xhc3NuYW1lIHRvIGJlIGFkZGVkIHRvIHRoZSB0b2dnbGUgYnV0dG9uIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZpcnN0SWNvbiAtIFRoZSBmaXJzdCBpY29uIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uLiBTaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggc3JjIGFuZCBhbHQgZmllbGRzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWNvbmRJY29uIC0gVGhlIHNlY29uZCBpY29uIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uLiBTaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggc3JjIGFuZCBhbHQgZmllbGRzLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ2xpY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIGZpcnN0SWNvbiwgc2Vjb25kSWNvbiwgb25DbGljayl7XG4gICAgICAgIHRoaXMuZmlyc3RJY29uID0gZmlyc3RJY29uO1xuICAgICAgICB0aGlzLnNlY29uZEljb24gPSBzZWNvbmRJY29uO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnRuJywgY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrRXZlbnQgPSBvbkNsaWNrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBidXR0b24gZWxlbWVudCB3aXRoIHRoZSBpY29ucyBhbmQgb25jbGljayBldmVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGNyZWF0ZWQgYnV0dG9uIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpY29uc1xuICAgICAgICB0aGlzLiNjcmVhdGVJY29ucygpO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGJ1dHRvblxuICAgICAgICB0aGlzLmJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge3RoaXMuI2hhbmRsZUNsaWNrRXZlbnQoKX07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uXG4gICAgfTtcblxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhbmQgYXBwZW5kcyB0aGUgcHJpbWFyeSBhbmQgc2Vjb25kYXJ5IGljb25zIHRvIHRoZSBidXR0b24gZWxlbWVudC5cbiAgICAqIFRoZSBwcmltYXJ5IGljb24gaXMgZGlzcGxheWVkIGJ5IGRlZmF1bHQsIHdoaWxlIHRoZSBzZWNvbmRhcnkgaWNvbiBpcyBoaWRkZW4uXG4gICAgKi9cbiAgICAjY3JlYXRlSWNvbnMoKXtcbiAgICAgICAgY29uc3QgcHJpbWFyeUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcHJpbWFyeUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBwcmltYXJ5SWNvbi5zcmMgPSB0aGlzLmZpcnN0SWNvbi5zcmM7XG4gICAgICAgIHByaW1hcnlJY29uLmFsdCA9IHRoaXMuZmlyc3RJY29uLmFsdDtcbiAgICAgICAgdGhpcy5idXR0b24uYXBwZW5kQ2hpbGQocHJpbWFyeUljb24pO1xuXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc2Vjb25kYXJ5SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJywgJ2hpZGRlbicpO1xuICAgICAgICBzZWNvbmRhcnlJY29uLnNyYyA9IHRoaXMuc2Vjb25kSWNvbi5zcmM7XG4gICAgICAgIHNlY29uZGFyeUljb24uYWx0ID0gdGhpcy5zZWNvbmRJY29uLmFsdDtcbiAgICAgICAgdGhpcy5idXR0b24uYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5SWNvbik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0d28gaWNvbnMgYW5kIGNhbGxzIHRoZSBvbkNsaWNrRXZlbnQgZnVuY3Rpb25cbiAgICAgKi9cbiAgICAjaGFuZGxlQ2xpY2tFdmVudCgpIHtcbiAgICAgICAgdGhpcy5idXR0b24uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMub25DbGlja0V2ZW50KCk7XG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQnV0dG9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJzsgXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJzsgXG5cbi8qKlxuICogVGhlIGVudHJ5IHBvaW50IG9mIHRoZSBhcHBsaWNhdGlvblxuICogY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgQXBwIGNsYXNzIGFuZCBydW5zIGl0XG4gKi9cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKVxuYXBwLnJ1bigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==