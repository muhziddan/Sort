const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

    for (let i = array.length - 1; i >= 0; i--) {
        let checkerA = 0
        let checkerB = 1
        while (checkerB <= i) {
            if (array[checkerA] > array[checkerB]) {
                const valueA = array[checkerA]
                const valueB = array[checkerB]
                array[checkerA] = valueB
                array[checkerB] = valueA
            }
            checkerA++
            checkerB++
        }
    }

    return array
}

console.log(numbers)
console.log(bubbleSort(numbers))
