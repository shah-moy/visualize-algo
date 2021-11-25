import React, { Component } from 'react';
import './style.css';

import Controls from '../celling/Controls';
import TopBar from '../middle/TopBar';
import Drawer from '../celling/Drawer';
import SortVisualizer from '../floor/SortVisualizer';

import BubbleSort, {
  BubbleSortKey,
  BubbleSortDesc,
  BubbleSortP
} from '../algorithms/BubbleSort';
import SelectionSort, {
  SelectionSortKey,
  SelectionSortDesc,
  SelectionSortP
} from '../algorithms/SelectionSort';
import InsertionSort, {
  InsertionSortKey,
  InsertionSortDesc,
  InsertionSortP
} from '../algorithms/InsertionSort';
import MergeSort, {
  MergeSortKey,
  MergeSortDesc,
  MergeSortP
} from '../algorithms/MergeSort';
import QuickSort, {
  QuickSortKey,
  QuickSortDesc,
  QuickSortP
} from '../algorithms/QuickSort';
import QuickSort3, {
  QuickSort3Key,
  QuickSort3Desc
} from '../algorithms/QuickSort3';
import HeapSort, {
  HeapSortKey,
  HeapSortDesc,
  HeapSortP
} from '../algorithms/HeapSort';
import ShellSort, {
  ShellSortKey,
  ShellSortDesc,
  ShellSortP
} from '../algorithms/ShellSort';

class Khwarizmi extends Component {
  state = {
    array: [],
    arraySize: 10,
    trace: [],
    algorithm: null,
    appDrawerOpen: false
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  ALGORITHM = {
    'Bubble Sort': BubbleSort,
    'Selection Sort': SelectionSort,
    'Insertion Sort': InsertionSort,
    'Merge Sort': MergeSort,
    'Quick Sort': QuickSort,
    'Quick Sort 3': QuickSort3,
    'Heap Sort': HeapSort,
    'Shell Sort': ShellSort
  };

  ALGORITHM_KEY = {
    'Bubble Sort': BubbleSortKey,
    'Selection Sort': SelectionSortKey,
    'Insertion Sort': InsertionSortKey,
    'Merge Sort': MergeSortKey,
    'Quick Sort': QuickSortKey,
    'Quick Sort 3': QuickSort3Key,
    'Heap Sort': HeapSortKey,
    'Shell Sort': ShellSortKey
  };

  ALGORITHM_DESC = {
    'Bubble Sort': BubbleSortDesc,
    'Selection Sort': SelectionSortDesc,
    'Insertion Sort': InsertionSortDesc,
    'Merge Sort': MergeSortDesc,
    'Quick Sort': QuickSortDesc,
    'Quick Sort 3': QuickSort3Desc,
    'Heap Sort': HeapSortDesc,
    'Shell Sort': ShellSortDesc
  };
  ALGORITHM_P = {
    'Bubble Sort': BubbleSortP,
    'Selection Sort': SelectionSortP,
    'Insertion Sort': InsertionSortP,
    'Merge Sort': MergeSortP,
    'Quick Sort': QuickSortP,
    
    'Heap Sort': HeapSortP,
    'Shell Sort': ShellSortP
  };

  componentDidMount() {
    this.generateRandomArray();
  }
  

  generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        trace: []
      },
      this.createTrace
    );
  };

  deletewholeArray = (array) => {
    while(array){
    array.pop();}
    this.setState(
      {
        array:[],
        trace: []
      },
      this.createTrace
    );
  };

  deleteArray = (array) => {
    this.state.array.pop();
    this.setState(
      {
        array:[...this.state.array],
        trace: []
      },
      this.createTrace
    );
  };
  insertwithIndex=(array ,index)=>{
    let y = document.getElementById("array2").value;
    let c = parseInt(y);
    let b = document.getElementById("index").value;
    let d = parseInt(b);
    /*console.log(array.join()); 
array.splice(d, 0, c);
console.log(array.join());*/

//array.insert(d,c);

//just to avoid error
this.state.array.push(c);
    this.setState(
      {
        array:[...this.state.array],
        trace: []
      },
      this.createTrace
    );
  }

  insertArray =(array) => {
    
    let y = document.getElementById("array").value;
    let c = parseInt(y)

    this.state.array.push(c);
    this.setState(
      {
        array:[...this.state.array],
        trace: []
      },
      this.createTrace
    );
    //console.log(array)
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  };
  
  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({ arraySize: size }, this.generateRandomArray);
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  toggleDrawer = () => {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen
    }));
  };

  render() {
    let theme = `Khwarizmi`;
    if (this.state.drawerOpen) theme += ` Khwarizmi_modal_open`;

    const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
    const desc = this.ALGORITHM_DESC[this.state.algorithm];
    const desP = this.ALGORITHM_P[this.state.algorithm];
    

    const controls = (


      <Controls
        onGenerateRandomArray={this.generateRandomArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        insertArray={this.insertArray}
        insertwithIndex={this.insertwithIndex}
        deleteArray={this.deleteArray}
        deletewholeArray={this.deletewholeArray}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
      />
    );

    return (
      <div className={theme}>
        <TopBar
          drawerOpen={this.state.drawerOpen}
          toggleDrawer={this.toggleDrawer}
        >
          {controls}
        </TopBar>

        <Drawer
          open={this.state.drawerOpen}
          closeDrawer={this.toggleDrawer}
        >
          {controls}
        </Drawer>

        <main className="Khwarizmi__Body">
          <SortVisualizer
            array={this.state.array}
            trace={this.state.trace}
            colorKey={colorKey}
            desc={desc}
            desP={desP}
          />
        </main>
      </div>
    );
  }
}

export default Khwarizmi;