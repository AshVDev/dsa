let arr = [1, 4, 6, 2, 3, 8, 9, 9];
let largest = 0;
let secLargest = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secLargest = largest;
    largest = arr[i];
  } else {
    if (arr[i] > secLargest && arr[i] !== largest) secLargest = arr[i];
  }

  //   if (arr[i] < largest && arr[i] > secLargest) {
  //     secLargest = arr[i];
  //   }
}

console.log(secLargest, largest);
