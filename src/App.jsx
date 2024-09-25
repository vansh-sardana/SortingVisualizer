import React, { useEffect, useState } from 'react'
import Bar from './components/Bar';
import './App.css'
import Forwards from '@mui/icons-material/SkipNextRounded';
import Play from '@mui/icons-material/PlayCircleOutlineRounded'
import Backwards from '@mui/icons-material/SkipPreviousRounded'
import RotateLeft from '@mui/icons-material/RotateLeft'

const App = () => {

  const bubbleSort = async (arr) => {
    const n = arr.length;
    let currColors= curr.colorKey;
    for (let i = 0; i < n - 1; i++) {
      let changed = false;
      for (let j = 0; j < n - i - 1; j++) {
        currColors[j]= 1;
        currColors[j+1]= 1;
        if (arr[j + 1] < arr[j]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          changed = true;
        }
        setCurr({ ...curr, arr, colorKey: currColors });
        await delay(curr.delay);
        currColors[j]= 0;
        currColors[j+1]= 0;
        setCurr({ ...curr, colorKey: currColors});        
      }
      await delay(curr.delay/10);
      currColors[n-i-1]= 2;
      setCurr({ ...curr, colorKey: currColors});
      if (!changed){
        setCurr({ ...curr, colorKey: currColors});
        return;
      }
    }
  };

  const delay= async(tmsec)=>{
    await new Promise((resolve, reject) => {
      setTimeout(resolve, tmsec);
    });
  }


  const obj = {
    count: 10,
    arr: [],
    arraySteps: [],
    colorSteps: [],
    currStep: 0,
    delay: 500,
    algorithm: 'Bubble Sort',
    timeouts: [],
    mini: 50,
    maxi: 200,
    colorKey: []
  };
  const [curr, setCurr] = useState(obj);
  const randomNum = (mini, maxi) => {
    return Math.floor(Math.random() * (maxi - mini + 1) + mini);
  };
  const createArr = () => {
    let temp = [];
    let colorK=[];
    for (let i = 0; i < obj.count; i++) {
      temp.push(randomNum(curr.mini, curr.maxi));
      colorK.push(0);
    }
    setCurr({ ...curr, arr: temp, colorKey: colorK });
  };
  useEffect(() => {
    createArr();
  }, []);

  const algorithms = {
    'Bubble Sort': bubbleSort,
  }

  const arrayChange = (value, index) => {
    let arr = curr.arr;
    arr[index] = value;
    setCurr({ ...curr, arr, arraySteps: [arr], currStep: 0 });
  }
  const startHandler = () => {
    algorithms[curr.algorithm](curr.arr);
  }
  return (
    <div className='App'>
      <div className="frame">
        <div className="barsDiv container card">
          {
            curr.arr.map((value, index) => (
              <Bar length={value} key={index} index={index} color={curr.colorKey[index]} changeArray={arrayChange} />
            ))
          }
        </div>
      </div>
      <div className="control-panel">
        <div className="control-buttons">
          <button className='controller'>
            <Backwards></Backwards>
          </button>
          <button className='controller' onClick={startHandler}>
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