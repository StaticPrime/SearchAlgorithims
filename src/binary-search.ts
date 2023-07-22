function binarySearch(arr: number[], num: number): number {
    let leftPointer = 0
    let rightPointer = arr.length - 1
    let middlePointer: number

    while (leftPointer < rightPointer) {
        middlePointer = Math.ceil((leftPointer + rightPointer) / 2)
        if (arr[middlePointer] === num) return middlePointer

        if (arr[middlePointer] > num) {
            rightPointer = middlePointer - 1
        } else {
            leftPointer = middlePointer + 1
        }
    }
    return -1
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binarySearch(testArray, 6))

export { binarySearch }