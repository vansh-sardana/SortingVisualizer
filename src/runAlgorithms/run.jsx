const run = async (curr, setArrProp, prop) => {
    const { colorSteps, arraySteps } = curr;
    const len = arraySteps.length;
    for (let i = 0; i < len; i++) {
      setArrProp({arr: arraySteps[i], colorKey: colorSteps[i]});
      await delay(prop.delay);
    }
  };
  
  const delay = (tmsec) => {
    return new Promise((resolve) => setTimeout(resolve, tmsec));
  };
  
  export default run;