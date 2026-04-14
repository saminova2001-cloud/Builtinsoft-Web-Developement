// Q1
// FOR LOOP:
//           FOR Loop is used to execute the block of code in 
// repetition for a speecific number of times on agiven condition.
//  syntax:
//     for (initialization; condition; increment/decrement){
//          block of code 
//      } 

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Q2
// ANS

let a = 5

while (a <= 15) {
    console.log(a)
    a++
}

// Q3
// ANS

let b = 1
do {
    console.log(b)
    b++
}
while (b <= 5);

// Q4
// ANS
    
     for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Q5
// ANS

    for(let e=1; e<= 20; e++){
        if(e%2===0){
            continue;
        }
        console.log(e)
    }

// Q6
// ANS: Function:  
//                  Function is a block of code that performs 
// specific task and can be used again whenever needed.

//     function functionName(parameters)
//          code execute
//      }

function add(a,b)
{
     return a+b;
}

    let result = add(5,7);
    console.log(result);

    // Q7
    // ANS:

    function isEven(num){ 
    if(num % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(4))
console.log(isEven(7))

// Q8
// ANS

function greet(name, message = "Hello") {
    console.log(message + " " + name);
}

// Calling with both arguments
greet("Ali", "Hi");

// Calling with only one argument
greet("Sara");

// Q9
// ANS: Function:
//               A function expression is a function that is stored 
// in a variable.

    const multiply = function(a, b) {
    return a * b;
    }

console.log(multiply(6, 3));

// Q10
// ANS:

     function sayHello() {
    console.log("Hello");
}

for (let i = 1; i <= 5; i++) {
    sayHello();
}

// Q11
// ANS

function iseven(num){
    if (num % 2 == 0){
        console.log("even")
    }
    else{
       console.log("odd") 
    }
}