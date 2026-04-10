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
