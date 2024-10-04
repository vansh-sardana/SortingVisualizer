const run = async (curr, setArrProp) => {
    const { colorSteps, arraySteps } = curr;
    const len = arraySteps.length;
    console.log(len);
    for (let i = 0; i < len; i++) {
      console.log("Running step", i);
      setArrProp({arr: arraySteps[i], colorKey: colorSteps[i]});
      await delay(500);
    }
  };
  
  const delay = (tmsec) => {
    return new Promise((resolve) => setTimeout(resolve, tmsec));
  };
  
  export default run;