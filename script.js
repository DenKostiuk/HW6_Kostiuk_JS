let sum1 = ([]); // 0
let sum2 = ([1, 2, 3]); // 6
let sum3 = ([5, 0, 10, 1, 5, null, 'some string']); // 21


function calcSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) == true) { 
            continue
        }
        else { 
            sum += Number(array[i]) 
        }
    }
    console.log(sum);
}
calcSum(sum1);
calcSum(sum2);
calcSum(sum3);