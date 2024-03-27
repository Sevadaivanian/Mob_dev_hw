// Первое задание

const firstString = 'Hello'
const secondString = 'World'

function concatenation(first,second){
    const result = first + second
    return result

}
console.log(concatenation(firstString,secondString))
// Второе задание

const arrayOne = ['1','2','3','4','5','6']
let sum = 0
function arrayConcat(array){
    for(let element = 0;element < array.length;element++){
    sum += array[element]
    };
    console.log(sum); 
}

arrayConcat(arrayOne)
// Третье задание

let stringToReverse = 'sevada';
function reverse(string){
let resultOfReverse = string.split('').reverse().join('');
return resultOfReverse;
}
console.log(reverse(stringToReverse))

// Четвертое задание

let stringToReverseTwo = 'fedor';
function reverseTwo(string){
let resultOfReverseTwo = string.split('').reverse().join('');
let resultOfSecondRev = resultOfReverseTwo.charAt(0).toUpperCase() + resultOfReverseTwo.slice(1)
return resultOfSecondRev;
}
console.log(reverseTwo(stringToReverseTwo))

// Пятое задание

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
console.log(getRandom(1,10))

// Шестое задание

const arrayTwo = [1,2,3,4,5,6]
let sumTwo = 0
function arraySum(array){
    for(let elementTwo = 0;elementTwo < array.length;elementTwo++){
    sumTwo += array[elementTwo]
    };
    return sumTwo; 
}
console.log(arraySum(arrayTwo))

// Седьмое задание
const arrayForAver = [1,5,6,8,9]
let arraySumAver = 0
function arrayAverage(array){
    for(let i = 0;i<array.length;i++){
        arraySumAver += array[i]
    }
    return arraySumAver / array.length
}
console.log(arrayAverage(arrayForAver))