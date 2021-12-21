let sum1 = ([]); // 0
let sum2 = ([1, 2, 3]); // 6
let sum3 = ([5, 0, 10, 1, 5, null, 'some string']); // 21
let sum4 = ([0, 7, 10, NaN, 1, 5, 'some string']); 
let sum5 = ([5, 10, 10, Infinity, 1, 5, undefined, 'some string']); 

function calcSum(array) {
    let sum = 0;
    array.forEach(function calcSum(currentValue) {
        if (isFinite(currentValue)) {
            sum += currentValue;
        }
    });

    return sum;
}

console.log(calcSum(sum1));
console.log(calcSum(sum2));
console.log(calcSum(sum3));
console.log(calcSum(sum4));
console.log(calcSum(sum5));