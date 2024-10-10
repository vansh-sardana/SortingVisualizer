import React, { useEffect, useState } from 'react'
import Square from './Square';

const Board = () => {
  const [numSquares, setNumSquares] = useState(0);

  const calculateNumSquares = () => {
    const squareSize = 20; // Set the square size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const numColumns = Math.floor(screenWidth / squareSize);
    const numRows = Math.floor(screenHeight / squareSize);

    setNumSquares(numColumns * numRows);
  }
  useEffect(() => {
    calculateNumSquares();
    window.addEventListener('resize', calculateNumSquares);
    return () => window.removeEventListener('resize', calculateNumSquares);
  }, []);
  
  return (
    <div className='flex justify-center items-center w-full flex-wrap fixed top-0 z-10'>
      {
        Array.from({length: numSquares}).map((_, index)=>{
          return <Square key={index}></Square>
        })
      }
    </div>
  )
}

export default Board