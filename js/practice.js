let k = 1122

do {
    console.log("sadiqabad 1122")
    k++
}
while (k <= 1123)

let i = 1;
while (i <= 5) {
    console.log("hello");
    i++;
}

let j = 1;

while (j <= 4) {
    console.log("visa  confirms")
    j++
}

// switch statement

let fruit = 'apple';

switch (fruit) {
    case 'mango':
        console.log("1 kg mangoes cost 5 $")
        break;

    case 'banana':
        console.log("1 dozen of banana sosts 3 $")
        break;

    case 'apple':
        console.log("1kg of sweet  apples cost 1 $")
        break;

    default:
        console.log("fruits are  not available")

}

// check Multiple of number(5)
// number % 5 == 0

// let num = prompt("enter a num");

// if (num % 5 == 0)
// {
//     console.log("number is multiple of 5")
// }
// else(
//     console.log("number is not multiple of 5")
// )


// array-from

let animal = "doggy"
let arr = Array.from(animal)
console.log(arr)

// for-of

let array = [1, 2, 3, 4, 5]

for (arr of array) {
    console.log(arr)
}

// for-in

for (item in array) {
    console.log(array[item])

}

// Functions

console.log("hello function")

console.log('abc'.toUpperCase())

A = [1, 2, 3, 4].push(5);
console.log(A)

// to  make  function:
// 1.  funstion definition
// Function function name{
//     block of statement
// } 
// 2. function call
// function nme();

function myFunction() {
    console.log("this is my  funnction")
    console.log("we are  learning js")
}

myFunction();

// Inputs are parameters

function message(msg, n) {
    console.log(msg, n)
}
// arguements are values/information put in parameters(awais here plz)
message("Awais  here plz  ", 60)
// N O N Error  means not a  number

function sum(x, y) {
    console.log(x + y)
}

sum(12, 21)

function prod(a, b) {
    console.log(a * b)
    return prod;
}
prod(12, 2)

// Arrow function

const arrowDivide = (c, d) => {
    console.log(c + d);
};
// arrowDivide(12, 24);

let printhell0 = () => {
    console.log("Hello World");
};

let kiyahoa = () => console.log("kuch bhi to nhi");

// vowel counter  

function countVowels(str) {
    let count = 0
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
        console.log(count)
    }
}

let count = (str) => {
    let count = 0
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
        console.log(count)
    }
}

let class={
    name:awais,
    age:20,
    grade: ,
}