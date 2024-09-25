const bubbleSort = async (curr, setCurr) => {
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

  export default bubbleSort;