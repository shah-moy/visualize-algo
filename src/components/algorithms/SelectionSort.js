import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  lastSorted,
  createKey
} from './helpers';

const SelectionSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  // Core Algorithm
  for (let i = 0; i < nums.length - 1; i++) {
    // Internal Loop: Find index of min value
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      // Visualize: comparing A[j] to A[minIndex]
      addToTrace(trace, nums, lastSorted(trace), [minIndex, j]);
      if (nums[j] < nums[minIndex]) {
        // Visualize: discovered new minIndex
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
        minIndex = j;
        // Visualize: reassign new minIndex;
        addToTrace(trace, nums, lastSorted(trace), [minIndex], [j]);
      }
    }

    // Visualize: i'th value to be swapped with min value
    addToTrace(trace, nums, lastSorted(trace), [], [i, minIndex]);

    swap(nums, i, minIndex);

    // Visualize: i'th value has been swapped with min value
    addToTrace(trace, nums, [...lastSorted(trace), i], [], []);
  }

  // Visualize: Final item in the array is sorted
  addToTrace(trace, nums, [...lastSorted(trace), nums.length - 1]);

  return trace;
};

export const SelectionSortKey = createKey('Comparing', 'Swapping');

export const SelectionSortP= {



  l0:(<span Style="margin: 0px"><line>Selection Sort (Array,n)</line></span>),

  l1: (<span Style="margin: 15px"><line> for: i=1 to LastIndex-1 do  </line></span>),
  l2:(<span Style="margin: 25px">
  <line >  minimum = i <br/></line></span>
  ),
  l3:(<span Style="margin: 25px"><line > for: j= i+ 1 to LastIndex-1 do
  
</line></span>
),
  l4:(<span Style="margin: 40px"><line alignmentBaseline>
    {"if Array[j] < Array[minimum]"}</line></span>),
    l5:(<span Style="margin: 55px"><line>minimum = j</line></span>),
  l6:(<span Style="margin: 25px"><line>swap Array[i] and Array[minimum]</line></span>),
 l7:(<span Style="margin: 0px"><line>end SelectionSort </line></span>),
 l8:(<span Style="margin: 0px"><line></line></span>),
 l9:(<span Style="margin: 0px"><line></line></span>),
}

/* export const SelectionSortP= {

  description: (
    <p>
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
         
    </p>
  ),
 
};
 */





export const SelectionSortDesc = {
  title: 'Selection Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Selection_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Selection Sort
      </a>{' '}
      is an in-place comparison sorting algorithm that divides the input
      list into two parts: the sublist of items already sorted, which is
      built up from left to right at the front (left) of the list, and
      the sublist of items remaining to be sorted that occupy the rest
      of the list. Initially, the sorted sublist is empty and the
      unsorted sublist is the entire input list. The algorithm proceeds
      by finding the smallest element in the unsorted sublist,
      exchanging (swapping) it with the leftmost unsorted element
      (putting it in sorted order), and moving the sublist boundaries
      one element to the right.
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
  bestCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  space: <span>O(1)</span>
};

export default SelectionSort;
