import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SortInfoP = ({

  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices,
  pseudo1,
  


  title,
  description,
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
  space
}) => {

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

      
      if (sorted) classNamesSR += ' Pseudo_sorted';
      
      if (stateD) classNamesPivot += ' Bar_stateD';
      else if (stateC) classNamesMemory += ' Bar_stateC';
      else if (stateB){ classNamesSW += ' Pseudo_stateB';
      classNamesSR += 'Bar_default';
    }
      else if (stateA) {classNamesC += ' Pseudo_stateA';
      classNamesSR += 'Bar_default';
    }

    } );




  return (
    <div className="SortInfoP">
      <hr />
      
      <div className="SortInfo__Body">
        <article className="SortInfo__Article">
          {description ? (
            description
          ) : (
            <p>
              You must select an algorithm before you can visualize it's
              execution on an array of numbers.
            </p>
          )}
           <td>
                  {l1}
                </td>
                <br/>
                <td>
                  <code className={classNamesC}>     </code><code>{l2}</code>
                </td>
                <br/>
                <td>
                  <code className={classNamesSW}></code>:<code>{l3}</code>
                  <br/>
                </td>
                <br/>
                <td>
                  
                  <code className={classNamesSR}></code>:<code>{l4}</code>
                </td>
              
                <td>
                  <code>{l5}</code>
                </td>
        </article>
      </div>
    </div>
  );

/*
  return(
  
    <div className="SortInfoP">
      
      <div className="SortInfo__Body">
    <div  > 
    
   
          do <br/> 
          <span className={classNames} Style="margin-left:20px">
          {description}
            </span><br/>
      <span id="change" Style="margin-left:40px" >
     {l1}
      </span><br/>
      <span className={classNamesC}  Style="margin-left:60px"><div>
      efv:{l2}</div>
      </span>
      <span className={classNamesSW} Style="margin-left:60px">
      df:{l3}  </span><br/>
      <span className={classNamesSR} Style="margin-left:10px">
      abc:{l4}<br/>
      </span><br/>
      <span id="change"> {title ? title : 'while swapped'} </span>
  
    </div></div>

    </div>
    
  )
  */



  
/*
    
return(
  
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
     if leftElement > rightElement<br/>
    </span><br/>
    <span className={classNamesSW} Style="margin-left:60px">
        swap(leftElement, rightElement) <br/> </span><br/>
    <span className={classNamesSR} Style="margin-left:10px">
        swapped = true <br/>
    </span><br/>
    <span id="change"> {title ? title : 'while swapped'} </span>

  </div></div>
  
)

*/

};

SortInfoP.propTypes = {
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
  description: PropTypes.object,
  worstCase: PropTypes.object,
  avgCase: PropTypes.object,
  bestCase: PropTypes.object,
  space: PropTypes.object,
  numbers: PropTypes.arrayOf(PropTypes.number),
  maxNum: PropTypes.number,
  title:PropTypes.string,
  groupA: PropTypes.arrayOf(PropTypes.number),
  groupB: PropTypes.arrayOf(PropTypes.number),
  groupC: PropTypes.arrayOf(PropTypes.number),
  groupD: PropTypes.arrayOf(PropTypes.number),
  sortedIndices: PropTypes.arrayOf(PropTypes.number)
};

export default SortInfoP;
