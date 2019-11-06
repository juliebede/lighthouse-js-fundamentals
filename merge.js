function merge (array1, array2) {
  let arrIndex1 = 0;
  let arrIndex2 = 0
  if (array1.length === 0) {
    return array2;
  } else if (array2.length === 0) {
    return array1;
  } else {
    while (arrIndex1 <= array1.length) {
      if (array1[arrIndex1] >= array2[arrIndex2]) {
        array1.splice(arrIndex1,0,array2[arrIndex2]);
        arrIndex2 += 1
      } 
      arrIndex1 += 1; 
    }
    if (array2.length !== 0) {
      for (let i = arrIndex2; i < array2.length; i++) {
        array1.push(array2[i]);
      }
    }
    return array1;
  }
}

console.log(merge([1,2,2], [2,2,4]))

