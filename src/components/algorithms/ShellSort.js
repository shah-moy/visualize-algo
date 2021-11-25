import React from 'react';
import {
  swap,
  newTrace,
  addToTrace,
  createRange,
  createKey
} from './helpers';

const ShellSort = (nums) => {
  const trace = newTrace(nums);

  for (
    let gap = Math.floor(nums.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let j = gap; j < nums.length; j++) {
      for (let i = j - gap; i >= 0; i -= gap) {
        addToTrace(trace, nums, [], [i, i + gap]);
        if (nums[i + gap] < nums[i]) {
          addToTrace(trace, nums, [], [], [i, i + gap]);
          swap(nums, i, i + gap);
          addToTrace(trace, nums, [], [], [i, i + gap]);
        } else {
          break;
        }
      }
    }
  }

  addToTrace(trace, nums, createRange(0, nums.length));
  return trace;
};

export const ShellSortKey = createKey('Comparing', 'Swapping');



export const ShellSortP= {

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




export const ShellSortDesc = {
  title: 'Shell Sort',
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Shellsort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shell Sort
        </a>
        , also know as Shell's method is a generalization of insertion
        sort where elements <em>gap</em> distance apart are compared
        rather than adjacent elements. The method starts by sorting
        pairs of elements far apart from each other, then progressively
        reducing the gap between elements to be compared. Starting with
        far apart elements, it can move some out-of-place elements into
        position faster than a simple nearest neighbor exchange. The
        running time of Shellsort is heavily dependent on the gap
        sequence it uses. For many practical variants, determining their
        time complexity remains an open problem. It is in-place sorting
        algorithm that is not stable.
      </p>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>
      <sup>3/2</sup>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: <span>O(1)</span>
};

export default ShellSort;
