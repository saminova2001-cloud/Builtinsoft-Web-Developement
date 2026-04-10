console.log("hallo friends")

//  variables  = are container to store values / data types

// const variablename = value

// datatypes

const myName = "Awais";
const myAge = 'twenty four'

const myAge2 = 24


const isLogIn = false;

let myAName=undefined;


 myName3 = "ameer hamza"

const value1= null

console.log(myName)


const  webName = "clothing vibes . touqeer"

console.log(webName)
  
{
    let name2 = "ameer hamza"
    name2 = "hamza"
    console.log(name2)
}

const lastName= "harrynova"

console.log(lastName)

console.log(myAge)

console.log(myAge2)

console.group(isLogIn)

console.log(myAName)

addres="polo ground"

console.log(addres)

console.log(value1)

let country=1122
console.log(country)

var no = 9980;
console.log(no)

let x= "logo"
console.log(x)

const NAME = "Awais Hameed"

console.log(NAME)


// objects


// operators(arithmatics, Assignment, comparison, logical)

// arithmatic operators(+, -, *, /, ++, --)

let num1=10
let num2=20

++num1
const result = num1 * num2
console.log(result)

// assignment operators(=, +=, -=, *=, /=, ++=, --)

let NUM3 = 10
NUM3 += 5
console.log(NUM3)

let num4=55
num4 += 5
console.log(num4)


// comparison Operators (== (When values are equal), === (equal values and data types), !=, !==, >, <, >=, <=)
// ===()

let comp1  = 10
let comp2 = 10

let compResult = comp1 != comp2

console.log(compResult)

// logical Operators (&&,||)

if(comp1 > 5 && comp2 == '10' )
{
    console.log("both conditions are true")
}

// conditional statement

// if(condition)
// {
//    body statement
// 


let sch=25500
let fee=55700

const result2 = sch + fee

console.log(result2)

const diff = fee - sch

console.log(diff)

const mul = sch * fee

console.log(mul)

const div = fee/sch

console.log(div)
const dec= ++sch + fee
const inc= --sch + fee

console.log(inc)

// assignment practice

let a1 = 4422
let a2 = 2244

a1 += 89

console.log(a1)

a2 -= 1122

console.log(a2)

a1 *= 20
console.log(a1)

a1 /= 20

console.log(a1)

a1 += 2

console.log(a1)

let eqt = a1 == a2

console.log(eqt)

let neqt = a1 != a2

console.log(neqt)

let eqeqt = a1 ===2

console.log(eqeqt)

let geqt = a1 >= a2

console.log(geqt)

let leqt = a2<=a1

console.log(leqt)

if (a1>a2 && a2 == '1122')
{
    console.log("lalala")
}

if(a1>=2244 || a2 <=1122)
{
    console.log("ha ha ha")
}

let Yea = 19

if (Yea > 18) {
    console.log("you're an adult ")
}
let years = 90
if(years == 18)
{
    console.log("your'e an adult")
}

else if(years < 5)
{
    console.log("you're a teenager")
}
else {
    console.log("budhe hogaye ho")
}


let day = "friday";

if( day == "monday")
{
    console.log("it's start of the week")
}

else if(day == "friday")
{
    console.log("it's about the mid of the  week")
}

else{
    console.log("it's weekened")
}

// switch statement

switch (day)
{
    case "monday":
       console.log("it's start of week")
       break;
    case "friday":
       console.log("mid of week")
       break;
    default:
        console.log("it;s weekend")
}

// loops (for, while, Do-While)
//  for ( when you know the number of iteration)
// for("initialization, condition, and afterthought"){
// } 


console.log("num 1",1)
console.log("num2", 2)
console.log("num3",3)
console.log("num4",4)

for(let start = 1; start <=5; start++)
{
    console.log('hello awais hameed', start)
}

// while ( when you don't know about the number of iterations)

let startname = 1

const endnum = prompt("enter a number")

while(startname <= endnum)
{
    console.log("while loop",startname)
    startname++
}

do{
    console.log('do-while loop',startname)
    startname++
} while(startname <= 10)


// for-in

// const person = {
    // name: "awais hameed"
    // age: 20,
    // address: "ryk"
// }

// for out


// functions Functions in JavaScript are reusable blocks of code designed to perform
//  specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.

// function xyz ("parameters"){
    // return
// }

// xyz arguents

function printName(name){
    let date = new Date()
    let age1  = date.getFullYear()
    console.log('hello my name is $ (name)',name, date.getFullYear())
}
printName('awais')


function Name(nama){
    console.log('mein nama ist awais hameed ',nama)
}
Name("awais")

function add(a,b){
    return a+b; 
}
 console.log(add(2,77))