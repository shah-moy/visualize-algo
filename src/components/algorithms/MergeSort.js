import React from 'react';
import { newTrace, addToTrace, createKey } from './helpers';

const MergeSort = (nums) => {
  // Initial State
  const trace = newTrace(nums);

  function merge(original, start, mid, end) {
    const left = original.slice(start, mid);
    const right = original.slice(mid, end);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        addToTrace(trace, original, [], [], [], [k + start]);
        original[k + start] = left[i];
        i++;
        addToTrace(trace, original, [], [], [], [k + start]);
      } else {
        addToTrace(trace, original, [], [], [], [k + start]);
        original[k + start] = right[j];
        j++;
        addToTrace(trace, original, [], [], [], [k + start]);
      }
      k++;
    }
    while (i < left.length) {
      addToTrace(trace, original, [], [], [], [k + start]);
      original[k + start] = left[i];
      i++;
      k++;
      addToTrace(trace, original, [], [], [], [k + start]);
    }
    while (j < right.length) {
      addToTrace(trace, original, [], [], [], [k + start]);
      original[k + start] = right[j];
      j++;
      k++;
      addToTrace(trace, original, [], [], [], [k + start]);
    }

    left.length = 0;
    right.length = 0;
  }

  function recursiveMergeSort(original, start, end) {
    const length = end - start;
    if (length < 2) {
      // original = []
      if (length < 1) return original;
      // original = [x]
      else return [original[start]];
    }

    const midPoint = Math.floor((start + end) / 2);

    // Visualize: First Half
    addToTrace(
      trace,
      original,
      [],
      [...Array(midPoint - start).keys()].map((i) => i + start)
    );
    recursiveMergeSort(original, start, midPoint);

    // Visualize: Second Half
    addToTrace(
      trace,
      original,
      [],
      [...Array(end - midPoint).keys()].map((i) => i + midPoint)
    );
    recursiveMergeSort(original, midPoint, end);

    merge(original, start, midPoint, end);
  }

  recursiveMergeSort(nums, 0, nums.length);

  // Visualize: Mark all elements as sorted
  addToTrace(trace, nums, [...Array(nums.length).keys()]);
  return trace;
};

export const MergeSortKey = createKey(
  'Call Merge Sort',
  null,
  'Overwrite from axillary array'
);

export const MergeSortP= {


    l0:(<span Style="margin: 0px"><line> split each element into partitions of size 1</line></span>),
  
    l1: (<span Style="margin: 15px"><line>recursively merge adjacent partitions </line></span>),
    l2:(<span Style="margin: 25px">
    <line >  for i = leftelementId to rightelementId <br/></line></span>
    ),
    l3:(<span Style="margin: 35px"><line >
    {"if leftPartHeadValue <= rightPartHeadValue"}
  </line></span>
  ),
    l4:(<span Style="margin: 45px"><line alignmentBaseline>
       copy leftElementValue  </line></span>),
      l5:(<span Style="margin: 35px"><line>else: copy rightElementValue</line></span>),
    l10:(<span Style="margin: 0px"><line>copy elements back to original array</line></span>),
   l7:(<span Style="margin: 15px"><line></line></span>),
   l8:(<span Style="margin: 0px"><line></line></span>),
   l9:(<span Style="margin: 0px"><line></line></span>),
   
 /*  description: (
    <p>
    <div className="card post" Style="text-align:left" > 
          <div id="screen" Style="margin: 15px">
          split each element into partitions of size 1<br/> 
                <span id="swapped" Style="margin-left:20px">
               <br/>recursively merge adjacent partitions <br/>
                  </span><br/>
            <span id="change" Style="margin-left:40px" >
            for i = leftelementId to rightelementId<br/>
            </span><br/>
            <span id="compare" className="Bar_stateA" Style="margin-left:60px">
            {"if leftPartHeadValue <= rightPartHeadValue"}<br/>
            </span><br/>
            <span id="swap" Style="margin-left:80px">
            copy leftElementValue
else: copy rightElementValue
<br/> </span><br/>
            <span id="swap"  Style="margin-left:80px">
            else: copy rightElementValue<br/>
            </span><br/>
            <span id="change">copy elements back to original array</span>
          </div></div>
         
    </p>
  ),
  */
};

export const MergeSortDesc = {
  title: 'Merge Sort',
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Merge_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merge Sort
        </a>{' '}
        is an efficient, stable sorting algorith that makes use of the
        divide and conquer strategy. Conceptually the algorithm works as
        follows:
      </p>
      <ol>
        <li>
          Divide the unsorted list into <em>n</em> sublists, each
          containing one element(a list of one element is considered
          sorted)
        </li>
        <li>
          Repeatedly merge sublists to produce new sorted sublists until
          there is only one sublist remaining. This will be the sorted
          list.
        </li>
      </ol>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: (
    <span>
      O(<em>n</em>)
    </span>
  )
};
export default MergeSort;
