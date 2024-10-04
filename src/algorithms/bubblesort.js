const bubbleSort = (arr, position, arraySteps, colorSteps, colorKey) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let changed = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        changed = true;
      }
      arraySteps.push(arr.slice());
      colorKey[j]= 1;
      colorKey[j+1]= 1;
      colorSteps.push(colorKey.slice());
      colorKey[j]= 0;
      colorKey[j+1]= 0;
    }
    colorKey[n-i-1]= 2;
    arraySteps.push(arr.slice());
    colorSteps.push(colorKey.slice());
    if (!changed) break;
  }
  colorKey.fill(2);
  colorSteps[colorSteps.length-1]= colorKey.slice();
};

export default bubbleSort;