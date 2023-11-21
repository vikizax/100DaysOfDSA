/**
 * 
 * @param {Number[]} array 
 * @param {Number} length 
 */
function bubbleSortRecursive(array, length) {
    if (!Array.isArray(array))
        throw new Error('Invalid array input')

    if (Number.isNaN(Number(length)))
        throw new Error('Invalid array length')

    // base case
    if (length === 1)
        return;

    let swapped = false;

    for (let i = 0; i < length - 1; i++) {

        if (array[i] > array[i + 1]) {

            [array[i], array[i + 1]] = [array[i + 1], array[i]]

            swapped = true;
        }

    }

    if (!swapped)
        return

    bubbleSortRecursive(array, length - 1)
}

const toSort = [64, 90, 34, 25, 12, 22, 11]
console.log({ beforeSorting: toSort })
bubbleSortRecursive(toSort)
console.log({ afterSorting: toSort })