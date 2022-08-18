const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

    for (let i = array.length - 1; i >= 0; i--) {
        let checker = 0
        while (checker + 1 <= i) {
            if (array[checker] > array[checker + 1]) {
                const valueHolder = array[checker]
                array[checker] = array[checker + 1]
                array[checker + 1] = valueHolder
            }
            checker++
        }
    }

    return array
}

console.log(bubbleSort(numbers))
