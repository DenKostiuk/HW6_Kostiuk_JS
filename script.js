let array = [1, 2, 3, 4, 5];

function changeFour(array) {
    let newArray = array.slice();
    newArray[3] = 'JavaScript';
    return newArray;
}

let result = changeFour(array);

console.log(array); // [1, 2, 3, 4, 5];
console.log(result); // [1, 2, 3, 'JavaScript', 5];