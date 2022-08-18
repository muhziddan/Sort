const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minimumPosition = i
        let currentValue = array[i]
        for (let j = i + 1; j < array.length; j++) {
            if (array[minimumPosition] > array[j]) {
                minimumPosition = j
            }
        }
        array[i] = array[minimumPosition]
        array[minimumPosition] = currentValue
    }

    return array
}

console.log(selectionSort(numbers))
