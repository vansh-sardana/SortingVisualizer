const quickSort = (arr, left, right, arraySteps, colorSteps, colorKey) => {
  const partition = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      colorKey[j] = 1; // Mark the current element for comparison
      colorKey[high] = 0; // Mark the pivot element
      arraySteps.push(arr.slice());
      colorSteps.push(colorKey.slice());
      colorKey[j] = 0; // Reset current element color

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap

        // Update colors for the swapped elements
        colorKey[i] = 1; // Mark the swapped element
        colorKey[j] = 1; // Mark the swapped element
        arraySteps.push(arr.slice());
        colorSteps.push(colorKey.slice());
        colorKey[i] = 0; // Reset swapped element color
        colorKey[j] = 0; // Reset swapped element color
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    colorKey[i + 1] = 2; // Mark the final position of the pivot as sorted
    arraySteps.push(arr.slice());
    colorSteps.push(colorKey.slice());
    return i + 1;
  };

  if (left < right) {
    let pi = partition(arr, left, right);
    quickSort(arr, left, pi - 1, arraySteps, colorSteps, colorKey);  // Left partition
    quickSort(arr, pi + 1, right, arraySteps, colorSteps, colorKey); // Right partition
  }

  // Reset colors for the last step
  colorKey.fill(2);
  colorSteps[colorSteps.length - 1] = colorKey.slice();
};

export default quickSort;
