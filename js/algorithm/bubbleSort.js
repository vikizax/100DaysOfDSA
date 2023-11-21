/**
 * 
 * @param {Number[]} array 
 * @description `
 *  time O(n*n)
 *  space O(1)
 * `
 */
function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                swapped = true
            }
        }
        if (!swapped)
            break;
    }
}

const toSort = [64, 90, 34, 25, 12, 22, 11]
console.log({ beforeSorting: toSort })
bubbleSort(toSort)
console.log({ afterSorting: toSort })