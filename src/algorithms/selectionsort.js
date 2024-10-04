const selectionSort = (arr, position, arraySteps, colorSteps, colorKey) => {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      colorKey[i] = 1;
  
      arraySteps.push(arr.slice());
      colorSteps.push(colorKey.slice());
  
      for (let j = i + 1; j < n; j++) {
        colorKey[j] = 1;
        arraySteps.push(arr.slice());
        colorSteps.push(colorKey.slice());
  
        if (arr[j] < arr[minIndex]) {
          if (minIndex !== i) {
            colorKey[minIndex] = 0;
          }
          minIndex = j;
          colorKey[minIndex] = 3;
        } else {
          colorKey[j] = 0;
        }
      }
  
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      colorKey[minIndex]= 0;
      colorKey[i] = 2; // Mark the sorted element
      arraySteps.push(arr.slice());
      colorSteps.push(colorKey.slice());
    }
  
    colorKey.fill(2);
    arraySteps.push(arr.slice());
    colorSteps.push(colorKey.slice());
  };
  
  export default selectionSort;
  