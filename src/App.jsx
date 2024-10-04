import React, { useEffect, useState, useRef } from 'react'
import Bar from './components/Bar';
import './App.css'
import Forwards from '@mui/icons-material/SkipNextRounded';
import Play from '@mui/icons-material/PlayCircleOutlineRounded'
import Backwards from '@mui/icons-material/SkipPreviousRounded'
import RotateLeft from '@mui/icons-material/RotateLeft'
import bubbleSort from './algorithms/bubblesort'
import insertionSort from './algorithms/insertionsort';
import quickSort from './algorithms/quicksort';
import run from './runAlgorithms/run';
import selectionSort from './algorithms/selectionsort';

const App = () => {
  //Declarative part
  const algorithms = {
    'Bubble Sort': bubbleSort,
    'Insertion Sort': insertionSort,
    'Quick Sort': quickSort,
    'Selection Sort': selectionSort,
  }
  const [algo, setAlgo]= useState("Bubble Sort");
  const [prop, setProp]= useState({
    count: 10,
    delay: 500,
    mini: 50,
    maxi: 200,
  });
  const timeouts= useRef([]);
  const [isSorting, setIsSorting] = useState(false);
  const [arrProp, setArrProp]= useState({
    arr: [], colorKey: [],
  });
  const obj = {
    arraySteps: [],
    colorSteps: [],
    currStep: 0,
  };
  const [curr, setCurr] = useState(obj);

  //initialising array
  const randomNum = (mini, maxi) => {
    return Math.floor(Math.random() * (maxi - mini + 1) + mini);
  };

  const createArr = () => {
    let temp = [];
    let colorK=[];
    for (let i = 0; i < prop.count; i++) {
      temp.push(randomNum(prop.mini, prop.maxi));
      colorK.push(0);
    }
    setArrProp({arr: temp, colorKey: colorK});
    setCurr({
      colorSteps: [], 
      arraySteps: [], 
      currStep: 0, 
    });
  };

  useEffect(() => {
    createArr();
  }, []);

  const handleAlgoChange = (e) => {
    setAlgo(e.target.value);
    createArr();
  };

  //To generate the sorting algo steps in form of array
  const generateSteps= ()=>{
    let arr= arrProp.arr.slice();
    let steps= [];
    let colorSteps= [];
    let colorKey= arrProp.colorKey.slice();
    if (algo === 'Quick Sort') {
      algorithms[algo](arr, 0, arr.length - 1, steps, colorSteps, colorKey);
    } else {
      algorithms[algo](arr, 0, steps, colorSteps, colorKey);
    }
    setCurr({...curr, arraySteps: steps, colorSteps});
  }
  useEffect(() => {
    if (arrProp.arr.length > 0) {
      generateSteps();
    }
  }, [arrProp.arr, algo]);

  const arrayChange = (value, index) => {
    let arr = [...arrProp.arr];
    arr[index] = value;
    let colorKey = [...arrProp.colorKey];
    colorKey.fill(0);
    setCurr({
      colorSteps: [], 
      arraySteps: [], 
      currStep: 0, 
    });
    setArrProp({arr, colorKey});
  };
  const startHandler = async() => {
    setIsSorting(true);
    await run(curr, setArrProp, timeouts);
    setIsSorting(false);
  }
  return (
    <div className='App'>
      <div className="frame">
        <div className="barsDiv container card">
          {
            arrProp.arr.map((value, index) => (
              <Bar length={value} key={index} index={index} color={arrProp.colorKey[index]} changeArray={arrayChange} />
            ))
          }
        </div>
      </div>
      <div className="control-panel">
      <div className="algorithm-selection">
        <label htmlFor="algorithm-select">Choose Algorithm: </label>
        <select id="algorithm-select" value={algo} onChange={handleAlgoChange}>
          {
            Object.keys(algorithms).map((algo, index) => (
              <option key={index} value={algo}>{algo}</option>
            ))
          }
        </select>
        </div>
        <div className="control-buttons">
          <button className='controller'>
            <Backwards></Backwards>
          </button>
          <button className='controller' onClick={startHandler} disabled={isSorting}>
            {
              (curr.currStep === curr.arraySteps.length) ? <RotateLeft /> : <Play />
            }
          </button>
          <button className='controller'>
            <Forwards></Forwards>
          </button>
        </div>
      </div>
      <div className="panel"></div>
    </div>

  )
}

export default App