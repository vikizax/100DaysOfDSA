/**
 * 
 * @param {Number[]} arr 
 */
function insertionSort(arr) {
    for (let iterator = 1; iterator < arr.length; ++iterator) {
        const compareValue = arr[iterator]
        let compareIterator = iterator - 1

        while (compareIterator >= 0 && compareValue < arr[compareIterator]) {

            [arr[compareIterator + 1], arr[compareIterator]] = [arr[compareIterator], arr[compareIterator + 1]]

            compareIterator -= 1
        }
    }
}

const toSort = [12, 18, 4, 5, 17]
console.log({ toSort })
insertionSort(toSort)
console.log({ toSort })