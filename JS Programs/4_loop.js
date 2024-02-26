//for loop
// let sum =0 ;
// for (i=1 ; i<=100 ; i++){
//     sum=sum+i
// }
// console.log(sum);

// let a = [];


// function inp(){

//     for(count = 1;count <=100;count++){
//     if(count % 3 === 0 && count % 5 === 0 ){
//         a.push("FizzBuzz")
//     }
//     else if (count % 3 === 0 ){
//         a.push("Fizz");
//     } 
//     else if(count % 5 ===0 ){
//         a.push("Buzz")
//     }
     
//     else {
//         a.push(count);
//     }
    
//     }
//     console.log(a);

    
// }
// inp()

// Fibonacii
function fib(n) {
    let a = [];
    if (n === 1) {
        console.log(0);
    } else if (n === 2) {
        console.log(0, 1);
    } else {
        a = [0, 1];
        for (let i = 2; i < n; i++) {
            let b = a[a.length - 2] + a[a.length - 1];
            a.push(b);
        }
        console.log(a.join(', ')); 
    }
}
 fib(5);




//while loop

// let a=1
// while(a<=5){
//     console.log("xyz" ,a );
//     a++;
// }

// let a = [];
// let count = 1;

// function inp(){

//     while(count <=100){
//     if(count % 3 === 0 && count % 5 === 0 ){
//         a.push("FizzBuzz")
//     }
//     else if (count % 3 === 0 ){
//         a.push("Fizz");
//     } 
//     else if(count % 5 ===0 ){
//         a.push("Buzz")
//     }
     
//     else {
//         a.push(count);
//     }
//     count++;
//     }
//     console.log(a);

    
// }
// inp()

// function bottle(){
//     count = 100;
//     while( count > 0){
//         console.log(count + " bottles of beer on the wall, " + count +" bottle of beer.");
//         console.log("Take ne bottle and pass it around, " + count +" bottle of beer on the wall.");
//         count--;
//     }
//     console.log("No more bottle of beer on the wall, no more beer.");
//     console.log("Go to store and buy some more, 99 bottle of beer on the wall.");
// }
// bottle();




