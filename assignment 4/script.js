// Q1

let num = prompt("enter a number")

if( num > 0)
{
    console.log("The number is positive")
}
else if(num < 0)
{
    console.log("The number is negative")
}
else
    {
    console.log("The number is zero")
}

// Q2

let age = prompt("enter age")

if( age <= 8)
{
    console.log("Child")
}

else if(age < 18)
{
    console.log("Teenager")
}
else if(age >= 18)
{
    console.log("Adult")
}

// Q3

let even_Odd_Num = prompt("enter even/ odd number")

switch(num % 2)
{
    case 1:
        console.log("number is even")
    break;
    default:
        console.log("number is odd")

}

// q4

let marks = prompt("enter your marks")

if(marks > 80)
{
    console.log("grade A")
}
else if(marks > 70)
{
    console.log("grade b")
}
else if(marks > 60)
{
    console.log("grade C")
}
else if(marks <50)
{
    console.log("Fail")
}

// Q5

let a1 = prompt("enter first number")

let a2 = prompt("enter second number")

if(a1 > a2)
{
    console.log("a1 is greater")
}
else if(a2 > a1)
{
    console.log("a2 is greater")
}
else if(a1 == a2)
{
    console.log("both numbers are equal")
}

//  Q6

let userName_d = 32301

var password_d = "pakistan";
 
let userName  = prompt("enter username")
let password  = prompt("enter  password")

if(userName == userName_d && password_d == password)
{
    console.log("Login successful")
}
else{
    console.log("error")
}