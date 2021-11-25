import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Bar2 from '../../celling/Bar2';
import Bar from '../../celling/Bar';

const getListOfBars = (
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices
) => {
  return (() => {
    let width = 100 ;
    let height =  100;
    let stateA = groupA;
    let stateB = groupB;
    let stateC = groupC;
    let stateD = groupD;
    let sorted = sortedIndices;

    
    return (
      <Bar2
        
        width={width}
        height={height}
      
        stateA={stateA}
        stateB={stateB}
        stateC={stateC}
        stateD={stateD}
        sorted={sorted}
        
      />
    );
  });
};

const SortChart2 = ({
  numbers,
  maxNum,
  groupA,
  groupB,
  groupC,
  groupD,
  sortedIndices
}) => {
  return (
    <div className="SortChart2">
      {getListOfBars(
        numbers,
        maxNum,
        groupA,
        groupB,
        groupC,
        groupD,
        sortedIndices
      )}
    </div>
  );
};

SortChart2.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
  maxNum: PropTypes.number,
  groupA: PropTypes.arrayOf(PropTypes.number),
  groupB: PropTypes.arrayOf(PropTypes.number),
  groupC: PropTypes.arrayOf(PropTypes.number),
  groupD: PropTypes.arrayOf(PropTypes.number),
  sortedIndices: PropTypes.arrayOf(PropTypes.number)
};

export default SortChart2;
