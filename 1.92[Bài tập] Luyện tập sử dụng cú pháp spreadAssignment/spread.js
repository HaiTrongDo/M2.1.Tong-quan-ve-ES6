//
// function replace(array, from, to, elements) {
//     // array.splice.apply(array, [from, to - from].concat(elements))
//     array.splice(from,to - from,...elements)
//
//     return array
// }
//
// let testArray = [1, 2, 100, 100, 6]
// replace(testArray, 2, 4, [3, 4, 5])
// console.log(testArray)///[1, 2, 3, 4, 5, 6]
//
// function copyReplace(array, from, to, elements) {
//     // return array.slice(0, from).concat(elements).concat(array.slice(to))
//     array.splice(from,to-from,...elements)
//     return array;
// }
// console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))


let customerOrder = []
function recordOrders(time,...birds) {
    // customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
    // customerOrder.push({time,bird:[...birds]})
    customerOrder.push({time,bird:birds})
}

recordOrders(new Date, "coffee", "yoghurt", "pizza")
console.log(customerOrder)