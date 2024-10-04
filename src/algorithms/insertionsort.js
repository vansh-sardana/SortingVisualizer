const insertionSort = (arr, position, arraySteps, colorSteps, colorKey) => {
  const n = arr.length;
  arraySteps.push(arr.slice());
  colorKey[0]= 2;
  colorSteps.push(colorKey.slice());
  for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      colorKey[i] = 1; 
      arraySteps.push(arr.slice());
      colorSteps.push(colorKey.slice());
      colorKey[i]=2;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          arr[j]= key;
          j = j - 1;
          colorKey[j + 1] = 1;
          
          arraySteps.push(arr.slice());
          colorSteps.push(colorKey.slice());

          colorKey[j + 1] = 2;
      }
      arr[j + 1] = key;
      colorKey[j + 1] = 2;

      arraySteps.push(arr.slice());
      colorSteps.push(colorKey.slice());
  }

  // Reset colors for the last step
  colorKey.fill(2);
  colorSteps[colorSteps.length - 1] = colorKey.slice();
};

export default insertionSort;
