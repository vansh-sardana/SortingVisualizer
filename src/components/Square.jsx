import React, { useState } from 'react'

const Square = () => {
    //Random Colors Array
    let getRandomColor = ()=>{
        //Selecting Random color from colors array by random number of color index
        return colors[Math.floor(Math.random()* colors.length)]
    }
    const [hovered, setHovered]= useState(false);
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
    const color= getRandomColor();
    const mouseOnHandler= ()=>{
        setHovered(true);
    };
    const mouseOutHandler= ()=>{
        setHovered(false);
    }
    const bShadow= {
        boxShadow: '0 0 2px #000',
    };
    const setColor = {
        bShadow,
        backgroundColor: color,
        boxShadow : `0 0 2px ${color},0 0 10px ${color}`
    }
    
    const removeColor = {
        bShadow,
        backgroundColor : `#111`,
        boxShadow : `0 0 2px #000`,
    }
  return (
    <div className='bg-[#111] h-4 w-4 m-[2px] transition-all duration-[1000] ease-linear hover:duration-0' style={hovered? setColor: removeColor} onMouseOver={mouseOnHandler} onMouseOut={mouseOutHandler}></div>
  )
}

export default Square