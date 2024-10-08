const mergeSort = (arr, position, arraySteps, colorSteps, colorKey) => {
    const merge = (left, mid, right) => {
      const leftArr = arr.slice(left, mid + 1);
      const rightArr = arr.slice(mid + 1, right + 1);
      let i = 0, j = 0, k = left;
  
      // Highlight the current partition being merged
      for (let x = left; x <= mid; x++) {
        colorKey[x] = 3; // Yellow for the left subarray
      }
      for (let x = mid + 1; x <= right; x++) {
        colorKey[x] = 4; // Orange for the right subarray
      }
      arraySteps.push(arr.slice());
      colorSteps.push(colorKey.slice());
  
      // Merge the two halves into one array
      while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        k++;
  
        // Visualize the progress of merging
        arraySteps.push(arr.slice());
        colorSteps.push(colorKey.slice());
      }
  
      // Add remaining elements of leftArr
      while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
        arraySteps.push(arr.slice());
        colorSteps.push(colorKey.slice());
      }
  
      // Add remaining elements of rightArr
      while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
        arraySteps.push(arr.slice());
        colorSteps.push(colorKey.slice());
      }
  
      // Mark the fully merged section as sorted (green)
      for (let x = left; x <= right; x++) {
        colorKey[x] = 2; // Green to mark sorted subarray
      }
      arraySteps.push(arr.slice());
      colorSteps.push(colorKey.slice());
    };
  
    const sort = (left, right, depth = 0) => {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);
  
        // Mark the current level (tree depth) with alternating yellow and orange
        for (let i = left; i <= mid; i++) {
          colorKey[i] = 3; // Yellow for left half
        }
        for (let i = mid + 1; i <= right; i++) {
          colorKey[i] = 4; // Orange for right half
        }
        arraySteps.push(arr.slice());
        colorSteps.push(colorKey.slice());
  
        sort(left, mid, depth + 1);      // Recurse on left half
        sort(mid + 1, right, depth + 1); // Recurse on right half
  
        merge(left, mid, right);         // Merge the two halves
      }
    };
  
    sort(0, arr.length - 1);

    colorKey.fill(2); 
    arraySteps.push(arr.slice());
    colorSteps.push(colorKey.slice());
  };
  
  export default mergeSort;
  