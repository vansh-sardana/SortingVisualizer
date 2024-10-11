import React, { useEffect, useState } from 'react'
import './Bar.css'

const Bar = ({length, index, color, changeArray}) => {
  const [len, setLen]= useState(0);
  const [tempVal, setTempVal]= useState(length);
  useEffect(()=>{
    setLen(length);
    setTempVal(length);
  }, [length]);
  
  const colors = [
    ['rgba(61, 90, 241, 0.5)', 'rgba(61, 90, 241, 0.2)'],   // Blue shades
    ['rgba(255, 48, 79, 1)', 'rgba(255, 48, 79, 0.5)'],     // Red shades
    ['rgba(131, 232, 90, 0.5)', 'rgba(131, 232, 90, 0.2)'], // Green shades
    ['rgba(255, 221, 51, 0.8)', 'rgba(255, 221, 51, 0.5)'], // Brighter Yellow
    ['rgba(255, 140, 0, 0.8)', 'rgba(255, 140, 0, 0.5)']    // Deeper Orange
];

  

  const inputStyle= {
    position: 'relative',
    top: Math.floor(length/2)-12,
    width: length,
    left: -Math.floor(length/2)+13,
    border: 'none',
    background: 'none'
  }
  const bottom= {
    transform: `translateY(${200-length}px) rotateX(-90deg)`,
    backgroundColor: `${colors[color][0]}`,
    boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
    transition: '0.3s'
  }
  const front_back_right_left= {
    height: `${length}px`,
    transform: `translateY(${200-length}px)`,
    backgroundColor: `${colors[color][0]}`,
    boxShadow: `5px 5px 50px 5px ${colors[color][1]}`,
    transition: '0.3s'
  }

  const quantity={
    position: 'relative',
    top: 225
  }
  const incHandler=()=>{
    valueSettler(len+1);
  }
  const decHandler=()=>{
    valueSettler(len-1);
  }

  const valueSettler= (val)=>{
    changeArray(val > 200 ? 200 : (val < 50 ? 50 : val), index);
    setLen(val < 50 ? 50 : (val > 200 ? 200 : val));
  };

  const handleChange= (e)=>{
    let val= e.target.value;
    if(val===""){
      setLen(50);
      changeArray(50, index);
      return;
    }
    val= parseInt(e.target.value);
    valueSettler(val);
  }
  const handleKeyUp= (e)=>{
    if(e.key=='Enter'){
      handleChange(e);
    }
  };

  const handleChangeTemp= (e)=>{
    setTempVal(e.target.value);
  };
  return (
      <div className='bar pointer-events-auto'>
        <div className="side top"></div>
        <div className="side bottom" style={bottom}></div>
        <div className="side right" >
          <div className="color-bar right-color-bar" style={front_back_right_left}></div>
        </div>
        <div className="side left" >
        <div className="color-bar left-color-bar" style={front_back_right_left}></div>
        </div>
        <div className="side front">
          <div className="color-bar front-color-bar"  style={front_back_right_left}>
            <input type="number" name="" id="" length={len} value={tempVal} style={inputStyle} onChange={handleChangeTemp} onKeyUp={handleKeyUp} onBlur={handleChange} onBlurCapture={handleChange}/>
          </div>
        </div>
        <div className="side back">
          <div className="color-bar back-color-bar" style={front_back_right_left}>

          </div>
        </div>
        <div className="quantity-nav">
          <div className="quantity-button quantity-up font-bold text-white hover:opacity-70" style={quantity} onClick={incHandler}>
            {' '}+{' '}
          </div>
          <div className="quantity-button quantity-down font-bold text-white hover:opacity-70" style={quantity} onClick={decHandler}>
          {' '}-{' '}
          </div>
        </div>
      </div>
  )
}

export default Bar