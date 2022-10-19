function siempreHambriento(arr) {

    if (!arr.includes('comida')) {
        console.log('Tengo hambre');
        return;
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'comida') {
            console.log('delicioso');
        }
    }

}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

function highPass(arr, cutoff) {
    var filteredArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var count = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > (sum / arr.length)) {
            count++;
        }
    }

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

function reverse(arr) {

    arraux = []

    for (var i = (arr.length - 1); i >= 0; i--) {
        arraux.push(arr[i]);
    }

    arr = arraux;

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];

    for (var i = 2; i < 10; i++) {
        let sum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(sum);
    }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]