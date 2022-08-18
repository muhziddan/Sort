const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let position = 0
        let minimumValue = array[i]
        for (let j = i + 1; j < array.length; j++) {
            if (minimumValue > array[j]) {
                minimumValue = array[j]
                position = j
            }
        }
        array[position] = array[i]
        array[i] = minimumValue
    }

    return array
}

console.log(selectionSort(numbers))
