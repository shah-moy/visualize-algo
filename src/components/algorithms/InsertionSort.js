import React from 'react';
import { newTrace, addToTrace, createKey } from './helpers';

const InsertionSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  // Core Algorithm
  for (let i = 1; i < nums.length; i++) {
    let value = nums[i];
    let hole = i;
    // Visualize: Hole has been selected for comparison
    addToTrace(trace, nums, [], [i]);
    while (hole > 0 && nums[hole - 1] > value) {
      // Visualize: Compare hole to value
      addToTrace(trace, nums, [], [hole], [hole - 1]);
      nums[hole] = nums[hole - 1];
      hole -= 1;
      // Visualize: Overwrite hole with hole - 1
      addToTrace(trace, nums, [], [], [hole, hole + 1]);
    }
    // Visualize: Overwrite hole with value
    addToTrace(trace, nums, [], [], [], [hole]);
    nums[hole] = value;
    // Visualize: value is in sorted position
    addToTrace(trace, nums, [], [], [], [hole]);
  }

  // Visualize: Mark all elements as sorted
  addToTrace(trace, nums, [...Array(nums.length).keys()]);
  return trace;
};

export const InsertionSortKey = createKey(
  'Comparing',
  'Swapping',
  'Overwrite from memory'
);



export const InsertionSortP= {



  l0:(<span Style="margin: 0px"><line> mark first element as sorted</line></span>),

  l1: (<span Style="margin: 15px"><line>  for each unsorted element X<br/>'extract' the element X </line></span>),
  l2:(<span Style="margin: 25px">
  <line > for j = lastSortedIndex down to 0<br/></line></span>
  ),
  l3:(<span Style="margin: 25px"><line >
  {"if current element j > X"}
</line></span>
),
  l4:(<span Style="margin: 30px"><line alignmentBaseline>
     move sorted element  </line></span>),
    l5:(<span Style="margin: 30px"><line>to the right by 1</line></span>),
  l10:(<span Style="margin: 30px"><line>break loop and insert X here</line></span>),
 l7:(<span Style="margin: 15px"><line> while</line></span>),
 l8:(<span Style="margin: 0px"><line></line></span>),
 l9:(<span Style="margin: 0px"><line></line></span>),
 





  /*
  description: (
    <p>
    <div className="card post" Style="text-align:left" > 
          <div id="screen" Style="margin: 15px">
          mark first element as sorted<br/> 
                <span id="swapped" Style="margin-left:20px">
                for each unsorted element X<br/>
                  </span><br/>
            <span id="change" Style="margin-left:40px" >
            'extract' the element X<br/>
            </span><br/>
            <span id="compare" className="Bar_stateA" Style="margin-left:60px">
              for j = lastSortedIndex down to 0<br/>
            </span><br/>
            <span id="swap" Style="margin-left:80px">
            if current element j > X<br/> </span><br/>
            <span id="swap"  Style="margin-left:80px">
            move sorted element to the right by 1 <br/>
            </span><br/>
            <span id="change">break loop and insert X here</span>
          </div></div>
         
    </p>
  ),*/
 
};



export const InsertionSortDesc = {
  title: 'Insertion Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Insertion_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Insertion Sort
      </a>{' '}
      is a simple sorting algorithm that iterates through an array and
      at each iteration it removes one element from the array, finds the
      location it belongs to in the sorted list and inserts it there,
      repeating until no elements remain in the unsorted list. It is an
      in-place, stable sorting algorithm that is inefficient on large
      input arrays but works well for data sets that are almost sorted.
      It is more efficient in practice compared to other quadratic
      sorting algorithms like bubble sort and selection sort.
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
  space: <span>O(1)</span>
};

export default InsertionSort;
