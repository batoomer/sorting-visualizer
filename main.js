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
        // Store the current page to clean up resources
        this.currentPage = null;
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
            
            // Free all resources of the current page
            if (this.currentPage){
                this.currentPage.destroy();
            }

            // Get the new page
            this.currentPage = this.createNewPage(path);
            
            // Get the main element from the DOM
            const main = document.querySelector('.page');
            
            // Replace the main element with the new page
            main.replaceWith(this.currentPage.create());
            
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
            case '/': return new _views_pages_home_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"]();
            case '/bubble-sort': return new _views_pages_sort_inplace_InPlaceSortPage__WEBPACK_IMPORTED_MODULE_2__["default"](_data_sorting_algorithm_data__WEBPACK_IMPORTED_MODULE_0__.bubbleSortInfo);
            case '/selection-sort': return new _views_pages_sort_inplace_InPlaceSortPage__WEBPACK_IMPORTED_MODULE_2__["default"](_data_sorting_algorithm_data__WEBPACK_IMPORTED_MODULE_0__.selectionSortInfo);
            case '/insertion-sort': return new _views_pages_sort_inplace_InPlaceSortPage__WEBPACK_IMPORTED_MODULE_2__["default"](_data_sorting_algorithm_data__WEBPACK_IMPORTED_MODULE_0__.insertionSortInfo);
            case '/quick-sort': return new _views_pages_sort_inplace_InPlaceSortPage__WEBPACK_IMPORTED_MODULE_2__["default"](_data_sorting_algorithm_data__WEBPACK_IMPORTED_MODULE_0__.quickSortInfo);
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


    destroy(){
        
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
        const visualizerEle = this.visualizer.create();
        visualizerEle.classList.add('sort-page__visualizer-container');
        this.pageContainer.appendChild(visualizerEle);
    };

    destroy(){
        this.visualizer.cancelPromises();
    }
    
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
        this.promises = [];
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
        let promise = new Promise((resolve, reject) => setTimeout(resolve, ms))
        this.promises.push(promise);
        return promise;
    };

    cancelPromises(){
        this.running = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS2tEO0FBQ007QUFDUjtBQUNROztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4REFBVTtBQUNuQztBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGlFQUFhO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsaUVBQWE7QUFDdEM7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw2REFBUztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDOzs7O0FBSUE7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDckdDOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQzdERTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0EsaUJBQWlCLDJDQUEyQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFdBQVc7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLHlCQUF5QjtBQUNoRyxzQ0FBc0Msd0JBQXdCO0FBQzlELHFDQUFxQywwQkFBMEI7QUFDL0QsMkRBQTJELGdDQUFnQztBQUMzRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SnlFO0FBQzdEOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBUTtBQUN0QztBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrRkFBaUI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDakMyQjs7QUFFbkM7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRSxVQUFVO0FBQ2hEO0FBQ0EsNENBQTRDLG9EQUFVLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzhCO0FBQ0U7QUFDSTs7QUFFbkM7OztBQUd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBLDRCQUE0QixLQUFLLGlEQUFPO0FBQ3hDLDZCQUE2QixLQUFLLGtEQUFRO0FBQzFDLGdDQUFnQyxtRUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0NBQWdDOztBQUVwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9INkI7QUFDTztBQUNKO0FBQ0M7QUFDSztBQUN6Qjs7O0FBR2xDOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIseURBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsa0NBQWtDO0FBQ3pFLHNDQUFzQyxrQkFBa0I7QUFDeEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxxREFBVyxFQUFFO0FBQ3ZFLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGdDQUFnQztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLG9EQUFvRDtBQUMxRix1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsS0FBSyxrREFBUTtBQUN4Qyw0QkFBNEIsS0FBSyxtREFBUTtBQUN6QyxvQ0FBb0MsbUVBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzRUFBc0UsRUFBRTtBQUN4RSxzRUFBc0UsRUFBRTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQSx1Q0FBdUMsK0RBQStEO0FBQ3RHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM08rQjtBQUNSO0FBQ2pDOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsaUVBQWU7QUFDdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQSx5QkFBeUIsbURBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMzSmM7OztBQUc3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmNEI7QUFDSjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQUc7QUFDbkIsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzRlNDIiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL3ZpZXdzL3BhZ2VzL2hvbWUvaG9tZS1wYWdlLmNzcz80MjYzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy92aWV3cy9wYWdlcy9zb3J0L3NvcnQtcGFnZS5jc3M/M2Y3NiIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jc3M/YTUzMyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/MjU4OSIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvaW5wbGFjZV92aXN1YWxpemVyL2lucGxhY2UtdmlzdWFsaXplci5jc3M/MjI2MCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jc3M/OWZmZCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvdG9vZ2xlX2J1dHRvbi90b2dnbGVfYnV0dG9uLmNzcz8yNGQ4Iiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL1JvdXRlci5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvYWxnb3JpdGhtcy9idWJibGVTb3J0LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy9hbGdvcml0aG1zL2luc2VydGlvblNvcnQuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL2FsZ29yaXRobXMvcXVpY2tTb3J0LmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy9hbGdvcml0aG1zL3NlbGVjdGlvblNvcnQuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL2RhdGEvbmF2aWdhdG9uLWRhdGEuanMiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL2RhdGEvc29ydGluZy1hbGdvcml0aG0tZGF0YS5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvbW9kZWxzL1NvcnRNb2RlbC5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3MvcGFnZXMvaG9tZS9Ib21lUGFnZS5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3MvcGFnZXMvc29ydC9Tb3J0UGFnZS5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3MvcGFnZXMvc29ydC9pbnBsYWNlL0luUGxhY2VTb3J0UGFnZS5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvLi9zcmMvdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvaW5wbGFjZV92aXN1YWxpemVyL0luUGxhY2VWaXN1YWxpemVyLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy92aWV3cy9zaGFyZWRfY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIiwid2VicGFjazovL3NvcnRpbmctdmlzdWFsaXplci8uL3NyYy92aWV3cy9zaGFyZWRfY29tcG9uZW50cy90b29nbGVfYnV0dG9uL1RvZ2dsZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zb3J0aW5nLXZpc3VhbGl6ZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc29ydGluZy12aXN1YWxpemVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBGb290ZXIgZnJvbSBcIi4vdmlld3Mvc2hhcmVkX2NvbXBvbmVudHMvZm9vdGVyL0Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi92aWV3cy9zaGFyZWRfY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL3ZpZXdzL3NoYXJlZF9jb21wb25lbnRzL25hdmJhci9OYXZiYXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vUm91dGVyXCI7XG5cblxuLyoqXG4gKiBBcHAgY2xhc3MgaXMgdGhlIGVudHJ5IHBvaW50IG9mIHRoZSBhcHBsaWNhdGlvblxuICogaXQgY3JlYXRlcyB0aGUgaGVhZGVyLCBuYXZiYXIsIG1haW4gYW5kIGZvb3RlciBjb21wb25lbnRzXG4gKiBhbmQgYXBwZW5kcyB0aGVtIHRvIHRoZSBib2R5IGVsZW1lbnQuXG4gKiBpdCBhbHNvIGNyZWF0ZXMgYW5kIGluaXRpYWxpemVzIHRoZSByb3V0ZXJcbiAqL1xuY2xhc3MgQXBwe1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBBcHAgY2xhc3MuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XG4gICAgICAgIHRoaXMubmF2YmFyID0gbmV3IE5hdmJhcigpO1xuICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIHRoaXMubWFpbi5jbGFzc0xpc3QuYWRkKCdwYWdlJyk7XG4gICAgICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcigpO1xuICAgICAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuICAgICAgICB0aGlzLiNhZGRHbG9iYWxTdGF0ZXMoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyB0aGUgY3JlYXRlZCBjb21wb25lbnRzIHRvIHRoZSBib2R5XG4gICAgICogYW5kIGNhbGxzIHRoZSBpbml0IG1ldGhvZCBvZiB0aGUgcm91dGVyXG4gICAgICovXG4gICAgcnVuKCl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKFxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY3JlYXRlKCksXG4gICAgICAgICAgICB0aGlzLm5hdmJhci5jcmVhdGUoKSxcbiAgICAgICAgICAgIHRoaXMubWFpbixcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLmNyZWF0ZSgpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucm91dGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyB0aGUgdGhlbWUgc3RhdGUgb24gYmVmb3JldW5sb2FkIGV2ZW50XG4gICAgICogYW5kIGFwcGxpZXMgdGhlIHRoZW1lIHN0YXRlIG9uIHBhZ2UgbG9hZFxuICAgICAqL1xuICAgICNhZGRHbG9iYWxTdGF0ZXMoKXtcbiAgICAgICAgLy8gU2F2ZSB0aGUgdGhlbWUgc3RhdGUgb24gYmVmb3JldW5sb2FkIGV2ZW50XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFyay10aGVtZVwiKSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFwcGx5IHRoZSB0aGVtZSBzdGF0ZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcbiAgICAgICAgICAgIGlmICh0aGVtZSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmstdGhlbWVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay10aGVtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgeyBidWJibGVTb3J0SW5mbywgaW5zZXJ0aW9uU29ydEluZm8sIHF1aWNrU29ydEluZm8sIHNlbGVjdGlvblNvcnRJbmZvIH0gZnJvbSBcIi4vZGF0YS9zb3J0aW5nLWFsZ29yaXRobS1kYXRhXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vdmlld3MvcGFnZXMvaG9tZS9Ib21lUGFnZVwiO1xuaW1wb3J0IEluUGxhY2VTb3J0UGFnZSBmcm9tIFwiLi92aWV3cy9wYWdlcy9zb3J0L2lucGxhY2UvSW5QbGFjZVNvcnRQYWdlXCI7XG5cbi8qKlxuICogSGFuZGxlcyB0aGUgY2xpZW50LXNpZGUgcm91dGluZyBmb3IgdGhlIGFwcGxpY2F0aW9uXG4gKiBieSBoYW5kbGluZyB0aGUgaGFzaGNoYW5nZSBldmVudCBhbmQgY3JlYXRpbmcgbmV3IHBhZ2VzXG4gKiBiYXNlZCBvbiB0aGUgY3VycmVudCBwYXRoXG4gKi9cbmNsYXNzIFJvdXRlcntcbiAgICBcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUm91dGVyIGNsYXNzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgcGF0aCB0byBwcmV2ZW50IGNyZWF0aW5nIG5ldyBwYWdlcyBmb3IgdGhlIHNhbWUgcGF0aFxuICAgICAgICB0aGlzLmN1cnJlbnRQYXRoID0gbnVsbDtcbiAgICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgcGFnZSB0byBjbGVhbiB1cCByZXNvdXJjZXNcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBSb3V0ZXIgYnkgYWRkaW5nIHRoZSBoYXNoY2hhbmdlIGV2ZW50IGxpc3RlbmVyXG4gICAgICogYW5kIGhhbmRsaW5nIHRoZSBpbml0aWFsIHJvdXRlIGNoYW5nZVxuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgY2hhbmdlcyB0byB0aGUgaGFzaCBmcmFnbWVudCBvZiB0aGUgVVJMXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVSb3V0ZUNoYW5nZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhbmRsZVJvdXRlQ2hhbmdlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHJvdXRlIGNoYW5nZSBieSBleHRyYWN0aW5nIHRoZSBwYXRoIGZyb20gdGhlXG4gICAgICogd2luZG93LmxvY2F0aW9uLmhhc2gsIGNyZWF0aW5nIGEgbmV3IHBhZ2UgYmFzZWQgb24gdGhlIHBhdGgsXG4gICAgICogYW5kIHJlcGxhY2luZyB0aGUgY3VycmVudCBtYWluIGVsZW1lbnQgd2l0aCB0aGUgbmV3IHBhZ2VcbiAgICAgKi9cbiAgICBoYW5kbGVSb3V0ZUNoYW5nZSgpe1xuICAgICAgICAvLyBJZiB0aGUgaGFzaCBmcmFnbWVudCBpcyBlbXB0eSBvciBqdXN0IFwiI1wiLCBkZWZhdWx0IHRvIHRoZSBob21lIHBhZ2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSAnJyB8fCB3aW5kb3cubG9jYXRpb24uaGFzaCA9PT0gJyMnKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcvJztcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgcGF0aCBmcm9tIHRoZSBoYXNoIGZyYWdtZW50XG4gICAgICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKTtcblxuICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBwYXRoIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXcgcGF0aFxuICAgICAgICBpZiAocGF0aCAhPT0gdGhpcy5jdXJyZW50UGF0aCl7XG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgbmV3IHBhdGggYXMgdGhlIGN1cnJlbnQgcGF0aFxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGF0aCA9IHBhdGg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEZyZWUgYWxsIHJlc291cmNlcyBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgbmV3IHBhZ2VcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB0aGlzLmNyZWF0ZU5ld1BhZ2UocGF0aCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEdldCB0aGUgbWFpbiBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgICAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIG1haW4gZWxlbWVudCB3aXRoIHRoZSBuZXcgcGFnZVxuICAgICAgICAgICAgbWFpbi5yZXBsYWNlV2l0aCh0aGlzLmN1cnJlbnRQYWdlLmNyZWF0ZSgpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfTsgICBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IHBhZ2UgYmFzZWQgb24gdGhlIHBhdGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBwYXRoIHRvIGNyZWF0ZSBhIG5ldyBwYWdlIGZvclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaGUgbmV3IHBhZ2VcbiAgICAgKi9cbiAgICBjcmVhdGVOZXdQYWdlKHBhdGgpIHtcbiAgICAgICAgc3dpdGNoKHBhdGgpIHtcbiAgICAgICAgICAgIGNhc2UgJy8nOiByZXR1cm4gbmV3IEhvbWVQYWdlKCk7XG4gICAgICAgICAgICBjYXNlICcvYnViYmxlLXNvcnQnOiByZXR1cm4gbmV3IEluUGxhY2VTb3J0UGFnZShidWJibGVTb3J0SW5mbyk7XG4gICAgICAgICAgICBjYXNlICcvc2VsZWN0aW9uLXNvcnQnOiByZXR1cm4gbmV3IEluUGxhY2VTb3J0UGFnZShzZWxlY3Rpb25Tb3J0SW5mbyk7XG4gICAgICAgICAgICBjYXNlICcvaW5zZXJ0aW9uLXNvcnQnOiByZXR1cm4gbmV3IEluUGxhY2VTb3J0UGFnZShpbnNlcnRpb25Tb3J0SW5mbyk7XG4gICAgICAgICAgICBjYXNlICcvcXVpY2stc29ydCc6IHJldHVybiBuZXcgSW5QbGFjZVNvcnRQYWdlKHF1aWNrU29ydEluZm8pO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWJibGVTb3J0KGRhdGEpe1xuICAgIC8vIFZhcmlhYmxlIHRvIHN0b3JlIHRoZSBhbmltYXRpb25zXG4gICAgbGV0IGFuaW1hdGlvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPCBkYXRhLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGlmIChkYXRhW2pdID4gZGF0YVtqKzFdKXtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zLnB1c2goW2osaisxXSk7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBkYXRhW2pdO1xuICAgICAgICAgICAgICAgIGRhdGFbal0gPSBkYXRhW2orMV07XG4gICAgICAgICAgICAgICAgZGF0YVtqKzFdID0gdGVtcDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gYW5pbWF0aW9ucztcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zZXJ0aW9uU29ydChkYXRhKXtcbiAgICAvLyBWYXJpYWJsZSB0byBzdG9yZSB0aGUgYW5pbWF0aW9uc1xuICAgIGxldCBhbmltYXRpb25zID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaTxkYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IGogPSBpO1xuICAgICAgICB3aGlsZSAoaj4wKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGRhdGFbai0xXSA+PSBkYXRhW2pdKXtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zLnB1c2goW2osai0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBkYXRhW2pdO1xuICAgICAgICAgICAgICAgIGRhdGFbal0gPSBkYXRhW2otMV07XG4gICAgICAgICAgICAgICAgZGF0YVtqLTFdID0gdGVtcDtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgai0tO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYW5pbWF0aW9ucztcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVpY2tTb3J0KGRhdGEpe1xuICAgIGxldCBhbmltYXRpb24gPSBbXTtcblxuICAgIF9fcXVpY2tTb3J0KGRhdGEsIDAsIGRhdGEubGVuZ3RoIC0gMSwgYW5pbWF0aW9uKVxuXG4gICAgY29uc29sZS5sb2coYW5pbWF0aW9uKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmV0dXJuIGFuaW1hdGlvblxufVxuXG5jb25zdCBfX3F1aWNrU29ydCA9IChkYXRhLCBsZWZ0LCByaWdodCwgYW5pbWF0aW9uKSA9PiB7XG4gICAgaWYgKGxlZnQgPCByaWdodCl7XG4gICAgICAgIGxldCBwID0gX19ob2FyZV9wYXJ0aXRpb24oZGF0YSwgbGVmdCwgcmlnaHQsIGFuaW1hdGlvbilcbiAgICAgICAgX19xdWlja1NvcnQoZGF0YSwgbGVmdCwgcCwgYW5pbWF0aW9uKTtcbiAgICAgICAgX19xdWlja1NvcnQoZGF0YSwgcCsxLCByaWdodCwgYW5pbWF0aW9uKTtcbiAgICB9O1xufTtcblxuXG5cbmNvbnN0IF9faG9hcmVfcGFydGl0aW9uID0gKGRhdGEsIGxlZnQsIHJpZ2h0LCBhbmltYXRpb24pID0+IHtcbiAgICBsZXQgcF9pZHggPSBNYXRoLmZsb29yKChyaWdodCtsZWZ0KS8yKTtcbiAgICBsZXQgcGl2b3QgPSBkYXRhW3BfaWR4XTtcblxuICAgIGxldCBsX2lkeCA9IGxlZnQgLSAxO1xuICAgIGxldCByX2lkeCA9IHJpZ2h0ICsgMTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIFxuICAgICAgICBsX2lkeCsrO1xuICAgICAgICB3aGlsZSAoZGF0YVtsX2lkeF0gPCBwaXZvdCl7XG4gICAgICAgICAgICBsX2lkeCsrO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJfaWR4LS07XG4gICAgICAgIHdoaWxlKGRhdGFbcl9pZHhdID4gcGl2b3Qpe1xuICAgICAgICAgICAgcl9pZHgtLTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobF9pZHggPj0gcl9pZHgpe1xuICAgICAgICAgICAgcmV0dXJuIHJfaWR4XG4gICAgICAgIH07XG5cbiAgICAgICAgYW5pbWF0aW9uLnB1c2goW2xfaWR4LCByX2lkeF0pO1xuICAgICAgICBsZXQgdGVtcCA9IGRhdGFbbF9pZHhdO1xuICAgICAgICBkYXRhW2xfaWR4XSA9IGRhdGFbcl9pZHhdO1xuICAgICAgICBkYXRhW3JfaWR4XSA9IHRlbXA7XG4gICAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KGRhdGEpe1xuICAgIGxldCBhbmltYXRpb24gPSBbXTtcblxuICAgIGZvciAobGV0IGk9MDsgaTwgZGF0YS5sZW5ndGgtMTsgaSsrKXtcbiAgICAgICAgXG4gICAgICAgIGxldCBtaW5JbmRleCA9IGk7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBqPWkrMTsgajwgZGF0YS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBpZiAoZGF0YVtqXSA8IGRhdGFbbWluSW5kZXhdKXtcbiAgICAgICAgICAgICAgICBtaW5JbmRleCA9IGo7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChtaW5JbmRleCAhPSBpKXtcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wdXNoKFtpLCBtaW5JbmRleF0pO1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBkYXRhW2ldO1xuICAgICAgICAgICAgZGF0YVtpXSA9IGRhdGFbbWluSW5kZXhdO1xuICAgICAgICAgICAgZGF0YVttaW5JbmRleF0gPSB0ZW1wO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gYW5pbWF0aW9uXG59IiwiXG4vKipcbiAqIEFuIGFycmF5IG9mIG9iamVjdHMsIGNvbnRhaW5pbmcgZGF0YSBmb3IgbmF2aWdhdGlvbiBsaW5rcyBvZiBpbi1wbGFjZSBzb3J0aW5nIGFsZ29yaXRobS5cbiAqL1xuZXhwb3J0IGNvbnN0IGluUGxhY2VOYXZMaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdCdWJibGUgU29ydCcsXG4gICAgICAgIHVybDogJyMvYnViYmxlLXNvcnQnXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgbmFtZTogJ1NlbGVjdGlvbiBTb3J0JyxcbiAgICAgICAgdXJsOiAnIy9zZWxlY3Rpb24tc29ydCdcbiAgICB9LFxuXG4gICAge1xuICAgICAgICBuYW1lOiAnSW5zZXJ0aW9uIFNvcnQnLFxuICAgICAgICB1cmw6ICcjL2luc2VydGlvbi1zb3J0J1xuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIG5hbWU6ICdRdWljayBTb3J0JyxcbiAgICAgICAgdXJsOiAnIy9xdWljay1zb3J0J1xuICAgIH0sXG5dOyIsIi8qKlxuICogT2JqZWN0cyBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXNwZWN0aXZlIHNvcnRpbmcgYWxnb3JpdGhtcy4gRWFjaCBvYmplY3QgY29udGFpbnMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogXG4gKiB0aXRsZTogYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0aXRsZS9uYW1lIG9mIHRoZSBzb3J0aW5nIGFsZ29yaXRobS5cbiAqIGRlc2NyaXB0aW9uOiBhbiBhcnJheSBvZiBzdHJpbmdzIHByb3ZpZGluZyBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBzb3J0aW5nIGFsZ29yaXRobS5cbiAqIGNvbXBsZXhpdHk6IGFuIG9iamVjdCBwcm92aWRpbmcgdGhlIHRpbWUgYW5kIHNwYWNlIGNvbXBsZXhpdGllcyBvZiB0aGUgc29ydGluZyBhbGdvcml0aG0uXG4gKiBwc2V1ZG9jb2RlOiBhIHN0cmluZyBjb250YWluaW5nIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHNvcnRpbmcgYWxnb3JpdGhtIGluIHBzZXVkb2NvZGUgZm9ybWF0LlxuICovXG5cbmV4cG9ydCBjb25zdCBidWJibGVTb3J0SW5mbyA9IHtcbiAgICB0aXRsZTogJ0J1YmJsZSBTb3J0JyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICBgQnViYmxlIHNvcnQgaXMgYSBiYXNpYyBzb3J0aW5nIG1ldGhvZCB0aGF0IHJlcGVhdGVkbHkgZ29lcyB0aHJvdWdoIHRoZSBsaXN0LCBjb21wYXJpbmcgYWRqYWNlbnQgaXRlbXMgYW5kIHN3aXRjaGluZyB0aGVtIGlmIFxuICAgICAgICB0aGV5IGFyZSBub3QgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIFRoaXMgcHJvY2VzcyBpcyByZXBlYXRlZCB1bnRpbCBubyBtb3JlIHN3YXBzIGFyZSByZXF1aXJlZCwgaW5kaWNhdGluZyB0aGUgbGlzdCBpcyBzb3J0ZWQuIFxuICAgICAgICBUaGUgbmFtZSBcImJ1YmJsZSBzb3J0XCIgY29tZXMgZnJvbSB0aGUgd2F5IHNtYWxsZXIgb3IgbGFyZ2VyIGVsZW1lbnRzIFwicmlzZVwiIHRvIHRoZSB0b3Agb2YgdGhlIGxpc3QuYCxcbiAgICAgICAgYEJ1YmJsZSBzb3J0IGhhcyBhIHRpbWUgY29tcGxleGl0eSBvZiBPKG5eMiksIHdoaWNoIG1ha2VzIGl0IGxlc3MgZWZmaWNpZW50IGZvciBsYXJnZXIgbGlzdHMuIEhvd2V2ZXIsIGl0IGlzIGVhc3kgdG8gdW5kZXJzdGFuZCBcbiAgICAgICAgYW5kIGltcGxlbWVudCwgbWFraW5nIGl0IGEgcG9wdWxhciBjaG9pY2UgZm9yIGJlZ2lubmVycyBsZWFybmluZyBhYm91dCBzb3J0aW5nIGFsZ29yaXRobXMuIERlc3BpdGUgaXRzIGluZWZmaWNpZW5jeSwgXG4gICAgICAgIGJ1YmJsZSBzb3J0IGNhbiBiZSB1c2VmdWwgaW4gY2VydGFpbiBjYXNlcyB3aGVyZSB0aGUgbGlzdCBpcyBzbWFsbCBvciB0aGUgZGF0YSBpcyBhbHJlYWR5IHBhcnRpYWxseSBzb3J0ZWQuYCxcbiAgICAgICAgYEJ1YmJsZSBzb3J0IGlzIG5vdCB0aGUgb25seSBzb3J0aW5nIGFsZ29yaXRobSB0aGF0IHVzZXMgdGhlIFwiY29tcGFyZSBhbmQgc3dhcFwiIGFwcHJvYWNoLiBUaGVyZSBhcmUgb3RoZXIgYWxnb3JpdGhtcyBsaWtlIEluc2VydGlvbiBcbiAgICAgICAgc29ydCBhbmQgU2VsZWN0aW9uIHNvcnQgd2hpY2ggYWxzbyB1c2UgdGhpcyBhcHByb2FjaCBidXQgaGF2ZSBkaWZmZXJlbnQgd2F5cyBvZiBzZWxlY3RpbmcgdGhlIGVsZW1lbnQgdG8gY29tcGFyZSBhbmQgc3dhcC5gXG4gICAgXSxcblxuICAgIGNvbXBsZXhpdHk6IHtcbiAgICAgICAgYmVzdFRpbWU6IGDOqShuKWAsXG4gICAgICAgIGF2Z1RpbWU6IGDOmChuPHN1cD4yPC9zdXA+KWAsXG4gICAgICAgIHdvcnN0VGltZTogYE8objxzdXA+Mjwvc3VwPilgLFxuICAgICAgICBzcGFjZUNvbXBsZXhpdHk6ICdPKDEpJyxcbiAgICB9LFxuXG4gICAgcHNldWRvY29kZTogYDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnByb2NlZHVyZTwvc3Bhbj4gYnViYmxlU29ydCggQSA6IGxpc3Qgb2Ygc29ydGFibGUgaXRlbXMgKVxuICAgIG4gPSAgPHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPmxlbmd0aCg8L3NwYW4+QTxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj4pPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnJlcGVhdDwvc3Bhbj4gXG4gICAgICAgIHN3YXBwZWQgPSA8c3BhbiBjbGFzcz1cInZhbHVlXCI+ZmFsc2U8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmZvcjwvc3Bhbj4gaSA9IDxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPiA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj50bzwvc3Bhbj4gbi08c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj4gaW5jbHVzaXZlIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmRvPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50XCI+LyogaWYgdGhpcyBwYWlyIGlzIG91dCBvZiBvcmRlciAqLzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmlmPC9zcGFuPiBBW2ktPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+XSA+IEFbaV0gPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+dGhlbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnRcIj4vKiBzd2FwIHRoZW0gYW5kIHJlbWVtYmVyIHNvbWV0aGluZyBjaGFuZ2VkICovPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj5zd2FwKDwvc3Bhbj4gQVtpLTxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPl0sIEFbaV0gPHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPik8L3NwYW4+XG4gICAgICAgICAgICAgICAgc3dhcHBlZCA9IDxzcGFuIGNsYXNzPVwidmFsdWVcIj50cnVlPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIGlmPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgZm9yPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnVudGlsIG5vdDwvc3Bhbj4gc3dhcHBlZFxuPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIHByb2NlZHVyZTwvc3Bhbj5gLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGlvblNvcnRJbmZvID0ge1xuICAgIHRpdGxlOiAnU2VsZWN0aW9uIFNvcnQnLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgIGBTZWxlY3Rpb24gc29ydCBpcyBhIHNpbXBsZSBzb3J0aW5nIGFsZ29yaXRobSB0aGF0IHJlcGVhdGVkbHkgc2VsZWN0cyB0aGUgc21hbGxlc3QgZWxlbWVudCBmcm9tIHRoZSB1bnNvcnRlZCBwb3J0aW9uIG9mIHRoZSBsaXN0IGFuZCBwbGFjZXMgXG4gICAgICAgIGl0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHNvcnRlZCBwb3J0aW9uIG9mIHRoZSBsaXN0LiBUaGlzIHByb2Nlc3MgaXMgcmVwZWF0ZWQgdW50aWwgYWxsIGVsZW1lbnRzIGhhdmUgYmVlbiBtb3ZlZCB0byB0aGUgc29ydGVkIHBvcnRpb24gb2YgXG4gICAgICAgIHRoZSBsaXN0LiBTZWxlY3Rpb24gc29ydCBpcyBhIGNvbXBhcmlzb24tYmFzZWQgc29ydGluZyBhbGdvcml0aG0uYCxcbiAgICAgICAgYFNlbGVjdGlvbiBzb3J0IGhhcyBhIHRpbWUgY29tcGxleGl0eSBvZiBPKG5eMikgd2hpY2ggbWFrZXMgaXQgbGVzcyBlZmZpY2llbnQgZm9yIGxhcmdlciBsaXN0cy4gSXQgcGVyZm9ybXMgd2VsbCBvbiBzbWFsbCBsaXN0cyBvciBkYXRhIHNldHMgXG4gICAgICAgIGFuZCBpcyBvZnRlbiB1c2VkIGFzIGEgc2ltcGxlIHNvcnRpbmcgYWxnb3JpdGhtIGZvciBlZHVjYXRpb25hbCBwdXJwb3Nlcy5gLFxuICAgICAgICBgSG93ZXZlciwgaXQgaGFzIGl0cyBvd24gYWR2YW50YWdlcyBvdmVyIG90aGVyIHNvcnRpbmcgYWxnb3JpdGhtcyBsaWtlIGl0J3MgZWFzeSB0byB1bmRlcnN0YW5kIGFuZCBpbXBsZW1lbnQsIGl0J3MgaW4tcGxhY2Ugc29ydGluZyBhbGdvcml0aG0sXG4gICAgICAgIHdoaWNoIG1lYW5zIGl0IGRvZXNuJ3QgcmVxdWlyZSBhbnkgYWRkaXRpb25hbCBtZW1vcnkgc3BhY2UuIEl0J3MgYWxzbyB1c2VmdWwgaW4gY2VydGFpbiBjYXNlcyB3aGVyZSB0aGUgZGF0YSBpcyBhbHJlYWR5IHBhcnRpYWxseSBzb3J0ZWQuYFxuICAgIF0sXG5cbiAgICBjb21wbGV4aXR5OiB7XG4gICAgICAgIGJlc3RUaW1lOiBgzqkobjxzdXA+Mjwvc3VwPilgLFxuICAgICAgICBhdmdUaW1lOiBgzpgobjxzdXA+Mjwvc3VwPilgLFxuICAgICAgICB3b3JzdFRpbWU6IGBPKG48c3VwPjI8L3N1cD4pYCxcbiAgICAgICAgc3BhY2VDb21wbGV4aXR5OiAnTygxKScsXG4gICAgfSxcblxuICAgIHBzZXVkb2NvZGU6IGA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5wcm9jZWR1cmU8L3NwYW4+IHNlbGVjdGlvblNvcnQoIEEgOiBsaXN0IG9mIHNvcnRhYmxlIGl0ZW1zIClcbiAgICBuID0gIDxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj5sZW5ndGgoPC9zcGFuPkE8c3BhbiBjbGFzcz1cImZ1bmN0aW9uXCI+KTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5mb3I8L3NwYW4+IGkgPSA8c3BhbiBjbGFzcz1cInZhbHVlXCI+MDwvc3Bhbj4gIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnRvPC9zcGFuPiBuIC0gPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+XG4gICAgICAgIG1pbkluZGV4ID0gaVxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5mb3I8L3NwYW4+IGogPSBpICsgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+ICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj50bzwvc3Bhbj4gbiAtIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+aWY8L3NwYW4+IEFbal0gPCBBW21pbkluZGV4XVxuICAgICAgICAgICAgICAgIG1pbkluZGV4ID0galxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIGlmPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgZm9yPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5zd2FwPC9zcGFuPiBBW2ldIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPndpdGg8L3NwYW4+IEFbbWluSW5kZXhdXG4gICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIGZvcjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCBwcm9jZWR1cmU8L3NwYW4+YFxufTtcblxuZXhwb3J0IGNvbnN0IGluc2VydGlvblNvcnRJbmZvID0ge1xuICAgIHRpdGxlOiAnSW5zZXJ0aW9uIFNvcnQnLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgIGBJbnNlcnRpb24gc29ydCBpcyBhIHNpbXBsZSBzb3J0aW5nIGFsZ29yaXRobSB0aGF0IGJ1aWxkcyB0aGUgZmluYWwgc29ydGVkIGxpc3Qgb25lIGl0ZW0gYXQgYSB0aW1lLiBJdCBzdGFydHMgd2l0aCBhbiBlbXB0eSBzb3J0ZWQgbGlzdCBcbiAgICAgICAgYW5kIHJlcGVhdGVkbHkgdGFrZXMgdGhlIG5leHQgdW5zb3J0ZWQgaXRlbSBhbmQgaW5zZXJ0cyBpdCBpbnRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uIHdpdGhpbiB0aGUgc29ydGVkIGxpc3QuIFRoaXMgcHJvY2VzcyBpcyByZXBlYXRlZCB1bnRpbCBcbiAgICAgICAgYWxsIGl0ZW1zIGhhdmUgYmVlbiBpbnNlcnRlZCBpbnRvIHRoZSBzb3J0ZWQgbGlzdC4gSXQncyBzaW1pbGFyIHRvIGhvdyB3ZSBzb3J0IGEgZGVjayBvZiBjYXJkcyBieSBwaWNraW5nIG9uZSBjYXJkIGF0IGEgdGltZSBhbmQgaW5zZXJ0aW5nIGl0IFxuICAgICAgICBpbnRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGluIHRoZSBkZWNrLmAsXG5cbiAgICAgICAgYEluc2VydGlvbiBzb3J0IGlzIGEgY29tcGFyaXNvbi1iYXNlZCBzb3J0aW5nIGFsZ29yaXRobSBhbmQgaGFzIGEgdGltZSBjb21wbGV4aXR5IG9mIE8obl4yKSB3aGljaCBtYWtlcyBpdCBsZXNzIGVmZmljaWVudCBmb3IgbGFyZ2VyIGxpc3RzLiBcbiAgICAgICAgSG93ZXZlciwgaXQgcGVyZm9ybXMgd2VsbCBvbiBzbWFsbCBsaXN0cyBvciBkYXRhIHNldHMgYW5kIGlzIGVmZmljaWVudCBmb3IgZGF0YSBzZXRzIHRoYXQgYXJlIGFscmVhZHkgcGFydGlhbGx5IHNvcnRlZCBvciBoYXZlIHNvbWUgZWxlbWVudHMgXG4gICAgICAgIHNvcnRlZCBpbiByZXZlcnNlIG9yZGVyLiBJdCdzIGFsc28gYW4gaW4tcGxhY2Ugc29ydGluZyBhbGdvcml0aG0sIHdoaWNoIG1lYW5zIGl0IGRvZXNuJ3QgcmVxdWlyZSBhbnkgYWRkaXRpb25hbCBtZW1vcnkgc3BhY2UuYFxuICAgIF0sXG5cbiAgICBjb21wbGV4aXR5OiB7XG4gICAgICAgIGJlc3RUaW1lOiBgzqkobilgLFxuICAgICAgICBhdmdUaW1lOiBgzpgobjxzdXA+Mjwvc3VwPilgLFxuICAgICAgICB3b3JzdFRpbWU6IGBPKG48c3VwPjI8L3N1cD4pYCxcbiAgICAgICAgc3BhY2VDb21wbGV4aXR5OiAnTygxKScsXG4gICAgfSxcblxuICAgIHBzZXVkb2NvZGU6IGA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5wcm9jZWR1cmU8L3NwYW4+IGluc2VydGlvblNvcnQoIEEgOiBsaXN0IG9mIHNvcnRhYmxlIGl0ZW1zIClcbiAgICBuID0gIDxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj5sZW5ndGgoPC9zcGFuPkE8c3BhbiBjbGFzcz1cImZ1bmN0aW9uXCI+KTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5mb3I8L3NwYW4+IGkgPSA8c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj4gIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnRvPC9zcGFuPiBuIC0gPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+XG4gICAgICAgIGogPSBpXG4gICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPndoaWxlPC9zcGFuPiBqID49IDxzcGFuIGNsYXNzPVwidmFsdWVcIj4wPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+aWY8L3NwYW4+IEFbal0gPD0gQVtqLTxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPl1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5zd2FwPC9zcGFuPiBBW2pdIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPndpdGg8L3NwYW4+IEFbai08c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj5dXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgaWY8L3NwYW4+XG4gICAgICAgICAgICBqID0gaiAtIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgd2hpbGU8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+ZW5kIGZvcjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCBwcm9jZWR1cmU8L3NwYW4+YFxufTtcblxuZXhwb3J0IGNvbnN0IHF1aWNrU29ydEluZm8gPSB7XG4gICAgdGl0bGU6ICdRdWljayBTb3J0JyxcbiAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICBgUXVpY2sgc29ydCBpcyBhIHBvcHVsYXIgYW5kIGVmZmljaWVudCBzb3J0aW5nIGFsZ29yaXRobSB0aGF0IHVzZXMgYSBkaXZpZGUtYW5kLWNvbnF1ZXIgc3RyYXRlZ3kgdG8gc29ydCBhIGdpdmVuIGRhdGEgc2V0LiBJdCBzdGFydHMgYnkgc2VsZWN0aW5nIGEgXCJwaXZvdFwiIFxuICAgICAgICBlbGVtZW50IGZyb20gdGhlIGRhdGEgc2V0LCBhbmQgcGFydGl0aW9uaW5nIHRoZSBvdGhlciBlbGVtZW50cyBpbnRvIHR3byBncm91cHM6IHRob3NlIGxlc3MgdGhhbiB0aGUgcGl2b3QgYW5kIHRob3NlIGdyZWF0ZXIgdGhhbiB0aGUgcGl2b3QuIFRoZSBwaXZvdCBpcyB0aGVuIFxuICAgICAgICBpbiBpdHMgZmluYWwgcG9zaXRpb24gaW4gdGhlIHNvcnRlZCBkYXRhIHNldC4gVGhlIHByb2Nlc3MgaXMgdGhlbiByZXBlYXRlZCByZWN1cnNpdmVseSBvbiB0aGUgdHdvIHBhcnRpdGlvbmVkIGdyb3VwcyB1bnRpbCB0aGUgZW50aXJlIGRhdGEgc2V0IGlzIHNvcnRlZC5gLFxuXG4gICAgICAgIGBPbmUgb2YgdGhlIGFkdmFudGFnZXMgb2YgcXVpY2sgc29ydCBpcyBpdHMgZWZmaWNpZW5jeSwgd2l0aCBhbiBhdmVyYWdlIHRpbWUgY29tcGxleGl0eSBvZiBPKG4gbG9nIG4pLiBBZGRpdGlvbmFsbHksIGl0IGhhcyB0aGUgYWJpbGl0eSB0byBwZXJmb3JtIHdlbGwgZXZlbiBcbiAgICAgICAgaW4gY2FzZXMgd2hlcmUgdGhlIGlucHV0IGRhdGEgaXMgYWxyZWFkeSBwYXJ0aWFsbHkgc29ydGVkIG9yIGNvbnRhaW5zIG1hbnkgZHVwbGljYXRlcy4gSG93ZXZlciwgcXVpY2sgc29ydCBhbHNvIGhhcyBzb21lIGRyYXdiYWNrcy4gT25lIHBvdGVudGlhbCBpc3N1ZSBpcyB0aGF0IFxuICAgICAgICBpdCBjYW4gaGF2ZSBhIHdvcnN0LWNhc2UgdGltZSBjb21wbGV4aXR5IG9mIE8obl4yKSBpZiB0aGUgcGl2b3QgaXMgY2hvc2VuIHBvb3JseSwgc3VjaCBhcyBhbHdheXMgc2VsZWN0aW5nIHRoZSBmaXJzdCBvciBsYXN0IGVsZW1lbnQgaW4gdGhlIHBhcnRpdGlvbi4gVG8gbWl0aWdhdGUgdGhpcywgXG4gICAgICAgIHRoZXJlIGFyZSBwaXZvdCBzZWxlY3Rpb24gc3RyYXRlZ2llcywgc3VjaCBhcyBjaG9vc2luZyB0aGUgbWVkaWFuIG9yIGEgcmFuZG9tIGVsZW1lbnQsIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW1wcm92ZSB0aGUgcGVyZm9ybWFuY2Ugb2YgdGhlIGFsZ29yaXRobWAsXG5cbiAgICAgICAgYFRoZSBIb2FyZSBwYXJ0aXRpb24gc2NoZW1lIGlzIGEgbWV0aG9kIHVzZWQgaW4gdGhlIHF1aWNrIHNvcnQgYWxnb3JpdGhtIHRvIHBhcnRpdGlvbiBhbiBhcnJheSBpbnRvIHR3byBzdWItYXJyYXlzLiBUaGUgSG9hcmUgcGFydGl0aW9uIHNjaGVtZSB1c2VzIHR3byBpbmRpY2VzLCBhIFxuICAgICAgICBsZWZ0IGluZGV4IGFuZCBhIHJpZ2h0IGluZGV4LCB0byB0cmF2ZXJzZSB0aGUgYXJyYXkgYW5kIHBhcnRpdGlvbiBpdCBiYXNlZCBvbiBhIGNob3NlbiBwaXZvdCBlbGVtZW50LiBUaGUgcGl2b3QgZWxlbWVudCBpcyB1c3VhbGx5IHRoZSBtaWRkbGUgZWxlbWVudCBvZiB0aGUgYXJyYXksIFxuICAgICAgICBidXQgaXQgY2FuIGFsc28gYmUgY2hvc2VuIHJhbmRvbWx5IG9yIHVzaW5nIG90aGVyIG1ldGhvZHMuIFRoZSBsZWZ0IGluZGV4IHN0YXJ0cyBhdCB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXkgYW5kIG1vdmVzIHRvd2FyZHMgdGhlIHJpZ2h0LCB3aGlsZSB0aGUgcmlnaHQgaW5kZXggXG4gICAgICAgIHN0YXJ0cyBhdCB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBhcnJheSBhbmQgbW92ZXMgdG93YXJkcyB0aGUgbGVmdC4gVGhlIHR3byBpbmRpY2VzIHN3YXAgZWxlbWVudHMgdGhhdCBhcmUgb24gdGhlIHdyb25nIHNpZGUgb2YgdGhlIHBpdm90IHVudGlsIHRoZXkgbWVldCBpbiB0aGUgbWlkZGxlLCBcbiAgICAgICAgYXQgd2hpY2ggcG9pbnQgdGhlIGFycmF5IGlzIHBhcnRpdGlvbmVkIGFuZCB0aGUgcGl2b3QgZWxlbWVudCBpcyBpbiBpdHMgZmluYWwgcG9zaXRpb24uYFxuICAgIF0sXG5cbiAgICBjb21wbGV4aXR5OiB7XG4gICAgICAgIGJlc3RUaW1lOiBgzqkobmxvZ24pYCxcbiAgICAgICAgYXZnVGltZTogYM6YKG5sb2duKWAsXG4gICAgICAgIHdvcnN0VGltZTogYE8objxzdXA+Mjwvc3VwPilgLFxuICAgICAgICBzcGFjZUNvbXBsZXhpdHk6ICdPKGxvZ24pJyxcbiAgICB9LFxuXG4gICAgcHNldWRvY29kZTogYDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPnByb2NlZHVyZTwvc3Bhbj4gcXVpY2tTb3J0KEEgOiBsaXN0IG9mIHNvcnRhYmxlIGl0ZW1zLCBsZWZ0IDogaW50LCByaWdodCA6IGludClcbiAgICA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj5pZjwvc3Bhbj4gbGVmdCA8IHJpZ2h0XG4gICAgICAgIHAgPSA8c3BhbiBjbGFzcz1cImZ1bmN0aW9uXCI+aG9hcmVfcGFydGl0aW9uKDwvc3Bhbj5BLCBsZWZ0LCByaWdodDxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj4pPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZ1bmN0aW9uXCI+cXVpY2tTb3J0KDwvc3Bhbj5BLCBsZWZ0LCBwPHNwYW4gY2xhc3M9XCJmdW5jdGlvblwiPik8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj5xdWlja1NvcnQoPC9zcGFuPkEsIHArPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjE8L3NwYW4+LCByaWdodDxzcGFuIGNsYXNzPVwiZnVuY3Rpb25cIj4pPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCBpZjwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCBwcm9jZWR1cmU8L3NwYW4+XG5cblxuPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+cHJvY2VkdXJlPC9zcGFuPiBob2FyZV9wYXJ0aXRpb24oQSA6IGxpc3Qgb2Ygc29ydGFibGUgaXRlbXMsIGxlZnQgOiBpbnQsIHJpZ2h0IDogaW50KVxuICAgIHBpdm90ID0gQVsobGVmdCArIHJpZ2h0KSAvIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4yPC9zcGFuPl1cbiAgICBpID0gbGVmdCAtIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPlxuICAgIGogPSByaWdodCArIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4xPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPndoaWxlPC9zcGFuPiA8c3BhbiBjbGFzcz1cInZhbHVlXCI+dHJ1ZTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+cmVwZWF0PC9zcGFuPlxuICAgICAgICAgICAgaSA9IGkgKyA8c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+dW50aWw8L3NwYW4+IEFbaV0gPj0gcGl2b3RcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+cmVwZWF0PC9zcGFuPlxuICAgICAgICAgICAgaiA9IGogLSA8c3BhbiBjbGFzcz1cInZhbHVlXCI+MTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+dW50aWw8L3NwYW4+IEFbal0gPD0gcGl2b3RcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+aWY8L3NwYW4+IGkgPj0galxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+cmV0dXJuPC9zcGFuPiBqXG4gICAgICAgIDxzcGFuIGNsYXNzPVwia2V5d29yZFwiPmVuZCBpZjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXl3b3JkXCI+c3dhcDwvc3Bhbj4gQVtpXSA8c3BhbiBjbGFzcz1cImtleXdvcmRcIj53aXRoPC9zcGFuPiBBW2pdXG48c3BhbiBjbGFzcz1cImtleXdvcmRcIj5lbmQgcHJvY2VkdXJlPC9zcGFuPmBcbn1cblxuIiwiaW1wb3J0IGJ1YmJsZVNvcnQgZnJvbSBcIi4uL2FsZ29yaXRobXMvYnViYmxlU29ydFwiO1xuaW1wb3J0IGluc2VydGlvblNvcnQgZnJvbSBcIi4uL2FsZ29yaXRobXMvaW5zZXJ0aW9uU29ydFwiO1xuaW1wb3J0IHF1aWNrU29ydCBmcm9tIFwiLi4vYWxnb3JpdGhtcy9xdWlja1NvcnRcIjtcbmltcG9ydCBzZWxlY3Rpb25Tb3J0IGZyb20gXCIuLi9hbGdvcml0aG1zL3NlbGVjdGlvblNvcnRcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBtb2RlbCBmb3Igc29ydGluZyBhbGdvcml0aG1zXG4gKi9cbmNsYXNzIFNvcnRNb2RlbHtcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2l6ZSBvZiB0aGUgZGF0YSBhcnJheSwgZ2VuZXJhdGVzIGEgcmFuZG9tIGFycmF5IG9mIGludGVnZXJzIGFuZCBjcmVhdGVzIGFuIGVtcHR5IGFycmF5IGZvciBhbmltYXRpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5zaXplID0gMTAwO1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLiNnZW5lcmF0ZVJhbmRvbUFycmF5KHRoaXMuc2l6ZSwgNSwgMip0aGlzLnNpemUpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gdGhlIGRhdGEgYXJyYXlcbiAgICAgKi9cbiAgICBnZXREYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgYSBuZXcgc2l6ZSwgY3JlYXRlcyBhIG5ldyByYW5kb20gYXJyYXkgYW5kIGNyZWF0ZXMgYSBuZXcgZW1wdHkgYW5pbWF0aW9uIGFycmF5XG4gICAgICogXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIG5ldyBzaXplIG9mIHRoZSBhcnJheVxuICAgICAqL1xuICAgIHNldF9zaXplKHZhbHVlKXtcbiAgICAgICAgdGhpcy5zaXplID0gdmFsdWU7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IFtdO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2h1ZmZsZXMgdGhlIGRhdGEgYW5kIHNldHMgdGhlIGFuaW1hdGlvbiBhcnJheSB0byBhbiBlbXB0eSBhcnJheVxuICAgICAqL1xuICAgIHNodWZmbGUoKXtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy4jZ2VuZXJhdGVSYW5kb21BcnJheSh0aGlzLnNpemUsIDEsIDIqdGhpcy5zaXplKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBbXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGFrZXMgaW4gYW4gYWxnb3JpdGhtIGFzIGEgc3RyaW5nIGFuZCB1c2VzIGEgc3dpdGNoIHN0YXRlbWVudCB0byBkZXRlcm1pbmUgd2hpY2ggc29ydGluZyBhbGdvcml0aG0gdG8gdXNlLlxuICAgICAqIEV4ZWN0dWVzIHRoZSBjaG9zZW4gYWxnb3JpdGhtIGFuZCBzdG9yZXMgdGhlIGFuaW1hdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYWxnb3JpdGhtIFRpdGxlIG9mIHRoZSBhbGdvcml0aG1cbiAgICAgKi9cbiAgICBzb3J0KGFsZ29yaXRobSl7XG4gICAgICAgIGxldCBzb3J0ZXI7XG4gICAgICAgIHN3aXRjaCAoYWxnb3JpdGhtKXtcbiAgICAgICAgICAgIGNhc2UgJ0J1YmJsZSBTb3J0Jzoge1xuICAgICAgICAgICAgICAgIHNvcnRlciA9IGJ1YmJsZVNvcnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ1NlbGVjdGlvbiBTb3J0Jzoge1xuICAgICAgICAgICAgICAgIHNvcnRlciA9IHNlbGVjdGlvblNvcnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ0luc2VydGlvbiBTb3J0Jzoge1xuICAgICAgICAgICAgICAgIHNvcnRlciA9IGluc2VydGlvblNvcnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ1F1aWNrIFNvcnQnOiB7XG4gICAgICAgICAgICAgICAgc29ydGVyID0gcXVpY2tTb3J0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgQWxnb3JpdGhtJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gc29ydGVyKHRoaXMuZGF0YSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBhcnJheSBvZiBpbnRlZ2VycyB3aXRoIGEgc3BlY2lmaWVkIGxlbmd0aCwgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZS5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIExlbmd0aCBvZiB0aGUgYXJyYXlcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWluIG1pbmltdW0gaW50ZWdlciB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggbWF4aW11bSBpbnRlZ2VyIHZhbHVlXG4gICAgICogQHJldHVybnMge0FycmF5fSBOZXcgQXJyYXkgb2YgaW50ZWdlcnNcbiAgICAgKi9cbiAgICAjZ2VuZXJhdGVSYW5kb21BcnJheShsZW5ndGgsIG1pbiwgbWF4KXtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aH0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pKTtcbiAgICB9O1xuXG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydE1vZGVsOyIsImltcG9ydCAnLi9ob21lLXBhZ2UuY3NzJztcblxuLyoqXG4gKiBIb21lUGFnZSBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIGhvbWUgcGFnZS5cbiAqL1xuY2xhc3MgSG9tZVBhZ2Uge1xuXG4gICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIG1haW4gY29udGFpbmVyIG9mIHRoZSBob21lIHBhZ2UgYW5kIGFkZCB0aGUgbmVjZXNzYXJ5IGNsYXNzZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIHRoaXMubWFpbi5jbGFzc0xpc3QuYWRkKCdwYWdlJywgJ2hvbWUtcGFnZScpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdob21lLXBhZ2VfX2NvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIH1cblxuXG4gICAgZGVzdHJveSgpe1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIGhvbWUgcGFnZSBhbmQgcmV0dXJuIHRoZSBtYWluIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBBcnJheSBCYXJzXG4gICAgICAgIHRoaXMuI2NyZWF0ZUFycmF5QmFycygpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgVGl0bGVcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gJ1NvcnRpbmcgQWxnb3JpdGhtcyA8YnI+IFZpc3VhbGl6ZXInO1xuICAgICAgICB0aGlzLm1haW4uZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLm1haW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB0aGUgYXJyYXkgYmFycyBkaXNwbGF5ZWQgb24gdGhlIGhvbWUgcGFnZVxuICAgICAqL1xuICAgICNjcmVhdGVBcnJheUJhcnMoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgYSBkaXYgZWxlbWVudCBhbmQgYWRkIHRoZSBuZWNlc3NhcnkgY2xhc3NcbiAgICAgICAgY29uc3QgYXJyYXlCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYXJyYXlCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlX19iYXJzLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIC8vIEFwcGVuZCAxMCBkaXYgZWxlbWVudHMgc2V0dGluZyB0aGVpciBoZWlnaHRzIGFuZCB3aWR0aHNcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPD0xMDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAkezUgKyBpKjkuNX0lYDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMCUnO1xuICAgICAgICAgICAgYXJyYXlCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIGFycmF5IGJhcnMgdG8gdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBtYWluIGVsZW1lbnQuXG4gICAgICAgIHRoaXMubWFpbi5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZChhcnJheUJhckNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiLCJpbXBvcnQgJy4vc29ydC1wYWdlLmNzcyc7XG5cbi8qKlxuICogVGhlIGNsYXNzIGNyZWF0ZXMgYSBzb3J0IHBhZ2Ugd2l0aCBhIGhlYWRlciwgdmlzdWFsaXplciwgYW5kIGFydGljbGUgc2VjdGlvbnMuXG4gKi9cbmNsYXNzIFNvcnRQYWdlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0wIEFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGl0bGUsIGRlc2NyaXB0aW9uLCBjb21wbGV4aXR5LCBhbmQgcHNldWRvY29kZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHt0aXRsZSwgZGVzY3JpcHRpb24sIGNvbXBsZXhpdHksIHBzZXVkb2NvZGV9KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNvbXBsZXhpdHkgPSBjb21wbGV4aXR5O1xuICAgICAgICB0aGlzLnBzZXVkb2NvZGUgPSBwc2V1ZG9jb2RlO1xuXG4gICAgICAgIHRoaXMucGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgdGhpcy5wYWdlLmNsYXNzTGlzdC5hZGQoJ3BhZ2UnLCAnc29ydC1wYWdlJyk7XG4gICAgICAgIHRoaXMucGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ3NvcnQtcGFnZV9fY29udGFpbmVyJylcbiAgICAgICAgdGhpcy5wYWdlLmFwcGVuZENoaWxkKHRoaXMucGFnZUNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHBhZ2UgYW5kIGNhbGxzIG90aGVyIG1ldGhvZHMgdG8gY3JlYXRlIHRoZSBkaWZmZXJlbnQgc2VjdGlvbnMgb2YgdGhlIHBhZ2UuXG4gICAgICogXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBtYWluXG4gICAgICovXG4gICAgY3JlYXRlICgpe1xuICAgICAgICB0aGlzLiNjcmVhdGVIZWFkZXIoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVWaXN1YWxpemVyKCk7XG4gICAgICAgIHRoaXMuI2NyZWF0ZUFydGljbGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgaGVhZGVyIHNlY3Rpb24gb2YgdGhlIHBhZ2Ugd2l0aCB0aGUgdGl0bGUgb2YgdGhlIHNvcnQgYWxnb3JpdGhtLlxuICAgICAqL1xuICAgICNjcmVhdGVIZWFkZXIoKXtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzb3J0LXBhZ2VfX2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYDxoMiBjbGFzcz0nc29ydC1wYWdlX190aXRsZSc+JHt0aGlzLnRpdGxlfTwvaDI+YDtcbiAgICAgICAgdGhpcy5wYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0IG1ldGhvZCB0aGF0IG5lZWRzIHRvIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzLlxuICAgICAqIFxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqL1xuICAgIGNyZWF0ZVZpc3VhbGl6ZXIoKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVWaXN1YWxpemVyKCkgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMnKTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGFydGljbGUgc2VjdGlvbiBvZiB0aGUgcGFnZSB3aXRoIGEgZGVzY3JpcHRpb24sIGNvbXBsZXhpdHksIGFuZCBwc2V1ZG9jb2RlIG9mIHRoZSBzb3J0IGFsZ29yaXRobS5cbiAgICAgKi9cbiAgICAjY3JlYXRlQXJ0aWNsZSgpe1xuICAgICAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtcGFnZV9fYXJ0aWNsZScpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy4jY3JlYXRlRGVzY3JpcHRvbihjb250YWluZXIpO1xuICAgICAgICB0aGlzLiNjcmVhdGVDb21wbGV4aXR5KGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuI2NyZWF0ZVBzZXVkb2NvZGUoY29udGFpbmVyKTtcblxuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgRGVzY3JpcHRpb24gc2VjdGlvbiBpbiB0aGUgYXJ0aWNsZSBzZWN0aW9uLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVlbGVtZW50fSBhcnRpY2xlIHRoZSBhcnRpY2xlIGVsZW1lbnQgdG8gYXBwcGVuZCB0by5cbiAgICAgKi9cbiAgICAjY3JlYXRlRGVzY3JpcHRvbihhcnRpY2xlKXtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuI2NyZWF0ZVBhZ2VTZWN0aW9uKCdzb3J0LXBhZ2VfX2Rlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJylcblxuICAgICAgIGZvciAoY29uc3QgaWR4IGluIHRoaXMuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb25baWR4XTtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBDb21wbGV4aXR5IHNlY3Rpb24gaW4gdGhlIGFydGljbGUgc2VjdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge0hUTUxFZWxlbWVudH0gYXJ0aWNsZSB0aGUgYXJ0aWNsZSBlbGVtZW50IHRvIGFwcHBlbmQgdG8uXG4gICAgICovXG4gICAgI2NyZWF0ZUNvbXBsZXhpdHkoYXJ0aWNsZSl7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLiNjcmVhdGVQYWdlU2VjdGlvbignc29ydC1wYWdlX19jb21wbGV4aXR5JywgJ0NvbXBsZXhpdHknKVxuXG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1RoZSBUaW1lIGFuZCBTcGFjZSBDb21sZXhpdGllcyBhcmUgc2hvd24gaW4gdGhlIHRhYmxlIGJlbG93Lic7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ3NvcnQtcGFnZV9fY29tcGxleGl0eS10YWJsZScpO1xuICAgICAgICB0YWJsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8dHI+PHRoIHJvd3NwYW49XCIzXCI+VGltZSBDb21wbGV4aXR5PC90aD48dGg+QmVzdDwvdGg+PHRkPiR7dGhpcy5jb21wbGV4aXR5LmJlc3RUaW1lfTwvdGQ+PC90cj5cbiAgICAgICAgICAgIDx0cj48dGg+QXZlcmFnZTwvdGg+PHRkPiR7dGhpcy5jb21wbGV4aXR5LmF2Z1RpbWV9PC90ZD48L3RyPlxuICAgICAgICAgICAgPHRyPjx0aD5Xb3JzdDwvdGg+IDx0ZD4ke3RoaXMuY29tcGxleGl0eS53b3JzdFRpbWV9PC90ZD48L3RyPlxuICAgICAgICAgICAgPHRyPjx0aCBjb2xzcGFuPVwiMlwiPlNwYWNlIENvbXBsZXhpdHk8L3RoPjx0ZD4ke3RoaXMuY29tcGxleGl0eS5zcGFjZUNvbXBsZXhpdHl9PC90ZD48L3RyPlxuICAgICAgICBgO1xuXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIFBzZXVkb2NvZGUgc2VjdGlvbiBpbiB0aGUgYXJ0aWNsZSBzZWN0aW9uLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7SFRNTEVlbGVtZW50fSBhcnRpY2xlIHRoZSBhcnRpY2xlIGVsZW1lbnQgdG8gYXBwcGVuZCB0by5cbiAgICAgKi9cbiAgICAjY3JlYXRlUHNldWRvY29kZShhcnRpY2xlKXtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuI2NyZWF0ZVBhZ2VTZWN0aW9uKCdzb3J0LXBhZ2VfX3BzZXVkb2NvZGUnLCAnUHNldWRvY29kZScpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdJbiBwc2V1ZG9jb2RlIHRoZSBhbGdvcml0aG0gY2FuIGJlIGV4cHJlc3NlZCBhcyBzaG93biBiZWxsb3cuJztcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gICAgICAgIGNvbnN0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgICAgICBwcmUuaW5uZXJIVE1MID0gYDxjb2RlPiR7dGhpcy5wc2V1ZG9jb2RlfTwvY29kZT5gXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocHJlKTtcblxuICAgICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIHNlY3Rpb24gZWxlbWVudCB3aXRoIGEgZ2l2ZW4gY2xhc3MgYW5kIHRpdGxlLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgQSBjbGFzcyBuYW1lIGZvciB0aGUgc2VjdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSBBIHRpdGxlIGZvciB0aGUgc2VjdGlvblxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gc2VjdGlvblxuICAgICAqL1xuICAgICNjcmVhdGVQYWdlU2VjdGlvbihjbGFzc05hbWUsIHRpdGxlKXtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0UGFnZTsiLCJpbXBvcnQgSW5QbGFjZVZpc3VhbGl6ZXIgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZF9jb21wb25lbnRzL2lucGxhY2VfdmlzdWFsaXplci9JblBsYWNlVmlzdWFsaXplclwiO1xuaW1wb3J0IFNvcnRQYWdlIGZyb20gXCIuLi9Tb3J0UGFnZVwiO1xuXG4vKipcbiAqIEluUGxhY2VTb3J0UGFnZSBjbGFzcyBpcyBhIHN1YmNsYXNzIG9mIFNvcnRQYWdlIGNsYXNzLiBJdCBpcyB1c2VkIHRvIGNyZWF0ZSBhIHBhZ2UgZm9yIGRpc3BsYXlpbmcgSW4tUGxhY2Ugc29ydGluZyBhbGdvcml0aG1zXG4gKiBAZXh0ZW5kcyBTb3J0UGFnZVxuICovXG5jbGFzcyBJblBsYWNlU29ydFBhZ2UgZXh0ZW5kcyBTb3J0UGFnZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFsZ29yaXRobURhdGEgLSBBbiBvYmplY3QgY29udGFpbmluZyBkYXRhIGFib3V0IHRoZSBhbGdvcml0aG0gXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYWxnb3JpdGhtRGF0YSl7XG4gICAgICAgIHN1cGVyKGFsZ29yaXRobURhdGEpO1xuICAgICAgICB0aGlzLnZpc3VhbGl6ZXIgPSBuZXcgSW5QbGFjZVZpc3VhbGl6ZXIoYWxnb3JpdGhtRGF0YS50aXRsZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHZpc3VhbGl6ZXIgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIHBhZ2UgY29udGFpbmVyXG4gICAgKi9cbiAgICBjcmVhdGVWaXN1YWxpemVyKCl7XG4gICAgICAgIGNvbnN0IHZpc3VhbGl6ZXJFbGUgPSB0aGlzLnZpc3VhbGl6ZXIuY3JlYXRlKCk7XG4gICAgICAgIHZpc3VhbGl6ZXJFbGUuY2xhc3NMaXN0LmFkZCgnc29ydC1wYWdlX192aXN1YWxpemVyLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodmlzdWFsaXplckVsZSk7XG4gICAgfTtcblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgdGhpcy52aXN1YWxpemVyLmNhbmNlbFByb21pc2VzKCk7XG4gICAgfVxuICAgIFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBJblBsYWNlU29ydFBhZ2U7IiwiaW1wb3J0IGdpdGh1YkxvZ28gZnJvbSAnLi4vLi4vLi4vaW1hZ2VzL2dpdGh1Yi1tYXJrLnN2Zyc7XG5cbmltcG9ydCAnLi9mb290ZXIuY3NzJztcblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIGZvb3RlciBjb21wb25lbnRcbiAqL1xuY2xhc3MgRm9vdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgeWVhclxuICAgICAgICB0aGlzLnllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBmb290ZXIgZWxlbWVudFxuICAgICAgICB0aGlzLmZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgZm9vdGVyIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXG4gICAgICogXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBGb290ZXIgRWxlbWVudFxuICAgICAqL1xuICAgIGNyZWF0ZSgpe1xuICAgICAgICAvLyBBZGQgdGhlIEhUTUwgY29udGVudCB0byB0aGUgZm9vdGVyIGVsZW1lbnRcbiAgICAgICAgdGhpcy5mb290ZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c21hbGw+Q29weXJpZ2h0ICZjb3B5OyAke3RoaXMueWVhcn0sIEJhdG91Y2hhbiBPbWVyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9iYXRvb21lclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz0ke2dpdGh1YkxvZ299IGFsdD1cIkdpdEh1YiBNYXJrXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgICByZXR1cm4gdGhpcy5mb290ZXI7XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IHN1bkljb24gZnJvbSAnLi4vLi4vLi4vaW1hZ2VzL3N1bi1pY29uLnN2Zyc7XG5pbXBvcnQgbW9vbkljb24gZnJvbSAnLi4vLi4vLi4vaW1hZ2VzL21vb24taWNvbi5zdmcnO1xuaW1wb3J0IFRvZ2dsZUJ1dHRvbiBmcm9tICcuLi90b29nbGVfYnV0dG9uL1RvZ2dsZUJ1dHRvbic7XG5cbmltcG9ydCAnLi9oZWFkZXIuY3NzJztcblxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyB0aGUgSGVhZGVyIGNvbXBvbmVudFxuICovXG5jbGFzcyBIZWFkZXIge1xuICAgIFxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIGhlYWRlciBlbGVtZW50LCBjb250YWluZXIgZWxlbWVudCBhbmQgdGhlIHJvb3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgICAgICB0aGlzLnJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIEhlYWRlciBFbGVtZW50IHdpdGggYSBjb250YWluZXIgZGl2IGNoaWxkLlxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdoZWFkZXJfX2NvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH07XG5cbiAgICBcbiAgICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgaGVhZGVyIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXG4gICAgICogXG4gICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBIZWFkZXIgRWxlbWVudFxuICAgICAqL1xuICAgICBjcmVhdGUoKXtcbiAgICAgICAgLy8gQ3JlYXRlIFRoZSBUaXRsZVxuICAgICAgICB0aGlzLiNjcmVhdGVIZWFkZXJUaXRsZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHNldHRpbmdzIGNvbnRhaW5lciBjb250YWluaW5nIHRoZSBzZXR0aW5nc1xuICAgICAgICB0aGlzLiNjcmVhdGVTZXR0aW5nc0NvbnRhaW5lcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgdGl0bGUgZWxlbWVudCBhbmQgYXBwZW5kcyBpdCB0byB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgKi9cbiAgICAjY3JlYXRlSGVhZGVyVGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX190aXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdTb3J0aW5nIFZpc3VhbGl6ZXInO1xuICAgICAgICB0aGlzLmhlYWRlci5maXJzdEVsZW1lbnRDaGlsZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHNldHRpbmdzIGNvbnRhaW5lciBhbmQgYWRkcyBpdCB0byB0aGUgaGVhZGVyIGVsZW1lbnRcbiAgICAgKiBhbmQgY3JlYXRlcyB0aGUgYnVyZ2VyIG1lbnUgYW5kIHRoZW1lIGJ1dHRvbiBpbnNpZGUgaXRcbiAgICAgKi9cbiAgICAjY3JlYXRlU2V0dGluZ3NDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2V0dGluZ3MnKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kQ2hpbGQoc2V0dGluZ3MpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBCdXJnZXIgTWVudVxuICAgICAgICB0aGlzLiNjcmVhdGVCdXJnZXJNZW51KHNldHRpbmdzKTtcblxuICAgICAgICAvLyBDcmVhdGUgVG9nZ2xlIGJ1dHRvbiBmb3IgdG9nZ2xpbmcgYmV0d2VlbiBkYXJrIGFuZCBsaWdodCB0aGVtZVxuICAgICAgICB0aGlzLiNjcmVhdGVUaGVtZUJ1dHRvbihzZXR0aW5ncyk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGVzIHRoZSB0aGVtZSB0b2dnbGUgYnV0dG9uIGFuZCBhZGRzIGl0IHRvIHRoZSBzZXR0aW5ncyBjb250YWluZXIuXG4gICAgKlxuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2V0dGluZ3MgLSBUaGUgZWxlbWVudCB0aGF0IHRoZSB0aGVtZSB0b2dnbGUgYnV0dG9uIHdpbGwgYmUgYWRkZWQgdG8uXG4gICAgKi9cbiAgICAjY3JlYXRlVGhlbWVCdXR0b24oc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgZmlyc3RJY29uID0geyBzcmM6IHN1bkljb24sIGFsdDogJ0xpZ2h0IFRoZW1lJyB9O1xuICAgICAgICBjb25zdCBzZWNvbmRJY29uID0geyBzcmM6IG1vb25JY29uLCBhbHQ6ICdEYXJrIFRoZW1lJyB9O1xuICAgICAgICBjb25zdCB0aGVtZUJ1dHRvbiA9IG5ldyBUb2dnbGVCdXR0b24oXG4gICAgICAgICAgICAnaGVhZGVyX19idG4nLFxuICAgICAgICAgICAgZmlyc3RJY29uLFxuICAgICAgICAgICAgc2Vjb25kSWNvbixcbiAgICAgICAgICAgICgpID0+IHsgdGhpcy4jaGFuZGxlVGhlbWVCdXR0b25DbGljaygpIH0pLmNyZWF0ZSgpO1xuXG4gICAgICAgIHNldHRpbmdzLmFwcGVuZENoaWxkKHRoZW1lQnV0dG9uKTtcbiAgICB9O1xuXG4gICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9uIHRoZSB0aGVtZSB0b2dnbGUgYnV0dG9uLlxuICAgICAqIFRvZ2dsZXMgdGhlIGRhcmstdGhlbWUgY2xhc3Mgb24gdGhlIHJvb3QgZWxlbWVudCB0byBzd2l0Y2ggYmV0d2VlbiB0aGVtZXMuXG4gICAgICovXG4gICAgI2hhbmRsZVRoZW1lQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay10aGVtZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJ1cmdlciBtZW51IGJ1dHRvbiBhbmQgYWRkcyBpdCB0byB0aGUgc2V0dGluZ3MgY29udGFpbmVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2V0dGluZ3MgLSBUaGUgZWxlbWVudCB0aGF0IHRoZSBidXJnZXIgbWVudSBidXR0b24gd2lsbCBiZSBhZGRlZCB0by5cbiAgICAgKi9cbiAgICAjY3JlYXRlQnVyZ2VyTWVudShzZXR0aW5ncyl7XG4gICAgICAgIC8vIENyZWF0ZSBCdXR0b25cbiAgICAgICAgY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2J0bicsICdoZWFkZXJfX2J1cmdlci1tZW51Jyk7XG4gICAgICAgIC8vIEFkZCBvbiBjbGljayBsaXN0ZW5lciB0byBvcGVuIHRoZSBuYXZiYXJcbiAgICAgICAgYnVyZ2VyQnRuLm9uY2xpY2sgPSAoKSA9PiB7dGhpcy4jaGFuZGxlQnVyZ2VyTWVudUNsaWNrKCk7fVxuXG4gICAgICAgIC8vIEFkZCB0aHJlZSBkaXZzIHRvIGNvbnN0cnVjdCB0aGUgYmFyc1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8PTI7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2J1cmdlci1iYXInKTtcbiAgICAgICAgICAgIGJ1cmdlckJ0bi5hcHBlbmRDaGlsZChiYXIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNldHRpbmdzLmFwcGVuZENoaWxkKGJ1cmdlckJ0bik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9uIHRoZSBidXJnZXIgbWVudSBidXR0b24uXG4gICAgICogVG9nZ2xlcyB0aGUgYWN0aXZlIGNsYXNzIG9uIHRoZSBuYXZiYXIgdG8gb3BlbiBpdC5cbiAgICAgKi9cbiAgICAjaGFuZGxlQnVyZ2VyTWVudUNsaWNrKCkge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBTb3J0TW9kZWwgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Tb3J0TW9kZWxcIjtcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSBcIi4uL3Rvb2dsZV9idXR0b24vVG9nZ2xlQnV0dG9uXCI7XG5pbXBvcnQgcGxheUljb24gZnJvbSAnLi4vLi4vLi4vaW1hZ2VzL3BsYXktaWNvbi5zdmcnO1xuaW1wb3J0IHN0b3BJY29uIGZyb20gJy4uLy4uLy4uL2ltYWdlcy9wYXVzZS1pY29uLnN2Zyc7XG5pbXBvcnQgc2h1ZmZsZUljb24gZnJvbSAnLi4vLi4vLi4vaW1hZ2VzL3NodWZmbGUtaWNvbi5zdmcnO1xuaW1wb3J0ICcuL2lucGxhY2UtdmlzdWFsaXplci5jc3MnO1xuXG5cbmNsYXNzIEluUGxhY2VWaXN1YWxpemVye1xuXG4gICAgY29uc3RydWN0b3IoYWxnb3JpdGhtKXtcbiAgICAgICAgdGhpcy5hbGdvcml0aG0gPSBhbGdvcml0aG07XG4gICAgICAgIHRoaXMuc29ydE1vZGVsID0gbmV3IFNvcnRNb2RlbCgpXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB0aGlzLnZpc3VhbGl6ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgICAgIHRoaXMudmlzdWFsaXplckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnBsYWNlLXZpc3VhbGl6ZXJfX2NvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnByb21pc2VzID0gW107XG4gICAgfVxuXG5cbiAgICBjcmVhdGUoKXsgXG4gICAgICAgIGNvbnN0IGFycmF5QmFyQ29udGFpbmVyID0gdGhpcy4jY3JlYXRlQXJyYXlCYXJzQ29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuI2NyZWF0ZVNldHRpbmdzKGFycmF5QmFyQ29udGFpbmVyKTtcbiAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMudmlzdWFsaXplckNvbnRhaW5lcjtcbiAgICB9O1xuXG4gICAgI2NyZWF0ZUFycmF5QmFyc0NvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgYXJyYXlCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYXJyYXlCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXJyYXktYmFyX19jb250YWluZXInKTtcblxuICAgICAgICB0aGlzLiNjcmVhdGVBcnJheUJhcnMoYXJyYXlCYXJDb250YWluZXIpO1xuXG4gICAgICAgIHRoaXMudmlzdWFsaXplckNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJheUJhckNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGFycmF5QmFyQ29udGFpbmVyO1xuICAgIH07XG5cbiAgICAjY3JlYXRlQXJyYXlCYXJzKGFycmF5QmFyQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNvcnRNb2RlbC5nZXREYXRhKCk7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFycmF5QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhcnJheUJhci5kYXRhc2V0LmFycmF5QmFySW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGFycmF5QmFyLnN0eWxlLmhlaWdodCA9IGAkezEwMCAqIGVsZW1lbnQgLyBNYXRoLm1heCguLi5kYXRhKX0lYDtcbiAgICAgICAgICAgIGFycmF5QmFyLnN0eWxlLndpZHRoID0gYCR7MTAwIC8gZGF0YS5sZW5ndGh9JWA7XG4gICAgICAgICAgICBhcnJheUJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJheUJhcik7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICNjcmVhdGVTZXR0aW5ncyhhcnJheUJhckNvbnRhaW5lcil7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucGxhY2UtdmlzdWFsaXplcl9fc2V0dGluZ3MnKTtcblxuICAgICAgICAvLyBTaHVmZmxlIEJ1dHRvblxuICAgICAgICBsZXQgc2V0dGluZ3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNldHRpbmdzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhcnJheS1iYXJzX19zZXR0aW5nLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgc2h1ZmZsZUJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc2h1ZmZsZUJ1dHRvbkxhYmVsLmh0bWxGb3IgPSAnaW5wbGFjZS12aXN1YWxpemVyX19zaHVmZmxlLWJ0bic7XG4gICAgICAgIHNodWZmbGVCdXR0b25MYWJlbC50ZXh0Q29udGVudCA9ICdTaHVmZmxlJztcbiAgICAgICAgY29uc3Qgc3VmZmxlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1ZmZsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpbnBsYWNlLXZpc3VhbGl6ZXJfX3NodWZmbGUtYnRuJyk7XG4gICAgICAgIHN1ZmZsZUJ1dHRvbi5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz0naWNvbicgc3JjPSR7c2h1ZmZsZUljb259IGFsdD0nU2h1ZmZsZSBBcnJheScgLz5gO1xuICAgICAgICBzdWZmbGVCdXR0b24ub25jbGljayA9ICgpID0+IHt0aGlzLiNzaHVmZmxlQXJyYXlCYXJzKGFycmF5QmFyQ29udGFpbmVyKX1cbiAgICAgICAgc2V0dGluZ3NXcmFwcGVyLmFwcGVuZChzdWZmbGVCdXR0b24sIHNodWZmbGVCdXR0b25MYWJlbCk7XG4gICAgICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNldHRpbmdzV3JhcHBlcik7XG5cbiAgICAgICAgLy8gU2l6ZSBTbGlkZXJcbiAgICAgICAgc2V0dGluZ3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNldHRpbmdzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhcnJheS1iYXJzX19zZXR0aW5nLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgc2l6ZVNsaWRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgc2l6ZVNsaWRlckxhYmVsLmh0bWxGb3IgPSAnYXJyYXktYmFyc19fc2l6ZS1zbGlkZXInO1xuICAgICAgICBzaXplU2xpZGVyTGFiZWwudGV4dENvbnRlbnQgPSAnQXJyYXkgU2l6ZTogJztcbiAgICAgICAgY29uc3Qgc2l6ZVNsaWRlclZhbHVlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc2l6ZVNsaWRlclZhbHVlRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3RoaXMuc29ydE1vZGVsLmdldERhdGEoKS5sZW5ndGh9YDtcbiAgICAgICAgc2l6ZVNsaWRlckxhYmVsLmFwcGVuZENoaWxkKHNpemVTbGlkZXJWYWx1ZURpc3BsYXkpO1xuICAgICAgICBjb25zdCBzaXplU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc2l6ZVNsaWRlci5pZCA9ICdhcnJheS1iYXJzX19zaXplLXNsaWRlcic7XG4gICAgICAgIHNpemVTbGlkZXIudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgIHNpemVTbGlkZXIubWluID0gJzUwJztcbiAgICAgICAgc2l6ZVNsaWRlci5tYXggPSAnMTAwMCc7XG4gICAgICAgIHNpemVTbGlkZXIudmFsdWUgPSB0aGlzLnNvcnRNb2RlbC5nZXREYXRhKCkubGVuZ3RoO1xuICAgICAgICBzaXplU2xpZGVyLm9uaW5wdXQgPSAoZSkgPT4ge3RoaXMuI3Jlc2l6ZUFycmF5QmFycyhlLCBhcnJheUJhckNvbnRhaW5lciwgc2l6ZVNsaWRlclZhbHVlRGlzcGxheSl9O1xuICAgICAgICBzaXplU2xpZGVyLm9uY2hhbmdlID0gKGUpID0+IHtzaXplU2xpZGVyVmFsdWVEaXNwbGF5LmlubmVySFRNTCA9IGUudGFyZ2V0LnZhbHVlfTtcbiAgICAgICAgc2V0dGluZ3NXcmFwcGVyLmFwcGVuZChzaXplU2xpZGVyLCBzaXplU2xpZGVyTGFiZWwpO1xuICAgICAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc1dyYXBwZXIpO1xuXG4gICAgICAgIC8vIFNwZWVkIFNsaWRlclxuICAgICAgICBzZXR0aW5nc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0dGluZ3NXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FycmF5LWJhcnNfX3NldHRpbmctd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBkZWxheVNsaWRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVsYXlTbGlkZXJMYWJlbC5odG1sRm9yID0gJ2FycmF5LWJhcnNfX2RlbGF5LXNsaWRlcic7XG4gICAgICAgIGRlbGF5U2xpZGVyTGFiZWwudGV4dENvbnRlbnQgPSAnU3BlZWQ6ICc7XG4gICAgICAgIGNvbnN0IGRlbGF5U2xpZGVyVmFsdWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBkZWxheVNsaWRlclZhbHVlRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3RoaXMuc3BlZWR9YDtcbiAgICAgICAgZGVsYXlTbGlkZXJMYWJlbC5hcHBlbmRDaGlsZChkZWxheVNsaWRlclZhbHVlRGlzcGxheSk7XG4gICAgICAgIGNvbnN0IGRlbGF5U2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGVsYXlTbGlkZXIuaWQgPSAnYXJyYXktYmFyc19fZGVsYXktc2xpZGVyJztcbiAgICAgICAgZGVsYXlTbGlkZXIudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgIGRlbGF5U2xpZGVyLm1pbiA9ICcxJztcbiAgICAgICAgZGVsYXlTbGlkZXIubWF4ID0gJzEwJztcbiAgICAgICAgZGVsYXlTbGlkZXIudmFsdWUgPSAxO1xuICAgICAgICBkZWxheVNsaWRlci5vbmlucHV0ID0gKGUpID0+IHtkZWxheVNsaWRlclZhbHVlRGlzcGxheS5pbm5lckhUTUwgPSBlLnRhcmdldC52YWx1ZTsgdGhpcy5zcGVlZD1lLnRhcmdldC52YWx1ZX07XG4gICAgICAgIGRlbGF5U2xpZGVyLm9uY2hhbmdlID0gKGUpID0+IHtkZWxheVNsaWRlclZhbHVlRGlzcGxheS5pbm5lckhUTUwgPSBlLnRhcmdldC52YWx1ZX07XG4gICAgICAgIHNldHRpbmdzV3JhcHBlci5hcHBlbmQoZGVsYXlTbGlkZXIgLCBkZWxheVNsaWRlckxhYmVsKTtcbiAgICAgICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NXcmFwcGVyKTtcblxuICAgICAgICAvLyBTdGFydCBTdG9wIEJ1dHRvblxuICAgICAgICBzZXR0aW5nc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2V0dGluZ3NXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FycmF5LWJhcnNfX3NldHRpbmctd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBzdGFydFN0b3BCdXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHN0YXJ0U3RvcEJ1dHRvbkxhYmVsLmh0bWxGb3IgPSAgJ2FycmF5LWJhcnNfX3N0YXJ0LXN0b3AtYnRuJztcbiAgICAgICAgc3RhcnRTdG9wQnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhcnQnO1xuICAgICAgICBjb25zdCBmaXJzdEljb24gPSB7c3JjOiBwbGF5SWNvbiwgYWx0OidTdGFydCBTb3J0J307XG4gICAgICAgIGNvbnN0IHNlY29uZEljb24gPSB7c3JjOiBzdG9wSWNvbiwgYWx0OidTdG9wIFNvcnQnfTtcbiAgICAgICAgY29uc3Qgc3RhcnRTdG9wQnV0dG9uID0gbmV3IFRvZ2dsZUJ1dHRvbihcbiAgICAgICAgICAgICdhcnJheS1iYXJzX19zdGFydC1zdG9wLWJ0bicsXG4gICAgICAgICAgICBmaXJzdEljb24sXG4gICAgICAgICAgICBzZWNvbmRJY29uLFxuICAgICAgICAgICAgKCkgPT4ge3RoaXMuI2hhbmRsZVN0YXJ0U3RvcEJ1dHRvbihzdGFydFN0b3BCdXR0b25MYWJlbCk7fVxuICAgICAgICApLmNyZWF0ZSgpO1xuICAgICAgICBzZXR0aW5nc1dyYXBwZXIuYXBwZW5kKHN0YXJ0U3RvcEJ1dHRvbiwgc3RhcnRTdG9wQnV0dG9uTGFiZWwpO1xuICAgICAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc1dyYXBwZXIpO1xuXG4gICAgICAgIHRoaXMudmlzdWFsaXplckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIGFzeW5jICNoYW5kbGVTdGFydFN0b3BCdXR0b24oc3RhcnRTdG9wQnV0dG9uTGFiZWwpIHtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpe1xuICAgICAgICAgICAgdGhpcy4jZW5hYmxlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgc3RhcnRTdG9wQnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhcnQnO1xuICAgICAgICB9ZWxzZXsgIFxuICAgICAgICAgICAgdGhpcy4jZGlzYWJsZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgc3RhcnRTdG9wQnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSAnU3RvcCc7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLiNzdGFydFNvcnQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zb3J0TW9kZWwuYW5pbWF0aW9uLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycmF5LWJhcnNfX3N0YXJ0LXN0b3AtYnRuJykuY2xpY2soKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgI3N0YXJ0U29ydCgpe1xuICAgICAgICBpZiAoIXRoaXMuc29ydE1vZGVsLmFuaW1hdGlvbi5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5zb3J0TW9kZWwuc29ydCh0aGlzLmFsZ29yaXRobSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuc29ydE1vZGVsLmFuaW1hdGlvbi5sZW5ndGggJiYgdGhpcy5ydW5uaW5nID09PSB0cnVlKXtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzd2FwSWR4cyA9IHRoaXMuc29ydE1vZGVsLmFuaW1hdGlvbi5zaGlmdCgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4jc3dhcEFycmF5QmFycyguLi5zd2FwSWR4cyk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDEwKTtcblxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAjZGlzYWJsZVNldHRpbmdzKCl7XG4gICAgICAgIGNvbnN0IHNodWZmbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wbGFjZS12aXN1YWxpemVyX19zaHVmZmxlLWJ0bicpO1xuICAgICAgICBzaHVmZmxlQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgc2h1ZmZsZUJ0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGNvbnN0IHNpemVTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyYXktYmFyc19fc2l6ZS1zbGlkZXInKVxuICAgICAgICBzaXplU2xpZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgc2l6ZVNsaWRlci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgfTtcblxuICAgICNlbmFibGVTZXR0aW5ncygpe1xuICAgICAgICBjb25zdCBzaHVmZmxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucGxhY2UtdmlzdWFsaXplcl9fc2h1ZmZsZS1idG4nKTtcbiAgICAgICAgc2h1ZmZsZUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBzaHVmZmxlQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgY29uc3Qgc2l6ZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcnJheS1iYXJzX19zaXplLXNsaWRlcicpXG4gICAgICAgIHNpemVTbGlkZXIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc2l6ZVNsaWRlci5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgI3N3YXBBcnJheUJhcnMoaSxqKXtcbiAgICAgICAgbGV0IGRlbGF5ID0gKDEwMDApLygxMCoqdGhpcy5zcGVlZCk7XG5cbiAgICAgICAgY29uc3QgYmFyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWFycmF5LWJhci1pbmRleD1cIiR7aX1cIl1gKTtcbiAgICAgICAgY29uc3QgYmFyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWFycmF5LWJhci1pbmRleD1cIiR7an1cIl1gKTtcblxuICAgICAgICBsZXQgaW5pdEJhY2tHcm91bmQgPSBiYXIxLnN0eWxlLmJhY2tncm91bmQ7XG4gICAgICAgIFxuICAgICAgICBiYXIxLnN0eWxlLmJhY2tncm91bmQgPSAncmVkJztcbiAgICAgICAgYmFyMi5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyZWVueWVsbG93J1xuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKGRlbGF5LzEwKTtcblxuICAgICAgICBsZXQgdGVtcCA9IGJhcjEuc3R5bGUuaGVpZ2h0O1xuICAgICAgICBiYXIxLnN0eWxlLmhlaWdodCA9IGJhcjIuc3R5bGUuaGVpZ2h0O1xuICAgICAgICBiYXIyLnN0eWxlLmhlaWdodCA9IHRlbXA7XG5cbiAgICAgICAgYmFyMS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2dyZWVueWVsbG93JztcbiAgICAgICAgYmFyMi5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JlZCc7XG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoZGVsYXkvMTApO1xuICAgICAgICBiYXIxLnN0eWxlLmJhY2tncm91bmQgPSBpbml0QmFja0dyb3VuZDtcbiAgICAgICAgYmFyMi5zdHlsZS5iYWNrZ3JvdW5kID0gaW5pdEJhY2tHcm91bmQ7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICAgXG4gICAgI3Jlc2l6ZUFycmF5QmFycyhlLCBhcnJheUJhckNvbnRhaW5lciwgc2l6ZVNsaWRlclZhbHVlRGlzcGxheSl7XG4gICAgICAgIHRoaXMuc29ydE1vZGVsLnNldF9zaXplKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgc2l6ZVNsaWRlclZhbHVlRGlzcGxheS5pbm5lckhUTUwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgYXJyYXlCYXJDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRoaXMuI2NyZWF0ZUFycmF5QmFycyhhcnJheUJhckNvbnRhaW5lcilcbiAgICA7fVxuXG4gICAgI3NodWZmbGVBcnJheUJhcnMoYXJyYXlCYXJDb250YWluZXIpe1xuICAgICAgICB0aGlzLnNvcnRNb2RlbC5zaHVmZmxlKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNvcnRNb2RlbC5nZXREYXRhKCk7XG4gICAgICAgIGNvbnN0IGFycmF5QmFycyA9IGFycmF5QmFyQ29udGFpbmVyLmNoaWxkcmVuXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0wOyBpPGFycmF5QmFycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBhcnJheUJhciA9IGFycmF5QmFyc1tpXTtcbiAgICAgICAgICAgIGFycmF5QmFyLnN0eWxlLmhlaWdodCA9IGAkezEwMCAqICBkYXRhW2FycmF5QmFyLmRhdGFzZXQuYXJyYXlCYXJJbmRleF0vIE1hdGgubWF4KC4uLmRhdGEpfSVgXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHNsZWVwKG1zKXtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbiAgICAgICAgdGhpcy5wcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9O1xuXG4gICAgY2FuY2VsUHJvbWlzZXMoKXtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluUGxhY2VWaXN1YWxpemVyOyIsImltcG9ydCB7IGluUGxhY2VOYXZMaW5rcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL25hdmlnYXRvbi1kYXRhXCI7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvY2xvc2UtaWNvbi5zdmdcIjtcbmltcG9ydCAnLi9uYXZiYXIuY3NzJztcblxuLyoqXG4gKiBOYXZiYXIgY2xhc3MgaXMgdXNlZCB0byBjcmVhdGUgYW5kIG1hbmFnZSB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gKi9cbmNsYXNzIE5hdmJhciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYW4gZW1wdHkgbmF2YmFyIGVsZW1lbnQgd2l0aCBhIGNvbnRhaW5lciBmb3IgYSBsaXN0IG9mIGxpbmtzLlxuICAgICovICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgICAgICB0aGlzLm5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyX19saXN0Jyk7XG4gICAgICAgIHRoaXMubmF2YmFyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIG5hdmJhciBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbGxzIG90aGVyIGludGVybmFsIG1ldGhvZHMgdG8gY29uc3RydWN0IHRoZSBuYXZiYXIgd2l0aCBhbGwgaXRzIGNvbnRlbnRzLlxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gTmF2YmFyIEVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgdGhpcy4jY3JlYXRDbG9zZUNvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLiNjcmVhdGVIb21lTGluaygpO1xuICAgICAgICB0aGlzLiNjcmVhdGVTZXBhcmF0b3IoKTtcbiAgICAgICAgdGhpcy4jY3JlYXRlU2VjdGlvbkxpbmtzKCdJbi1QbGFjZSBBbGdvcml0aG1zJywgaW5QbGFjZU5hdkxpbmtzKTtcbiAgICAgICAgdGhpcy4jY3JlYXRlU2VwYXJhdG9yKCk7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdmJhcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGxpc3QgaXRlbSBlbGVtZW50LCBhIHRpdGxlIGVsZW1lbnQsIGFuZCBhIGxpbmsgZWxlbWVudCBmb3IgdGhlIGhvbWUgcGFnZS4gXG4gICAgICogSXQgYXBwZW5kcyB0aGUgbGluayB0byB0aGUgdGl0bGUgZWxlbWVudCwgdGhlIHRpdGxlIGVsZW1lbnQgdG8gdGhlIGxpc3QgaXRlbSBlbGVtZW50IFxuICAgICAqIGFuZCB0aGUgbGlzdCBpdGVtIGVsZW1lbnQgdG8gdGhlIG5hdmJhci5cbiAgICAgKi9cbiAgICAjY3JlYXRlSG9tZUxpbmsoKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fc3VidGl0bGUnKTtcbiAgICAgICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICAvLyBMaW5rIHRvIEhvbWUgUGFnZVxuICAgICAgICBob21lTGluay5ocmVmID0gJyMvJztcbiAgICAgICAgaG9tZUxpbmsub25jbGljayA9IChlKSA9PiB7dGhpcy4jaGFuZGxlTmF2aWdhdGlvbkNsaWNrKGUpfTtcbiAgICAgICAgaG9tZUxpbmsuY2xhc3NMaXN0LmFkZCgnbmF2YmFyX19saW5rJywgJ25hdmJhcl9faG9tZS1saW5rJywgJ2FjdGl2ZScpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uYXZiYXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGxpc3QgaXRlbSBlbGVtZW50IGFuZCBhIHNwYW4gZWxlbWVudCB0byBhY3QgYXMgYSBzZXBhcmF0b3IuIFxuICAgICAqIEl0IGFwcGVuZHMgdGhlIHNwYW4gZWxlbWVudCB0byB0aGUgbGlzdCBpdGVtIGVsZW1lbnQsIGFuZCB0aGUgbGlzdCBpdGVtIHRvIHRoZSBuYXZiYXIuXG4gICAgICovXG4gICAgI2NyZWF0ZVNlcGFyYXRvcigpe1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAvLyBzcGFuIGVsZW1lbnQgdG8gZHJhdyBhIHZlcnRpY2FsIHNlcGFyYXRvciBsaW5lXG4gICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc2VwYXJhdG9yLmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fc2VwYXJhdG9yJyk7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XG4gICAgICAgIHRoaXMubmF2YmFyLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZChsaXN0SXRlbSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZWN0aW9uIG9mIGxpbmtzIHdpdGhpbiB0aGUgTmF2YmFyLlxuICAgICAqIEl0IHRha2VzIGluIGEgdGl0bGUgYW5kIGFuIGFycmF5IG9mIGxpbmtzIGFzIHBhcmFtZXRlcnMuXG4gICAgICogSXQgY3JlYXRlcyBhIG1haW4gbGlzdCBpdGVtLCBhIHRpdGxlIGVsZW1lbnQgYW5kIGEgc3VibGlzdCBlbGVtZW50LlxuICAgICAqIEl0IHRoZW4gaXRlcmF0ZXMgdGhyb3VnaCB0aGUgbGlua3MgYXJyYXksIGNyZWF0aW5nIGEgbGlzdCBpdGVtIGFuZCBhIGxpbmsgZWxlbWVudCBmb3IgZWFjaC5cbiAgICAgKiBUaGUgbGluayBlbGVtZW50J3MgdGV4dCBjb250ZW50IGlzIHNldCB0byB0aGUgbmFtZSBvZiB0aGUgbGluaywgdGhlIGhyZWYgaXMgc2V0IHRvIHRoZSB1cmwgb2YgdGhlIGxpbmsuXG4gICAgICogVGhlIG9uY2xpY2sgZXZlbnQgaXMgc2V0IHRvIGNhbGwgdGhlIGhhbmRsZU5hdmlnYXRpb25DbGljayBtZXRob2QuXG4gICAgICogVGhlIGxpc3QgaXRlbSBhbmQgbGluayBlbGVtZW50IGFyZSB0aGVuIGFwcGVuZGVkIHRvIHRoZSBzdWJsaXN0LlxuICAgICAqIFRoZSB0aXRsZSBlbGVtZW50LCBzdWJsaXN0IGVsZW1lbnQgYW5kIHRoZSBtYWluIGxpc3QgaXRlbSBhcmUgdGhlbiBhcHBlbmRlZCB0byB0aGUgTmF2YmFyLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgc2VjdGlvbiBvZiBsaW5rc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGxpbmtzIC0gQW4gYXJyYXkgb2YgbGluayBvYmplY3RzIGNvbnRhaW5pbmcgYSBuYW1lIGFuZCB1cmwgcHJvcGVydHlcbiAgICAgKi9cbiAgICAjY3JlYXRlU2VjdGlvbkxpbmtzKHRpdGxlLCBsaW5rcyl7XG4gICAgICAgIGNvbnN0IG1haW5MaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fc3VidGl0bGUnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpbmtMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbGlua0xpc3QuY2xhc3NMaXN0LmFkZCgnbmF2YmFyX19zdWJsaXN0Jyk7XG5cbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ25hdmJhcl9fbGlzdC1pdGVtJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGlua0VsZW1lbnQudGV4dENvbnRlbnQgPSBsaW5rLm5hbWU7XG4gICAgICAgICAgICBsaW5rRWxlbWVudC5ocmVmID0gbGluay51cmw7XG4gICAgICAgICAgICBsaW5rRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2xpbmsnKTtcbiAgICAgICAgICAgIGxpbmtFbGVtZW50Lm9uY2xpY2sgPSAoZSkgPT4ge3RoaXMuI2hhbmRsZU5hdmlnYXRpb25DbGljayhlKTt9O1xuICAgICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlua0VsZW1lbnQpO1xuXG4gICAgICAgICAgICBsaW5rTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1haW5MaXN0SXRlbS5hcHBlbmQodGl0bGVFbGVtZW50LCBsaW5rTGlzdClcbiAgICAgICAgdGhpcy5uYXZiYXIuZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kKG1haW5MaXN0SXRlbSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGNsaWNrIGV2ZW50IG9uIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLlxuICAgICAqIEl0IHJlbW92ZXMgdGhlIGFjdGl2ZSBjbGFzcyBmcm9tIHRoZSBjdXJyZW50IGFjdGl2ZSBsaW5rIGFuZCBhZGRzIGl0IHRvIHRoZSBjbGlja2VkIGxpbmsuXG4gICAgICogSXQgYWxzbyBjbG9zZXMgdGhlIG5hdmJhciBpZiBpdCBpcyBvcGVuLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGUgLSB0aGUgY2xpY2sgZXZlbnQgb2JqZWN0XG4gICAgKi9cbiAgICAjaGFuZGxlTmF2aWdhdGlvbkNsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5uYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyX19saW5rLmFjdGl2ZScpO1xuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGFjdGl2ZUxpbmspe1xuICAgICAgICAgICAgYWN0aXZlTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGNsb3NlIGNvbnRhaW5lciBmb3IgdGhlIG5hdmJhciwgaW5jbHVkaW5nIHRoZSBjbG9zZSBidXR0b24gYW5kIGljb24uXG4gICAgICovXG4gICAgI2NyZWF0Q2xvc2VDb250YWluZXIoKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2Nsb3NlLWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZiYXJfX2Nsb3NlLWJ0bicpO1xuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHt0aGlzLiNoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrKCl9O1xuXG4gICAgICAgIGNvbnN0IGNsb3NlSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgY2xvc2VJbWFnZS5jbGFzc0xpc3QuYWRkKCdpY29uJyAsJ25hdmJhcl9fY2xvc2UtaWNvbicpO1xuICAgICAgICBjbG9zZUltYWdlLnNyYyA9IGNsb3NlSWNvbjtcbiAgICAgICAgY2xvc2VJbWFnZS5hbHQgPSAnQ2xvc2UgTmF2YmFyJztcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUltYWdlKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy5uYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGNsb3NlIGJ1dHRvbi5cbiAgICAgKiBJdCBhbHNvIGNsb3NlcyB0aGUgbmF2YmFyIGlmIGl0IGlzIG9wZW4gYnkgcmVtb3ZpbmcgdGhlIGFjdGl2ZSBjbGFzcy5cbiAgICAqL1xuICAgICNoYW5kbGVDbG9zZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLm5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCJpbXBvcnQgJy4vdG9nZ2xlX2J1dHRvbi5jc3MnO1xuXG5cbi8qKlxuVGhlIFRvZ2dsZUJ1dHRvbiBjbGFzcyBjcmVhdGVzIGEgdG9nZ2xlIGJ1dHRvbiBlbGVtZW50IHdpdGggdHdvIGljb25zIHRoYXQgY2FuIGJlIHRvZ2dsZWQgYmV0d2Vlbi5cbiovXG5jbGFzcyBUb2dnbGVCdXR0b24ge1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAtICBDU1MgY2xhc3NuYW1lIHRvIGJlIGFkZGVkIHRvIHRoZSB0b2dnbGUgYnV0dG9uIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZpcnN0SWNvbiAtIFRoZSBmaXJzdCBpY29uIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uLiBTaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggc3JjIGFuZCBhbHQgZmllbGRzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWNvbmRJY29uIC0gVGhlIHNlY29uZCBpY29uIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uLiBTaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggc3JjIGFuZCBhbHQgZmllbGRzLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ2xpY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjbGFzc05hbWUsIGZpcnN0SWNvbiwgc2Vjb25kSWNvbiwgb25DbGljayl7XG4gICAgICAgIHRoaXMuZmlyc3RJY29uID0gZmlyc3RJY29uO1xuICAgICAgICB0aGlzLnNlY29uZEljb24gPSBzZWNvbmRJY29uO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUtYnRuJywgY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5vbkNsaWNrRXZlbnQgPSBvbkNsaWNrO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBidXR0b24gZWxlbWVudCB3aXRoIHRoZSBpY29ucyBhbmQgb25jbGljayBldmVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGNyZWF0ZWQgYnV0dG9uIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpY29uc1xuICAgICAgICB0aGlzLiNjcmVhdGVJY29ucygpO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgY2xpY2sgZXZlbnQgb24gdGhlIGJ1dHRvblxuICAgICAgICB0aGlzLmJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge3RoaXMuI2hhbmRsZUNsaWNrRXZlbnQoKX07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uXG4gICAgfTtcblxuICAgIC8qKlxuICAgICogQ3JlYXRlcyBhbmQgYXBwZW5kcyB0aGUgcHJpbWFyeSBhbmQgc2Vjb25kYXJ5IGljb25zIHRvIHRoZSBidXR0b24gZWxlbWVudC5cbiAgICAqIFRoZSBwcmltYXJ5IGljb24gaXMgZGlzcGxheWVkIGJ5IGRlZmF1bHQsIHdoaWxlIHRoZSBzZWNvbmRhcnkgaWNvbiBpcyBoaWRkZW4uXG4gICAgKi9cbiAgICAjY3JlYXRlSWNvbnMoKXtcbiAgICAgICAgY29uc3QgcHJpbWFyeUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcHJpbWFyeUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICBwcmltYXJ5SWNvbi5zcmMgPSB0aGlzLmZpcnN0SWNvbi5zcmM7XG4gICAgICAgIHByaW1hcnlJY29uLmFsdCA9IHRoaXMuZmlyc3RJY29uLmFsdDtcbiAgICAgICAgdGhpcy5idXR0b24uYXBwZW5kQ2hpbGQocHJpbWFyeUljb24pO1xuXG4gICAgICAgIGNvbnN0IHNlY29uZGFyeUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc2Vjb25kYXJ5SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJywgJ2hpZGRlbicpO1xuICAgICAgICBzZWNvbmRhcnlJY29uLnNyYyA9IHRoaXMuc2Vjb25kSWNvbi5zcmM7XG4gICAgICAgIHNlY29uZGFyeUljb24uYWx0ID0gdGhpcy5zZWNvbmRJY29uLmFsdDtcbiAgICAgICAgdGhpcy5idXR0b24uYXBwZW5kQ2hpbGQoc2Vjb25kYXJ5SWNvbik7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgY2xpY2sgZXZlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICAgKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0d28gaWNvbnMgYW5kIGNhbGxzIHRoZSBvbkNsaWNrRXZlbnQgZnVuY3Rpb25cbiAgICAgKi9cbiAgICAjaGFuZGxlQ2xpY2tFdmVudCgpIHtcbiAgICAgICAgdGhpcy5idXR0b24uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmxhc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMub25DbGlja0V2ZW50KCk7XG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlQnV0dG9uOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJzsgXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJzsgXG5cbi8qKlxuICogVGhlIGVudHJ5IHBvaW50IG9mIHRoZSBhcHBsaWNhdGlvblxuICogY3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgQXBwIGNsYXNzIGFuZCBydW5zIGl0XG4gKi9cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKVxuYXBwLnJ1bigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==