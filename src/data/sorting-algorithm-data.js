
export const bubbleSortInfo = {
    title: 'Bubble Sort',
    description: [
        'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
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



