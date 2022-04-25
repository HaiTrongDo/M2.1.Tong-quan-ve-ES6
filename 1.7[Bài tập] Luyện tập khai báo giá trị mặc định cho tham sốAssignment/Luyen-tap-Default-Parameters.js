function lastIndexOf(arr, elt, start = arr.length) {

    for (let i = start - 1; i >= 0; i--){
        if (arr[i] === elt) return i
    }
    return -1
}


console.log(lastIndexOf([1, 2, 1, 2], 2))
console.log(lastIndexOf([1, 2, 1, 2], 1))
console.log(lastIndexOf([1, 2, 1, 2,3,2,3,5,8,9,4], 4))

