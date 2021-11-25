import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Bar from '../../celling/Bar';
import SortInfoP from '../SortInfoP';
 
const getListOfBars = (
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices
) => {
  return numbers.map((num, i) => {
    let width = 100 / numbers.length;
    let height = (num / maxNum) * 100;
    let stateA = groupA.includes(i);
    let stateB = groupB.includes(i);
    let stateC = groupC.includes(i);
    let stateD = groupD.includes(i);
    let sorted = sortedIndices.includes(i);

    let margin =
      i === numbers.length ? '0' : width > 3 ? '0.5rem' : '0.125rem';
    return (
      <Bar
        key={`${i}_${num}`}
        width={width}
        height={height}
        val={width > 4 ? num : null}
        stateA={stateA}
        stateB={stateB}
        stateC={stateC}
        stateD={stateD}
        sorted={sorted}
        style={{ marginRight: `${margin}` }}
      />
    );
  });
};


const SortChartR = (
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices,
 l0,
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  l9,
  l10,
  
) => {

  let classNames = 'SortChartR';
  let classNamesC = 'SortChartR';
  let classNamesSW = 'SortChartR';
  let classNamesSR = 'SortChartR';
  let classNamesPivot = 'SortChartR';
  let classNamesMemory = 'SortChartR';
   numbers.map((num, i) => {
    let width = 100 / numbers.length;
    let height = (num / maxNum) * 100;
    let stateA = groupA.includes(i);
    let stateB = groupB.includes(i);
    let stateC = groupC.includes(i);
    let stateD = groupD.includes(i);
    let sorted = sortedIndices.includes(i);

      
      if (sorted){ classNamesSR += ' P_sorted';
   }
      
      if (stateD) classNamesPivot += ' P_stateD';
      else if (stateC) classNamesMemory += ' P_stateC';
      else if (stateB){ classNamesSW += ' P_stateB';
      classNamesSR += 'P_default';
    }
      else if (stateA) {classNamesC += ' Bar_stateA';
      classNamesSR += 'P_default';
    }

    } );



    
return(
  /*
    <div className="SortChartR" Style="text-align:left" > 
    <div id="screen" Style="margin: 15px">
   
          do <br/> 
          <span className={classNames} Style="margin-left:20px">
          swapped = false <br/>
            </span><br/>
      <span id="change" Style="margin-left:40px" >
        for i = 1 to indexOfLastUnsortedElement-1<br/>
      </span><br/>
      <span className={classNamesC}  Style="margin-left:60px">
       if leftElement > rightElement
       <br/>
      </span><br/>
      <span className={classNamesSW} Style="margin-left:60px">
          swap(leftElement, rightElement) <br/> </span><br/>
      <span className={classNamesSR} Style="margin-left:10px">
          swapped = true <br/>
      </span><br/>
      <span id="change"> {title ? title : 'while swapped'} </span>

    </div></div>*/
<div>
<td><code>{l0}</code></td><br/>
    <td>
   <code>{l1}</code>
  </td>
  <br/>
  <td>
    <code >   {l2}  </code>
  </td>
  <br/>
  <td>
    <code  className={classNamesC}>{l3}</code>
    <br/>
  </td>
  <br/>
  <td>
    
    <code className={classNamesSW}>{l4}</code>
  </td>

<br/>
<td>
    
    <code className={classNamesSW}>{l5}</code>
  </td>

<br/>
  <td>
    <code className={classNamesSR || classNamesMemory} >{l6}</code>
  <code className={classNamesMemory}>{l10}</code>
  </td><br/>
  <td>
  <code>{l7}</code></td><br/>
  <td>
  <code>{l8}</code></td><br/>
  <td>
  
  <code>{l9}</code></td><br/>
  

</div>

    
)
  
  
};



const SortChart = ({
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices,
  l0,
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  l9,
  l10,
  
}) => {
  return (
    <div className="SortChart">
      <div className='SortChartL'>{getListOfBars(
        numbers,
        maxNum,
        groupA,
        groupB,
        groupC,
        groupD,
        sortedIndices
      )}</div>
       <aside className="SortChartR">{SortChartR(
         numbers,
         maxNum,
         groupA,
         groupB,
         groupC,
         groupD,
         
         
         sortedIndices,
         l0,
         l1,
         l2,
         l3,
         l4,
         l5,
         l6,
         l7,
  l8,
  l9,
  l10,
         
         
       )}
      
       </aside>
       
      
    </div>
  );
};

SortChart.propTypes = {
  l0: PropTypes.string,
  l1: PropTypes.string,
  l2: PropTypes.object,
  l3: PropTypes.object,
  l4: PropTypes.string,
  l5: PropTypes.string,
  l6: PropTypes.string,
  l7: PropTypes.string,
  l8: PropTypes.object,
  l9: PropTypes.object,
  l10: PropTypes.string,

  title: PropTypes.string,
  numbers: PropTypes.arrayOf(PropTypes.number),
  maxNum: PropTypes.number,
  title:PropTypes.string,
  groupA: PropTypes.arrayOf(PropTypes.number),
  groupB: PropTypes.arrayOf(PropTypes.number),
  groupC: PropTypes.arrayOf(PropTypes.number),
  groupD: PropTypes.arrayOf(PropTypes.number),
  sortedIndices: PropTypes.arrayOf(PropTypes.number)
};

export default SortChart;
