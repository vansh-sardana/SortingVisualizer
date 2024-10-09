const run = (curr, setArrProp, prop, timeouts, clearTimeouts) => {
  clearTimeouts();

  let touts= [];
    const { colorSteps, arraySteps } = curr;
    const len = arraySteps.length;
    for (let i = 0; i < len; i++) {
      let timeout= setTimeout(()=>{
        setArrProp({arr: arraySteps[i], colorKey: colorSteps[i]});
      }, prop.delay*(i+1));
      touts.push(timeout);
    }
    timeouts.current= touts;
  };
  
  
  export default run;