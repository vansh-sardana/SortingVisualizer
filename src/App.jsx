import React, { useEffect, useState } from 'react'

const App = () => {
  const obj= {
    count:10,
    arr:[],
    mini: 50,
    maxi: 200
  };
  const [curr, setCurr]= useState(obj);
  const randomNum= (mini, maxi)=>{
    return Math.floor(Math.random()*(maxi-mini+1) + mini);
  };
  const createArr= ()=>{
    let temp=[];
    for(let i=0; i<obj.count; i++){
      temp.push(randomNum(curr.mini, curr.maxi));
    }
    console.log(temp);
    curr.arr=temp;
  };
  useEffect(()=>{
    createArr();
  }, []);
  return (
    <div>App</div>
  )
}

export default App