const numbers = [99, 44, 0, 2, 1, 283, 44, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }

  const half = array.length / 2
  const left = array.slice(0, half)
  const right = array.slice(half)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  const merged = []
  let currentLeft = left[0]
  let currentRight = right[0]
  let leftCounter = 1
  let rightCounter = 1

  while (currentLeft != undefined || currentRight != undefined) {
    if (currentRight === undefined || currentLeft <= currentRight) {
      merged.push(currentLeft)
      currentLeft = left[leftCounter]
      leftCounter++
    } else {
      merged.push(currentRight)
      currentRight = right[rightCounter]
      rightCounter++
    }
  }

  return merged
}

const answer = mergeSort(numbers);
console.log(answer);
