const quickSort = (arr, left, right, arraySteps, colorSteps, colorKey) => {
  const partition = (low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    // Mark the pivot element in red
    colorKey[high] = 1; // Pivot is red
    arraySteps.push(arr.slice());
    colorSteps.push(colorKey.slice());

    for (let j = low; j < high; j++) {
      // Mark elements as they are compared
      if (arr[j] < pivot) {
        i++;
        // Swap the elements
        [arr[i], arr[j]] = [arr[j], arr[i]];

        // Mark elements less than the pivot in yellow
        colorKey[i] = 3;  // Yellow
        colorKey[j] = 3;  // Yellow
      } else {
        // Mark elements greater than pivot in orange
        colorKey[j] = 4;  // Orange
      }
      arraySteps.push(arr.slice());
      colorSteps.push(colorKey.slice());
    }

    // Swap the pivot to its correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    // Mark only the pivot as green
    colorKey[high] = 0;  // Turn the old pivot position back to blue
    colorKey[i + 1] = 2;  // Pivot's final position is green

    // Update the colors: turn elements that were previously yellow to yellow
    for (let k = low; k <= high; k++) {
      if (k !== i + 1) {
        // Keep yellow for elements less than the pivot
        if (arr[k] < pivot) {
          colorKey[k] = 3; // Yellow
        } else {
          colorKey[k] = 4; // Orange
        }
      }
    }
    
    arraySteps.push(arr.slice());
    colorSteps.push(colorKey.slice());

    return i + 1;  // Return the index where pivot is placed
  };

  const sort = (low, high) => {
    if (low < high) {
      const pivotIndex = partition(low, high);

      // Recursively sort elements before and after partition
      sort(low, pivotIndex - 1);
      sort(pivotIndex + 1, high);
    }
  };

  sort(left, right);

  // At the end, mark everything as sorted (green)
  colorKey.fill(2);
  arraySteps.push(arr.slice());
  colorSteps.push(colorKey.slice());
};

export default quickSort;
