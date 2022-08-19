const numbers = [99, 44, 6, 2, 1, 44, 63, 283, 283, 2, 0]
// const numbers = [99, 44, 6, 6, 5, 5]

function insertionSort(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= array[0]) {
            // check the current index with the first value of the array
            // if the current value is lower than the first index, it will be spliced then unshift the spliced value
            array.unshift(array.splice(i,1)[0])
        } else {
            for (let j = 1; j < i; j++) {
                // why j = 1? because if the array/check stage only consist of 2 value, it will be handled from previous if statement
                if (array[i] > array[j-1] && array[i] < array[j]) {
                    array.splice(j,0,array.splice(i,1)[0])
                } else if (array[i] === array[j]) {
                    array.splice(j,0,array.splice(i,1)[0])
                }
            }
        }
    }

    return array
}

console.log(insertionSort(numbers))
