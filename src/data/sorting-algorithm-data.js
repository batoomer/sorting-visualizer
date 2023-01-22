/**
 * Objects containing information about the respective sorting algorithms. Each object contains the following properties:
 * 
 * title: a string representing the title/name of the sorting algorithm.
 * description: an array of strings providing a brief overview of the sorting algorithm.
 * complexity: an object providing the time and space complexities of the sorting algorithm.
 * pseudocode: a string containing a representation of the sorting algorithm in pseudocode format.
 */

export const bubbleSortInfo = {
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
}

export const selectionSortInfo = {
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
}

export const insertionSortInfo = {
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
}

