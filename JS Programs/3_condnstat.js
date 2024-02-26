// Conditional Statement


// if Statement

// let a = 21;

// if( a >= 21 ){
//     console.log("Able to consume Liquor");
// }

// if (a < 21) {
//     console.log("Unable to consume Liquor");
// }

//If-else Statement
let a = 20;

if( a >= 21 ){
    console.log("Able to consume Liquor");
} 
else  {
    console.log("Unable to consume Liquor");
}

let b= 10

if( b % 2 === 0 ){
    console.log(b,"Even" );
}
else {
    console.log(b,"odd");
}


// else if 
let c = 4;

if ( c < 40 ) {
    console.log(c ,"Fail")
}
else if ( c === 40 ) {
    console.log(c ,"Boundary Pass")
}
else {
    console.log(c ,"Pass")
}

// Ternary Operator
let age =24

let result = age >= 18 ? "adult"  :" not adult ";
let reesult = age >= 18 ? console.log("adult"): console.log(" not adult ");

console.log(age , result)

//Take input and check multiple of 5.  
// let d = prompt("Entre the value");
    
// if ( d % 5 === 0 ){
//         console.log( d , "is multiple of 5");
//     }

// else {
//     console.log(d,"is not multiple of 5")
// }


let marks = prompt("Entre the Marks (0-100)");
let grade;
    
if ( marks <= 80 && marks >= 100 ){
        grade = 'A';
}
else if ( marks>= 70 && marks <= 79){
        grade = 'B';
}
else if ( marks>= 60 && marks <= 69){
        grade = 'C';
}
else if ( marks>= 50 && marks <= 59){
        grade = 'D';
}
else if ( marks>= 0 && marks <= 49){
        grade = 'F';
}

// else {
//         grade="Entre valid marks";
// }

console.log("Your Marks :",marks , " & Your grade is " ,grade );
















