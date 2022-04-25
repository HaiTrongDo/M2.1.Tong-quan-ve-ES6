const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]

let totalMachineValue = (arr) => {
    let total = 0
    arr.forEach((element) => {
        if (element.type === 'machine') {
            total += element.value;
        }
        return total;
    } )
    return total;
}

console.log(totalMachineValue(inventory))

