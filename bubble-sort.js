function bubbleSort(arr) {
      let swapped = false;

      for(let i = 0; i < arr.length; i++){

        if(arr[i] > arr[i+1]) {
          [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
          console.log(arr.join(","));
          swapped = true
        }
}

        if (swapped) {
          bubbleSort(arr)
      }

      return arr

  // Iterate through the array
      // If the current value is greater than its neighbor to the right
        // Swap those values
    // If you get to the end of the array and swaps have occured, do it again

}

module.exports = bubbleSort;
