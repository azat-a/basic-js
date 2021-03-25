module.exports = function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new TypeError;
  }

  const transformedArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === "--double-prev") {
      if (transformedArr.length > 0) {
        transformedArr.push(transformedArr[i - 1]);
      }
    }

    else if (arr[i] === "--discard-prev") {
      if (transformedArr.length > 0) {
        transformedArr.pop();
      }
    }

    else if (arr[i] === "--double-next") {
      if ( arr.length > i + 1) {
        transformedArr.push(arr[i + 1]);
        transformedArr.push(arr[i + 1]);
        i += 1;
        continue;
      }
      continue;
    }

    else if (arr[i] === "--discard-next") {
      i += 1;
      continue;
    }
    else {
      transformedArr.push(arr[i]);
    }
    
    
  }
  return transformedArr;
};
