import React from 'react';
import './bubbleSort.css';

import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './helpers';

 let a=2;
let b=2;
const BubbleSort = (nums) => {
  // Set up code for tracing the algorithm
  const trace = newTrace(nums);

  // Sorting Algorithm with trace capture
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      // Visualize: Comparing A[j] and A[j + 1]
      addToTrace(trace, nums, lastSorted(trace), [j, j + 1]);
      
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      a=1;
      b=1;
      
        // Visualize: Swap A[j] and A[j + 1]
        addToTrace(trace, nums, lastSorted(trace), [], [j, j + 1]);
      }
    }
  
a=2;
b=2;
    // Visualize: final value is sorted
    addToTrace(trace, nums, [
      ...lastSorted(trace),
      nums.length - 1 - i
    ]);
  }


  return (trace
    
    );
};

export const psudo={
  a:a,
  b:b,

}
export const SortChartR ={
  title: 'it works'
}

export const BubbleSortKey = createKey('Comparing', 'Swapping');

/*
export const SortChart= {

  l1: (
    <line> do <br/>swapped = false</line> ),
  l2:(<line>for i = 1 to indexOfLastUnsortedElement-1<br/></line>),
  l3:(<line>if leftElement > rightElement</line>),
  l4:(<line>swap(leftElement, rightElement) </line>),
  l5:(<line>swapped = true</line>),
l6:(<line>while swapped</line>),
 
};
*/


export const BubbleSortP= {
  l0:(<span Style="margin: 0px"><line>begin BubbleSort(array)</line></span>),

  l1: (<span Style="margin: 15px"><line> for number elements of in Array  </line></span>),
  l2:(<span Style="margin: 25px">
  <line >  for all elements of the Array<br/></line></span>
  ),
  l3:(<span Style="margin: 25px"><line >
  {"if leftElement > rightElement"}
</line></span>
),
  l4:(<span Style="margin: 30px"><line alignmentBaseline>
    swap(leftElement, rightElement) </line></span>),
    l5:(<span Style="margin: 30px"><line>end if</line></span>),
  l6:(<span Style="margin: 30px"><line>end inner for</line></span>),
 l7:(<span Style="margin: 15px"><line> end outer for</line></span>),
 //l8:(<span Style="margin: 0px"><line>end BubbleSort</line></span>),
 l9:(<span Style="margin: 0px"><line></line></span>),
 
};






export const BubbleSortDesc = {
  title: 'Bubble Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Bubble_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bubble Sort
      </a>{' '}
      is a simple sorting algorithm that repeatedly steps through the
      list, compares adjacent elements and swaps them if they are in the
      wrong order.The pass through the list is repeated until the list
      is sorted. The algorithm, which is a comparison sort, is named for
      the way smaller or larger elements "bubble" to the top of the
      list. Although the algorithm is simple, it is too slow and
      impractical for most problems
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,

  space: <span>O(1)</span>,
 /**  ps:(  <p>
    <div className="card post" Style="text-align:left" > 
          <div id="screen" Style="margin: 15px">
                do <br/> 
                <span id="swapped" Style="margin-left:20px">
                swapped = false <br/>
                  </span><br/>
            <span id="change" Style="margin-left:40px" >
              for i = 1 to indexOfLastUnsortedElement-1<br/>
            </span><br/>
            <span id="compare" className="Bar_stateA" Style="margin-left:60px">
              if leftElement > rightElement<br/>
            </span><br/>
            <span id="swap" Style="margin-left:80px">
                swap(leftElement, rightElement) <br/> </span><br/>
            <span id="swap"  Style="margin-left:80px">
                swapped = true <br/>
            </span><br/>
            <span id="change">while swapped</span>
          </div></div>
         
    </p> )
    */
};
export default BubbleSort;
