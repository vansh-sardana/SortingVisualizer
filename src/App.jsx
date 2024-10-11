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
import mergeSort from './algorithms/mergesort';
import Board from './components/Board'
import AlgoFrame from './components/AlgoFrame';


const App = () => {
  //Declarative part
  const algorithms = {
    'Bubble Sort': bubbleSort,
    'Insertion Sort': insertionSort,
    'Quick Sort': quickSort,
    'Selection Sort': selectionSort,
    'Merge Sort': mergeSort,
  }
  const [algo, setAlgo] = useState("Bubble Sort");
  const customDelay= useRef(2000);
  const [prop, setProp] = useState({
    count: 10,
    delay: 500,
    mini: 50,
    maxi: 200,
  });
  const timeouts = useRef([]);
  const [isSorting, setIsSorting] = useState(false);
  const [arrProp, setArrProp] = useState({
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
    clearTimeouts();
    let temp = [];
    let colorK = [];
    for (let i = 0; i < prop.count; i++) {
      temp.push(randomNum(prop.mini, prop.maxi));
      colorK.push(0);
    }
    setArrProp({ arr: temp, colorKey: colorK });
    setCurr({
      colorSteps: [],
      arraySteps: [],
      currStep: 0,
    });
  };

  useEffect(() => {
    createArr();
  }, [prop.count]);

  const handleAlgoChange = (e) => {
    setAlgo(e.target.value);
    createArr();
  };

  //To generate the sorting algo steps in form of array
  const generateSteps = () => {
    let arr = arrProp.arr.slice();
    let steps = [];
    let colorSteps = [];
    let colorKey = arrProp.colorKey.slice().fill(0);
    if (algo === 'Quick Sort') {
      algorithms[algo](arr, 0, arr.length - 1, steps, colorSteps, colorKey);
    } else {
      algorithms[algo](arr, 0, steps, colorSteps, colorKey);
    }
    setCurr({ ...curr, arraySteps: steps, colorSteps });
  }
  useEffect(() => {
    if (arrProp.arr.length > 0) {
      generateSteps();
    }
  }, [arrProp.arr, algo]);

  const clearColorKey= ()=>{
    let blankKey= new Array(prop.count).fill(0);
    setArrProp({...arrProp, colorKey: blankKey});
    setCurr({...curr, colorSteps: [blankKey]});
  };

  const clearTimeouts= ()=>{
    timeouts.current.forEach((e)=>clearTimeout(e));
    timeouts.current= [];
  };

  const arrayChange = (value, index) => {
    clearTimeouts();
    let arr = [...arrProp.arr];
    arr[index] = value;
    let colorKey = [...arrProp.colorKey];
    colorKey.fill(0);
    setCurr({
      colorSteps: [],
      arraySteps: [],
      currStep: 0,
    });
    setArrProp({ arr, colorKey });
  };
  const startHandler = async () => {
    run(curr, setArrProp, prop, timeouts, clearTimeouts, clearColorKey);
  }
  const optionsChangeHandler = (event) => {
    setProp({...prop, count: event.target.value});
  };
  return (
    <div className='App relative bg-[#111] min-w-full min-h-[100vh] flex flex-col items-center overflow-hidden p-3'>
      <h1 className="nunito-700 text-center text-6xl text-white p-10 relative z-20 bg-transparent pointer-events-none sm:text-5xl xs:text-4xl">Sorting Visualizer</h1>
      <div className="frame relative z-20 pointer-events-none">
        <div className="barsDiv container card bg-[#1d1d1d] min-h-[400px] h-fit p-[70px] pb-[110px] w-fit m-0  pointer-events-none">
          {
            arrProp.arr.map((value, index) => (
              <Bar length={value} key={index} index={index} color={arrProp.colorKey[index]} changeArray={arrayChange} />
            ))
          }
        </div>
      </div>
      <div className="control-panel flex flex-col gap-2 nunito-700 relative z-20 text-white  pointer-events-none">
        <div className='flex gap-10 grow flex-wrap justify-center items-center'>
          <div className="algorithm-selection bg-transparent m-5 pointer-events-auto">
            <label htmlFor="algorithm-select">Choose Algorithm: </label>
            <select id="algorithm-select" value={algo} onChange={handleAlgoChange} className='bg-transparent'>
              {
                Object.keys(algorithms).map((algo, index) => (
                  <option key={index} className='bg-[#111]' value={algo}>{algo}</option>
                ))
              }
            </select>
          </div>
          <div className='flex gap-4 justify-center items-center pointer-events-auto'>
            <label htmlFor="count">Length</label>
            <input type="range" name="len" id="count" min="2" max="20" className="slider" step="1" onChange={optionsChangeHandler} value={prop.count} style={{backgroundSize: (prop.count-1)*100/(19)+'% 100%'}}  />
          </div>
          <div className='flex gap-4 justify-center items-center pointer-events-auto'>
            <label htmlFor="speed">Speed</label>
            <input type="range" id="speed" min="1" max="15" className="slider" step="1" onChange={(e)=>{
              setProp({...prop, "delay": (customDelay.current/e.target.value)});
              clearTimeouts();
              }} value={ (customDelay.current/prop.delay)} style={{backgroundSize: (customDelay.current/prop.delay-1)*100/(14)+'% 100%'}}  />
          </div>
        </div>

        <div className="control-buttons text-white bg-transparent">
          <button className='controller pointer-events-auto'>
            <Backwards></Backwards>
          </button>
          <button className='controller pointer-events-auto' onClick={startHandler} disabled={isSorting}>
            {
              (curr.currStep === curr.arraySteps.length) ? <RotateLeft /> : <Play />
            }
          </button>
          <button className='controller pointer-events-auto'>
            <Forwards></Forwards>
          </button>
        </div>
      </div>
      <div className="panel"></div>
      <Board/>
      <AlgoFrame algo={algo}/>
    </div>

  )
}

export default App