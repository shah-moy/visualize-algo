import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Button from '../Button';
import Menu from '../Menu';
import Button1 from '../Button1';


const Controls = ({
  algorithm,
  onAlgorithmChange,
  onGenerateRandomArray,
  arraySize,
  insertArray,
  insertwithIndex,
  deleteArray,
  deletewholeArray,
  onArraySizeChange,
  }) => {
    return (
      <Fragment>
        <Menu
          placeholder="Sort Algorithm"
          items={[
            'Bubble Sort',
            'Selection Sort',
            'Insertion Sort',
            'Merge Sort',
            'Quick Sort'
          ]}
          selected={algorithm}
          onSelect={onAlgorithmChange}
        />
  
        <div className="Controls__Size">
          <span>Size</span>
          <Menu
            placeholder="Array Size"
            items={['5', '10', '15', '20', '25']}
            selected={String(arraySize)}
            onSelect={onArraySizeChange}
          />
        </div > 
         
     <div>
      <input id="array" type="text" Style="width:50px;height:25px " padding-left="5px"></input> 
      <Button1 onClick={insertArray}>Insert
      </Button1> </div>
      
      <Button1 onClick={deleteArray}>Delete</Button1>
      <Button1 onClick={onGenerateRandomArray}>Randomize</Button1>

      </Fragment>
    );
  };
  
  Controls.propTypes = {
    algorithm: PropTypes.string,
  onAlgorithmChange: PropTypes.func.isRequired,
  onGenerateRandomArray: PropTypes.func.isRequired,
  arraySize: PropTypes.number,
  onArraySizeChange: PropTypes.func.isRequired,
  onToggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool,
  insertArray: PropTypes.func.isRequired,
  insertwithIndex: PropTypes.func.isRequired,
  deleteArray: PropTypes.func.isRequired,
  };
  
  export default Controls;