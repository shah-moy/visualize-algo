import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import BubbleSort from '../../algorithms/BubbleSort';
import Bar1 from '../../celling/Bar1';
import { psudo } from '../../algorithms/BubbleSort';
const getListOfBars = (
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices,
  trace,
  tracestep,
  number=[1,2,3],
  t2

) => {
  return numbers.map((num,i) => {

    //i=parseInt(maxNum);
    
     
    let width = 100 / number.length;
    let height = (num / 3) * 100;
    let stateA = groupA.includes(i);
    let stateB = groupB.includes(i);
    let stateC = groupC.includes(i);
    let stateD = groupD.includes(i);
    let sorted = sortedIndices.includes(i);
  
 
  return (
    <Bar1
      key={`${i}_${num}`}
      width={"5"}
      height={"5"}
      val={width > 4 ? num : null}
      stateA={stateA}
      stateB={stateB}
      stateC={stateC}
      stateD={stateD}
      sorted={sorted}
      
    />
  );
  });}

const SortChart1 = ({
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices,
  trace,
  tracestep,
  t2=BubbleSort
}) => {
  return (
    <div className="SortChart1">
      {getListOfBars(
        numbers,
        maxNum,
        groupA,
        groupB,
        groupC,
        groupD,
        sortedIndices,
        trace,
        tracestep,
        t2
      )}
    </div>
  );
};

SortChart1.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  maxNum: PropTypes.number,
  tracestep: PropTypes.number,
  groupA: PropTypes.arrayOf(PropTypes.number),
  groupB: PropTypes.arrayOf(PropTypes.number),
  groupC: PropTypes.arrayOf(PropTypes.number),
  groupD: PropTypes.arrayOf(PropTypes.number),
  sortedIndices: PropTypes.arrayOf(PropTypes.number)
};

export default SortChart1;
