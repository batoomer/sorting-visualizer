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
};

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
};

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
};

export const quickSortInfo = {
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

